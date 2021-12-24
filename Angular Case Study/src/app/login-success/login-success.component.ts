import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {

  tasdata!: Task;
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

}

