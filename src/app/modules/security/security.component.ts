import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { LoginService } from 'src/app/services/security/login/login.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  public Login: LoginModel = {
    email: "",
    password: ""
  }

  public submit(): void {
    this.loginService.login(this.Login).subscribe((response) => {
      if (response[0]){
        this.router.navigate(['dashboard']);
      } else {
        this.router.navigate(['main/security']);
      }
    })
  }

  ngOnInit(): void {
  }

}
