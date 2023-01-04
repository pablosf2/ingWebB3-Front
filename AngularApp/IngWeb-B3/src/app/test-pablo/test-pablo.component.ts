import { Component, OnInit } from '@angular/core';
// Import the Cloudinary classes.
import {Cloudinary, CloudinaryImage, CloudinaryFile} from '@cloudinary/url-gen';
import {fill} from "@cloudinary/url-gen/actions/resize";
import axios from "axios";
import { Console } from 'console';
import { HttpClient} from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';

const imagen1 = "https://estaticos-cdn.sport.es/clip/0f6cb245-7f0d-415c-91cc-0d9a8a84a47b_alta-libre-aspect-ratio_default_0.jpg"
const imagen2 = encodeURI(String.raw`app\test-pablo\prueba.jpg`)
const url = "https://api.cloudinary.com/v1_1/dee6pfpam/upload";
const payload = { "file" : decodeURI(imagen2) , "api_key": "714814147251835", "upload_preset": "ontg4fqa" };

@Component({
  selector: 'app-test-pablo',
  templateUrl: './test-pablo.component.html',
  styleUrls: ['./test-pablo.component.css']
})
export class TestPabloComponent implements OnInit {

  exampleString: string;
  exampleArray: string[];
  img!: CloudinaryImage;
  fileToUpload: File | null = null;
  httpClient: any;
  uploader:FileUploader;


  constructor(private http: HttpClient) {
    this.exampleArray = [];
    this.exampleString = "Hola!! Esto es Test-Pablo";
    this.uploader =  new FileUploader({ url: "api/your_upload", removeAfterUpload: false, autoUpload: true });

   }

  ngOnInit(): void {
        // Create a Cloudinary instance and set your cloud name.
        const cld = new Cloudinary({
          cloud: {
            cloudName: 'dee6pfpam'
          }
        });
        // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
        this.img = cld.image('samples/bike');
    
        // Resize to 250 x 250 pixels using the 'fill' crop mode.
        this.img.resize(fill().width(250).height(250));
        this.mandarAPI();
  }

  mandarAPI(){
    console.log(payload)
    axios.post(url, payload).then((response) => {
      console.log(response.data);
  }).catch((error) => {
      console.error(error);
  });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  capturarFile($event: Event) {
    const target = $event.target as HTMLInputElement
    if (target.files !== null){
      let file = (target.files[0]);
      console.log(file)
      this.encodeImageFileAsURL(file)
    }
    }

    encodeImageFileAsURL(element: File | null) {
      if (element !== null) {
        var file = element
        var reader = new FileReader();
        reader.onloadend = function() {
          console.log('RESULT', reader.result)
      }
      reader.readAsDataURL(file);
    }
    }
}
