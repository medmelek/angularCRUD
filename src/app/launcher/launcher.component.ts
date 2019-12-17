import { Component, OnInit } from '@angular/core';
import {HeroService} from '../services/hero.service';
import {TodoItem} from '../models/todo';
import {LoaderService} from '../services/loader.service';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.css']
})
export class LauncherComponent implements OnInit {
  myTodoItem: TodoItem ;
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  isLoading2: boolean ;
  constructor(private heroservice: HeroService, private loaderService: LoaderService) { }

  ngOnInit() {
      return this.heroservice.getItem().subscribe(data => {
        console.log(data);
        this.myTodoItem = data ;
        this.isLoading2 = this.myTodoItem.completed;
      });
  }

}
