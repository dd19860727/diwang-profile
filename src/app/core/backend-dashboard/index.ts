import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class BackendDashboardComponent implements OnInit {
    
    constructor(private router: Router) {}

    ngOnInit(){
      //  this.router.navigateByUrl("https://domains.google/");
    };
}