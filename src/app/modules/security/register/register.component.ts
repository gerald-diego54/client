import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/models/RegisterModel';
import { RegisterService } from 'src/app/services/security/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private registerService: RegisterService
  ) { }

  public Register: RegisterModel = {
    name: "",
    email: "",
    password: "",
    confirm_password: ""
  }

  public submit(): void {
    if (this.Register.password == this.Register.confirm_password) {
      console.log(this.Register);
      this.registerService.register(this.Register).subscribe((response) => {
        // console.log(response);
      });
    } else {
      // console.log('Password mismatch!');
    }
  }

  ngOnInit(): void {
  }

}
