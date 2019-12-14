import { myitem } from './mymodel';
import { HeroService } from './hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'tpfront';
  mydata: myitem;
  value: string ;


  constructor(private heroService: HeroService) {}

  ngOnInit() {
    return this.heroService.getItem().subscribe(data => {
      console.log(data);
      this.mydata = data;
      this.setValue();
    });
  }
  setValue() {
    this.value = this.mydata.title;
  }
}
