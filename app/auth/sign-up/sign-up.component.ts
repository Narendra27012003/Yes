import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  imports: [CommonModule, FormsModule]
})
export class SignUpComponent {
  username = '';
  password = '';
  confirmPassword = '';

  constructor(private userService: UserService, private router: Router) {}

  onSignUp() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Add the new user to the in-memory list and localStorage
    this.userService.addUser({ username: this.username, password: this.password });
    alert('Sign Up Successful! Please Sign In.');
    // Redirect back to the Sign-In page
    this.router.navigate(['/']);
  }
}
