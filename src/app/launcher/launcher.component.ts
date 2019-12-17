import { TodoItem } from './../models/todo';
import { Component, OnInit } from '@angular/core';
import {HeroService} from '../services/hero.service';
import {LoaderService} from '../services/loader.service';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.css']
})
export class LauncherComponent implements OnInit {
  loading: boolean;
  value : any
  constructor(private heroservice: HeroService, private loaderService: LoaderService) {
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

}
