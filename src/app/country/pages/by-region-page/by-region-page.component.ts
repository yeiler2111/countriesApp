import { Component, OnInit } from '@angular/core';
import { countriesService } from '../../services/countries.service';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { country } from '../../interfaces/countries';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { LodingSpinnerComponent } from "../../../shared/components/loding-spinner/loding-spinner.component";
import { region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  templateUrl: './by-region-page.component.html',
  styles: ``,
  imports: [SearchBoxComponent, CountryTableComponent, NgFor, NgClass, NgIf, LodingSpinnerComponent]
})

export class ByRegionPageComponent implements OnInit{


  public isLoading: boolean = false;
  public region: country[] = []
  public regions: region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public selectRegions?: region;
  constructor(private countriesService: countriesService) { }ngOnInit(): void {
    this.selectRegions = this.countriesService.cacheStore.byRegion.region
    this.region = this.countriesService.cacheStore.byRegion.countries;
  }
;
  searchRegion(term: region) {
    this.isLoading = true;
    this.selectRegions = term
    this.countriesService.searchRegion(term).subscribe(res => this.region = res);
    term = '';
    this.isLoading = false;
  }
}
