import { Component, OnInit } from '@angular/core';
import {Weather} from '../weather.model';
import { Forecast } from '../forecast.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  weather: Weather = new Weather();
  rutaImagen: String;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
    this.rutaImagen = 'https://drive.google.com/uc?id=1DRGmofyk2KbKvY8HF8vvqcBGj7VRXKnY';

    setTimeout(() => {
      this.weather.city = 'Madrid ES';
      this.weather.date = 'Tue, 01 May 2018 06:00 PM CEST';
      this.weather.humidity = 32;
      this.weather.info = 'Cloudy';
      this.weather.maxtemperature = 24;
      this.weather.mintemperature = 10;
      this.weather.pressure = 1080;
      this.weather.sunrise = '6:58 am';
      this.weather.sunset = '11:40 pm';
      this.weather.temperature = 2;
      this.weather.winddirection = 180;
      this.weather.windspeed = 26;
      this.weather.forecast = new Forecast();
      this.weather.forecast.date = '04 May 2018';
      this.weather.forecast.day = 'Fri';
      this.weather.forecast.info = 'Mostly Cloudy';
      this.weather.forecast.maxTemperature = 23;
      this.weather.forecast.minTemperature = 8;
      console.log('call to server finalizado');
      console.log(this.weather);

    }, 1000);

    /*setTimeout(() => {
      this.weather.temperature = 20;
    }, 3000);*/
  }
    // tslint:disable-next-line:comment-format
    // modificar el color de la temperatura depediendo de si es muy alta o muy baja//

    public getColorTemperature(): string {
      if (this.weather !== undefined && this.weather.temperature >= 24) {
        return '#EF6C00';
      }

      if (this.weather !== undefined && this.weather.temperature <= 10) {
        return '#0277BD';
      }

      return '#212121';
    }
    // console.log(this.weather);
  }



