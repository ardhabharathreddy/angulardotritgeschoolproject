import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardc',
  templateUrl: './dashboardc.component.html',
  styleUrls: ['./dashboardc.component.css']
})
export class DashboardcComponent implements OnInit {
  logout(){
    localStorage.removeItem("MyAppToken");
    this.router.navigateByUrl("/login");
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
