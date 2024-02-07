import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder} from '@angular/forms'
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
  providers : [ApiServiceService]
})
export class AddFormComponent {

  constructor(private apiser: ApiServiceService){}
  formDetails = {
    name : '',
    controllerType : '',
    scheme : '',
    host : '',
    port : '',
    uname : '',
    password : '',
    zone : '',
    domain : ''
  }

  formGrp: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),

    controllerType: new FormControl('', [Validators.required]),
    scheme: new FormControl('', [Validators.required]),
    zone: new FormControl('', [Validators.required]),
    domain: new FormControl('', [Validators.required]),

    host: new FormControl('', [Validators.required]),
    port: new FormControl('', [Validators.required]),
    uname: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required])
  })
  onSubmit(form: any){
    console.log("Form Form : "+form.value);
    this.apicall();
    this.postApiCall();
    alert("Form Submitted Successfully");
    console.log("From JSON : ",this.formDetails);
  }
  apicall(){
    this.apiser.getInfo().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  postApiCall(){
    const apidata = JSON.stringify(this.formDetails)
    this.apiser.postDate(apidata).subscribe(
      (response) =>{
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  get nameControl(){
    let nameErrMsg = ''
    let nameCtrl = this.formGrp.get('name')
    if(nameCtrl?.touched && nameCtrl?.invalid){
      nameErrMsg = 'Name Field is required'
    }
    return nameErrMsg;
  }

  get hostControl(){
    let hostErrMsg = ''
    let nameCtrl = this.formGrp.get('host')
    if(nameCtrl?.touched && nameCtrl?.invalid){
      hostErrMsg = 'Host Field is required'
    }
    return hostErrMsg;
  }

  get portControl(){
    let nameErrMsg = ''
    let nameCtrl = this.formGrp.get('port')
    if(nameCtrl?.touched && nameCtrl?.invalid){
      nameErrMsg = 'Port Field is required'
    }
    return nameErrMsg;
  }

  get unameControl(){
    let nameErrMsg = ''
    let nameCtrl = this.formGrp.get('uname')
    if(nameCtrl?.touched && nameCtrl?.invalid){
      nameErrMsg = 'UserName Field is required'
    }
    return nameErrMsg;
  }

  get pwdControl(){
    let nameErrMsg = ''
    let nameCtrl = this.formGrp.get('pwd')
    if(nameCtrl?.touched && nameCtrl?.invalid){
      nameErrMsg = 'Password Field is required'
    }
    return nameErrMsg;
  }

  get dropdown1(){
    let drpMsg = ''
    let drpCtrl = this.formGrp.get('controllerType')
    if(drpCtrl?.touched && drpCtrl?.invalid){
      drpMsg = 'field is required'
    }

    return drpMsg
  }

  get dropdown2(){
    let drpMsg = ''
    let drpCtrl = this.formGrp.get('scheme')
    if(drpCtrl?.touched && drpCtrl?.invalid){
      drpMsg = 'field is required'
    }

    return drpMsg
  }

  get dropdown3(){
    let drpMsg = ''
    let drpCtrl = this.formGrp.get('zone')
    if(drpCtrl?.touched && drpCtrl?.invalid){
      drpMsg = 'field is required'
    }

    return drpMsg
  }

  get dropdown4(){
    let drpMsg = ''
    let drpCtrl = this.formGrp.get('domain')
    if(drpCtrl?.touched && drpCtrl?.invalid){
      drpMsg = 'field is required'
    }

    return drpMsg
  }
}
