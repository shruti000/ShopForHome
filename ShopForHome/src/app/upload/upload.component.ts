import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  name:string="";
  file:any;
  msg:string="";
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }


  getName(name:string){
    this.name=name;

  }

  getFile(event:any){
    this.file=event.target.files[0];
    console.log("file",this.file)

  }

  submitData(){
    let formData=new FormData();
    formData.set("name",this.name)
    formData.set("file",this.file)

    this.http.post("http://localhost:9123/api/csv/upload",formData).subscribe(data=>{
      alert("File uploaded Successfully");
      this.name="uploaded sucessfully"

    },error=>{
      this.name="There was a problem uploading the file"
      console.log("error is"+error);
    })
  }

}
