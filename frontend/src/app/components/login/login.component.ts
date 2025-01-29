import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  private router = inject(Router);

  checkUserAndPassword() {
    return this.username === 'admin' && this.password === 'admin';
  }

  login(e: Event) {
    e.preventDefault();
    if (this.checkUserAndPassword()) this.router.navigate(['/admin']);
  }
}
