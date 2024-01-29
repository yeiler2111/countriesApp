import { country } from './../../interfaces/countries';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { countriesService } from '../../services/countries.service';
import { NgIf } from '@angular/common';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-bycountry-page',
  standalone: true,
  imports: [NgIf,DecimalPipe],
  templateUrl: './bycountry-page.component.html',
  styles: ``
})
export class BycountryPageComponent implements OnInit {
  public countries?: country | null;
  constructor(private activateRoute: ActivatedRoute, private countriesService: countriesService, private routes: Router) { }
  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      console.log({ params: params['id'] })
      this.countriesService.searchCountryByAlpahaCode(params['id']).subscribe(country => {
        console.log(country)
        if (country?.length === 0) return this.routes.navigateByUrl('');
        return this.countries = country![0];


      })
    })
  }

}
