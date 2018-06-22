import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {

  loginForm: FormGroup;
  //post:any;                     // A property for our submitted form
  username:string = '';
  password:string = '';
  titleAlert: string = '';
  constructor(private fb: FormBuilder) { 

    // this.loginForm = fb.group({
    //   'username' : [null, Validators.required],
    //   'password' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])],
    //   'validate' : ''
    // });

  }

  ngOnInit() {
    this.loginForm.get('validate').valueChanges.subscribe(

      (validate) => {

          if (validate == '1') {
              this.loginForm.get('password').setValidators([Validators.required, Validators.minLength(3)]);
              this.titleAlert = 'You need to specify at least 3 characters';
          } else {
              this.loginForm.get('username').setValidators(Validators.required);
          }
      });
  }

  SignIn(post) {
    this.username = post.value.username;
    this.password = post.value.password;
  }

}
