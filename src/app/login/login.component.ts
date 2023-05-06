import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { StorageService } from '../service/storage.service';
import { Router } from '@angular/router'
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(public authService: AuthService, private storageService: StorageService, private router: Router){ }

  ngOnInit(): void {
    console.log("Login page loaded..")
  }

  onSubmit(): void {
    console.log("Login try")
    const { username, password } = this.form;


    // this.authService
    //   .login(username, password)
    //   .subscribe((response) => {
    //     console.log(response);
    //     this.router.navigate(['/'])
    //   }),
    //   (error) => {
    //     console.log("Login failed");
    //     this.errorMessage = error.error.message;
    //     this.isLoginFailed = true;
    //   }

    this.authService.login(username, password).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/'])
        this.storageService.saveUser(res);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
      },
      err => {
        console.log("Login failed");
        console.log(err);
        this.errorMessage = err.error;
        console.log("DEBUGDEBUG");
        this.isLoginFailed = true;
      },
      () => console.log("HTTP request completed")
    );
    
  
    // this.authService.login(username, password).subscribe({
    //   next: data => {
    //     console.log("Succesful login");
    //     this.storageService.saveUser(data);
    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.router.parseUrl("/");

      // this.authService.login(username, password).pipe(
      //   tap((response: any) => {
      //     console.log(response);
      //     this.storageService.saveUser(response);
      //     this.isLoginFailed = false;
      //     this.isLoggedIn = true;
      //     this.router.parseUrl("/")
      //   })
      // )
    
      // console.log(this.authService.login(username, password))
    //   },
    //   error: err => {
    //     console.log("Login failed")
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // });

  }

  reloadPage(): void {
    window.location.reload();
  }




}
