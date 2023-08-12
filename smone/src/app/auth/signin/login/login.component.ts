import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  searchTerm:string=''
  constructor() { }

  ngOnInit(): void {
  }

  authenticate(){
    alert("service is not activated");
  }

  search(username:string){
    this.searchTerm=username
    //alert(username+" not found");
  }
}
