import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: '../auth.shared.scss'
})
export class SignupComponent {
  signupForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
    passwordConfirmation: new FormControl('')
  })

  errors:string[] = [];

  constructor(private authService: AuthenticationService, private router:Router) {}

  onSignup = () => {
    const formValue = this.signupForm.value;
    this.authService.signup(formValue).subscribe({
      next: (res:any) => {
        this.router.navigate(['/login']);
      },
      error: (error:any) => {
        console.log(error.error);
        this.errors = error.error;

      }
    })
  }
}
