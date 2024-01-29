import { Component, OnInit } from '@angular/core';
import { countriesService } from '../../services/countries.service';
import { country } from '../../interfaces/countries';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { NgIf } from '@angular/common';
import { LodingSpinnerComponent } from "../../../shared/components/loding-spinner/loding-spinner.component";

@Component({
    selector: 'app-by-country-page',
    standalone: true,
    templateUrl: './by-country-page.component.html',
    styles: ``,
    imports: [SearchBoxComponent, CountryTableComponent, NgIf, LodingSpinnerComponent]
})
export class ByCountryPageComponent implements OnInit{
  public loading : boolean = false;
  public countrii: country[] = [];
  public initValue: string = '';
  constructor(private countriesService: countriesService) { }ngOnInit(): void {
    this.countrii = this.countriesService.cacheStore.byCountries.countries;
    this.initValue = this.countriesService.cacheStore.byCountries.term

  }
;
  searchCountry(term: string) {
    this.loading = true
    this.countriesService.searchCountry(term).subscribe(res => {
      console.log(res)
      this.countrii = res
      this.loading = false;
    });
    term = '';
  }
}
