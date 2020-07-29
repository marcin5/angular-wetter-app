import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from './weatherData';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  cityUrl = 'http://localhost:8080//weather/city';
  zipcodeUrl = 'http://localhost:8080//weather/city';

  constructor(private http: HttpClient) { }

  public getWeatherByCityName(cityName: string): Observable<any>{
    const params = new HttpParams().set('cityName', cityName);
    return this.http.get<any>(this.cityUrl, {params});
  }

  public getWeatherByZipAndCountryCode(zipCode: string, countryCode: string): Observable<any>{
    const params = new HttpParams()
    .set('zipCode', zipCode)
    .set('countryCode', countryCode);
    return this.http.get<any>(this.zipcodeUrl, {params});
  }
}
