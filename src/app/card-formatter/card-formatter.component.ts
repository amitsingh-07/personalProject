import { Component, OnInit,  } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CreditCardFormatPipe } from '../Pipes/CreditCardFormat.pipe';

@Component({
  selector: 'app-card-formatter',
  templateUrl: './card-formatter.component.html',
  styleUrls: ['./card-formatter.component.css']
})
export class CardFormatterComponent implements OnInit {

  showNum = false;
  creditCardNumber:number = 0;
  formattedNumber: number | undefined;
  formGrp11: FormGroup = new FormGroup({
    credit: new FormControl('', Validators.required)
  })

  constructor(private creditCardPipe: CreditCardFormatPipe){

  }
  ngOnInit(): void {
  }

  get creditError(){
    let creditMsg = '';
    let creditControls = this.formGrp11.get('credit');

    if(creditControls?.touched){
      if(creditControls.invalid){
        creditMsg = 'Enter the Card Number'
      }
    }
    return creditMsg;
  }

 cardSubmit(){
    this.showNum = true;
    // this.formattedNumber = this.creditCardPipe.transform(this.creditCardNumber)
  }

}
