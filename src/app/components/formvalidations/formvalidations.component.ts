import { Component } from '@angular/core';

@Component({
  selector: 'app-formvalidations',
  templateUrl: './formvalidations.component.html',
  styleUrls: ['./formvalidations.component.css']
})
export class FormvalidationsComponent {
  name : string = ""
  email : string = ""
  contact : string = ""
  password : string = ""

  isSubmitted : boolean = false;

  user : any = {
    name : "",
    email : "",
    contact : 0,
    password : ""
  }



  onSubmit() : void {
    this.user.name = this.name
    this.user.email = this.email
    this.user.contact = this.contact
    this.user.password = this.password
    console.log(this.user);
    this.isSubmitted = true;
  }
}
