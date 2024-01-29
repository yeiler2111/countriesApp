import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { countriesService } from '../../services/countries.service';
import { country } from '../../interfaces/countries';
import { NgFor, NgIf } from '@angular/common';
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { LodingSpinnerComponent } from '../../../shared/components/loding-spinner/loding-spinner.component';
@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  templateUrl: './by-capital-page.component.html',
  styles: ``,
  imports: [SearchBoxComponent, NgFor, CountryTableComponent, LodingSpinnerComponent, NgIf]
})
export class ByCapitalPageComponent implements OnInit {
  public isLoading: boolean = false;
  public countri: country[] = [];
  public initialValue = '';
  constructor(private countries: countriesService) { }
  ngOnInit(): void {
    this.countri = this.countries.cacheStore.byCapital.countries;
    this.initialValue = this.countries.cacheStore.byCapital.term;
  }

  searchByCapital(term: string): void {
    this.isLoading = true;
    this.countries.searchCapital(term).subscribe(countries => {
      this.countri = countries
      this.isLoading = false;
    })
  }

}
