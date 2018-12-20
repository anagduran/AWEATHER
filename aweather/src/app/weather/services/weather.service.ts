import { Injectable } from '@angular/core';
import { Weather } from '../weather.model';
import { Forecast } from '../forecast.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  public getWeatherInfo(cityName: string): Weather {
      const weather = new Weather();
      weather.city = 'Madrid';
      weather.date = 'Tue, 01 May 2018 06:00 PM CEST';
      weather.humidity = 32;
      weather.info = 'Cloudy';
      weather.maxtemperature = 24;
      weather.mintemperature = 10;
      weather.pressure = 1080;
      weather.sunrise = '6:58 am';
      weather.sunset = '11:40 pm';
      weather.temperature = 2;
      weather.winddirection = 180;
      weather.windspeed = 26;
      weather.forecast = new Forecast();
      weather.forecast.date = '04 May 2018';
      weather.forecast.day = 'Fri';
      weather.forecast.info = 'Mostly Cloudy';
      weather.forecast.maxTemperature = 23;
      weather.forecast.minTemperature = 8;
      return weather;

  }

}
