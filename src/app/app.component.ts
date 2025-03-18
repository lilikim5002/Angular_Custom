import { Component } from '@angular/core';
import { SearchbarComponent } from './searchbar/searchbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
 
}
