import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";

@Injectable()
export class AnnuallyContributionProtection implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate() {
        if (localStorage.getItem("token") == null) {
            this.router.navigate(["main/security"]);
            return false;
        } else {
            return true;
        }
    }
}