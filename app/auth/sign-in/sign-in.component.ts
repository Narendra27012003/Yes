import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  imports: [CommonModule, FormsModule, RouterLink]
})
export class SignInComponent {
  username = '';
  password = '';

  constructor(private router: Router, private userService: UserService) {}

  onSignIn() {
    // Validate the credentials using the user service
    if (this.userService.validateUser(this.username, this.password)) {
      // Navigate to the home page (which shows header and sidenav)
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials!');
    }
  }
}
