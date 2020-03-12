import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit() {
  }
 onLoadServers(id:number){
      this.router.navigate(['/servers',id,'edit'],{queryParams:{allowedit:id},fragment:'loading'});
 }

 onLogIn()
 {
   this.authService.login();
 }

 onLogOut(){
   this.authService.logout();
 }

}


// router.navigate method takes elements which configure the path as arguments