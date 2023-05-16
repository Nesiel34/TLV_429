import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from './email.service';
import { error } from 'console';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
  providers:[EmailService]
})
export class EmailFormComponent implements OnInit {

  constructor(private emailService:EmailService) { }
  fg!:FormGroup;
  result!:string;
  ngOnInit(): void {
    this.fg = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
    });

  }

  submitForm(){
    this.emailService.postEmail(this.fg.controls["email"].value).subscribe({
      next:(result)=>{
        this.result = JSON.stringify(result);
        console.log(result);
      },
      error:(e)=>{
        console.log(e);
        if(e.status===429){
          this.result = "Too Many requests";
        }
        else {
          this.result = e.message;
        }
      }
    });
  }

}
