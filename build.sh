#!/bin/bash

platforms=("linux/amd64" "linux/arm64")
package_name=$(jq -r '.name' package.json)
package_version=$(jq -r '.version' package.json)

# Build the project
echo "Building the project..."
npm install
npm run build

# Build the docker image
echo "Building the docker images..."

for platform in ${platforms[@]}; do
  echo "Platform: $platform."

  tag=$(echo "${platform//\//_}" | tr -d 'linux_' | xargs -I {} echo {})

  podman buildx build --no-cache --pull \
    --platform $platform \
    -t kennycallado/$package_name:${package_version}-${tag} \
    -f ./Containerfile .
done

# Push the docker images
echo "Pushing the docker images..."
podman push -a kennycallado/${package_name}

# Create the manifest
echo "Creating the manifest for the version: $package_version"
podman manifest create kennycallado/${package_name}:${package_version} \
  kennycallado/${package_name}:${package_version}-amd64 \
  kennycallado/${package_name}:${package_version}-arm64

# manifest for latest version
echo "Creating the manifest for latest version..."
podman manifest create kennycallado/${package_name}:latest \
  --amend kennycallado/${package_name}:${package_version}-amd64 \
  --amend kennycallado/${package_name}:${package_version}-arm64

# push the manifests
echo "Pushing the manifests..."
podman manifest push --purge kennycallado/${package_name}:${package_version}
podman manifest push --purge kennycallado/${package_name}:latest

# remove the images
echo "Removing the images..."
podman rmi kennycallado/${package_name}:${package_version}-amd64
podman rmi kennycallado/${package_name}:${package_version}-arm64

# remove the manifest
echo "Cleaning up the manifest..."
podman system prune -f
