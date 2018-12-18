import { Component, OnInit } from '@angular/core';
import {Weather} from '../weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  weather: Weather = new Weather();

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');

    setTimeout(() => {
      this.weather.city = 'Madrid ES';
      this.weather.date = 'Tue, 01 May 2018 06:00 PM CEST';
      this.weather.humidity = 32;
      this.weather.info = 'Nublado';
      this.weather.maxtemperature = 24;
      this.weather.mintemperature = 10;
      this.weather.pressure = 1080;
      this.weather.sunrise = '6:58 am';
      this.weather.sunset = '11:40 pm';
      this.weather.temperature = 18;
      this.weather.winddirection = 180;
      this.weather.windspeed = 26;
      console.log('call to server finalizado');
      console.log(this.weather);

    }, 1000);

    setTimeout(() => {
      this.weather.temperature = 20;
    }, 3000);

    console.log(this.weather);
  }


}
