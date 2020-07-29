import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../weatherData';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  city = 'Nürnberg';
  zip = '90459';
  country = 'de';
  weatherData = new WeatherData();
  msg = '';

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.getWeatherByCityName();
  }

  getWeatherByCityName(){
    this.weatherService.getWeatherByCityName(this.city).subscribe(
      data => {
        this.weatherData = data;
      },
      error => {
        this.msg = error.error;
      }
    );
  }

  getWeatherByZipAndCountryCode(){
    this.weatherService.getWeatherByZipAndCountryCode(this.zip, this.country).subscribe(
      data => {
        this.weatherData = data;
      },
      error => {
        this.msg = error.error;
      }
    );
  }
}

