import { TodoItem } from './../models/todo';
import { Component, OnInit } from '@angular/core';
import {HeroService} from '../services/hero.service';
import {LoaderService} from '../services/loader.service';
import {Subject} from 'rxjs';
import {FormGroup,FormControl, Validators} from '@angular/forms' ;
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.css']
})
export class LauncherComponent implements OnInit {
  loading: boolean;
  value : any
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    private heroservice: HeroService,
    private loaderService: LoaderService,
    private router : Router 
    ) {
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });
   }

  ngOnInit() {
      return this.heroservice.getItem().subscribe(response => {
        console.log(response);
       // this.status= response.status

      
      });
  }

  onSubmit() {
    this.router.navigate(['/dashboard']);
    // TODO: Use EventEmitter with form value
   // console.warn(this.profileForm.value);
   //console.warn(this.profileForm.status); for validation

  }

}
