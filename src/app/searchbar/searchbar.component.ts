import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  imports: [FormsModule, CommonModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css',
})
export class SearchbarComponent {
  public searchInput: String = '';
  public seriesList: Array<any> = [
    {
      name: 'Prison Break',
      description:
        "Structural Engineer Michael Scofield turns himself into the Fox River Penitentiary in order to break out his brother Lincoln Burrows, who is on death row for the murder of the Vice President's brother. But Lincoln was set up by some of the Company (an agency formed by corrupt government officials) guys, headed by General Jonathan Krantz. Michael breaks out from Fox River with his brother Lincoln and other convicts.",
      genres: 'Action, Crime, Drama, Mystery, Thriller',
      releaseDate: '29 August 2005 (USA)',
    },
    {
      name: 'Vikings',
      description:
        "The adventures of Ragnar Lothbrok: the greatest hero of his age. The series tells the saga of Ragnar's band of Viking brothers and his family as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods: legend has it that he was a direct descendant of Odin, the god of war and warriors.",
      genres: 'Action, Drama, History, War',
      releaseDate: '3 March 2013 (USA)',
    },
    {
      name: 'Person of Interest',
      description:
        'A billionaire software-genius named Harold Finch creates a Machine for the government that is designed to detect acts of terror before they can happen, by monitoring the entire world through every cell-phone, email and surveillance camera. Finch discovered that the machine sees everything, potential terrorist acts and violent crimes that involve ordinary people.',
      genres: 'Action, Drama, Mystery, Sci-Fi, Thriller',
      releaseDate: '22 September 2011 (USA)',
    },
  ];
  public searchResult: Array<any> = [];
  public toggle: Boolean = false;
  public selectedInput: any = {};

  constructor() {}

  fetchSeries(value: string) {
    if (value === '') {
      return (this.searchResult = []);
    }
    this.searchResult = this.seriesList.filter((series) => {
      return series.name
        .toLowerCase()
        .startsWith(value.toLowerCase());
    });
    this.toggle = false;
    return this.searchResult;
  }

  showDetails(series: any) {
    this.selectedInput = series;
    this.toggle = true;
    this.searchInput = series.name;
  }
  ngOnInit() {}
}
