import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl({value: '', disabled: true}),
    name: new FormControl('')
  });
  email = "E-mail";
  name = "Név";

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.email = this.authService.getCurrentUserEmail();
    this.name = this.authService.getCurrentUserName();
  }

  navTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  save(): void {
    if (this.form.valid) {
      this.authService.updateCurrentUserName(this.form.value.name).then(
        result => {
          console.log(result);
          this.navTo('/home');
        }
      );
    }
  }
}
