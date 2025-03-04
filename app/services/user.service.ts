import { Injectable } from '@angular/core';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = []; // In-memory user list

  constructor() {
    this.loadUsersFromJson();
  }

  // 1. Load from localStorage if available, otherwise fetch from JSON
  private async loadUsersFromJson(): Promise<void> {
    // Check if we have stored users in localStorage
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      // If localStorage has users, parse them
      this.users = JSON.parse(storedUsers);
    } else {
      // Otherwise, fetch from /users.json and store in memory + localStorage
      const response = await fetch('/users.json');
      if (!response.ok) {
        console.error('Failed to load users.json');
        return;
      }
      const data = await response.json(); // { users: [...] }
      this.users = data.users || [];
      this.saveToLocalStorage();
    }
  }

  // 2. Save current users array to localStorage
  private saveToLocalStorage(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  // 3. Validate user credentials for sign in
  validateUser(username: string, password: string): boolean {
    return this.users.some(
      (u) => u.username === username && u.password === password
    );
  }

  // 4. Add new user for sign up
  addUser(newUser: User): void {
    this.users.push(newUser);
    this.saveToLocalStorage();
  }
}
