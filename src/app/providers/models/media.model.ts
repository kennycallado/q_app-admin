export class Media {
  id: number;
  name?: string;
  media_type: MediaType;
  url: string;
}

export enum MediaType {
  Image = 'image',
  Video = 'video',
}
