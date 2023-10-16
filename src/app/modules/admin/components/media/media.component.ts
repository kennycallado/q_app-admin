import { Component } from '@angular/core';
import { Media, MediaType } from 'src/app/providers/models/media.model';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.sass']
})
export class MediaComponent {
  currentMedia: Media = { id: 0, name: '', media_type: MediaType.Image, url: '' }
  mediaTypes: string[] = Object.keys(MediaType).filter(key => isNaN(Number(key)))

  allMedia: Media[] = [
    { id: 1, name: 'media 1', media_type: MediaType.Image, url: 'https://picsum.photos/200/300' },
    { id: 2, name: 'media 2', media_type: MediaType.Image, url: 'https://picsum.photos/200/300' },
    { id: 3, name: 'media 3', media_type: MediaType.Video, url: 'https://www.youtube.com/watch?v=eGi447l2_mM' },
  ]

}
