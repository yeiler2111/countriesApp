import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, delay, map, of, tap } from "rxjs";
import { Cachestore } from '../interfaces/cahe-stores.interface';
import { country } from '../interfaces/countries';
import { region } from '../interfaces/region.type';


@Injectable({ providedIn: 'root' })
export class countriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1'
  public cacheStore: Cachestore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] }
  }
  constructor(private http: HttpClient) {
    this.loadFromLocalStorge();
  }

  private getCountriesRequest(url: string): Observable<country[]> {
    return this.http.get<country[]>(url)
      .pipe(
        catchError(() => of([])),

      )
  }

  searchCapital(term: string): Observable<country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cacheStore.byCapital = { term: term, countries }),
      tap(() => this.saveTOLocarStorge())
    )
  }
  searchRegion(term: region): Observable<country[]> {
    const url = `${this.apiUrl}/region/${term}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byRegion = { region: term, countries }),
        tap(() => this.saveTOLocarStorge())
      )
  }
  searchCountry(term: string): Observable<country[]> {
    const url = `${this.apiUrl}/name/${term}?fullText=true`;
    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cacheStore.byCountries = { term, countries }),
      tap(() => this.saveTOLocarStorge())
    )
  }
  searchCountryByAlpahaCode(code: string): Observable<country[] | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<country[]>(url).pipe(
      map(countries => countries.length > 0 ? countries : null),
      catchError(error => of([]))
    );
  }

  private saveTOLocarStorge() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore))
  }

  private loadFromLocalStorge() {
    if (!localStorage.getItem('cacheStore')) return

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!)

  }


}
