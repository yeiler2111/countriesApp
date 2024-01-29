import { Component, Input } from '@angular/core';
import { country } from '../../interfaces/countries';
import { DatePipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-table',
  standalone: true,
  imports: [NgFor,NgIf,DecimalPipe, RouterLink],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {
  @Input()
  public countrie: country[] = [];

}
