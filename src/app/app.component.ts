import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { SidebarComponent } from './shared/pages/sidebar/sidebar.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, SharedModule, HomePageComponent, AboutPageComponent, SidebarComponent, ContactPageComponent]
})
export class AppComponent {
  title = '04-countryApp';
}
