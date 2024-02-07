import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  constructor(private api: ApiServiceService){}
  formdetails = {
    name: ''
  }
  result :any;

  async postapicall(){
    console.log(this.formdetails);
    const input = JSON.stringify(this.formdetails)
    this.api.postDate(input).subscribe(
      (response) =>{
        console.log(response);
        let modifiedResponse = response.text.replace(/\n/g, '<br>');
        // let modifiedResponse2 = modifiedResponse.replace(/```/g, '<!--');
        console.log(modifiedResponse);
        this.result = modifiedResponse;
      },
      (error) =>{
        console.log(error);
      }
    )
  }
}
