import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  Username = "";
  Password = "";

  constructor() {}

}
