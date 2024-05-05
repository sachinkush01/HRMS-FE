import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {



  constructor(public authService: AuthenticationService, private route: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.clearData();
    this.route.navigate(["hrms"]);
  }

}



