import { Component } from '@angular/core';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent {

  selectedFile!: File
  url: any

  onFileSelected(event : any) {
    this.selectedFile = <File> event.target.files[0]

    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);

    reader.onload = (_event) => {
      this.url = reader.result
    }
  }
}
