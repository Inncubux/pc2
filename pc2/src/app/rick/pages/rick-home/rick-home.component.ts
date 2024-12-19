import { Component, Inject } from '@angular/core';
import { RickService } from '../../service/rick.service';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';
import { SearcherComponent } from '../../components/Searcher/searcher.component';
import { Character } from '../../interfaces/ApiRespone';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from '../../components/button/button.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'rick-page-home',
  standalone: true,
  imports: [CharacterCardComponent, HttpClientModule, SearcherComponent, ButtonComponent, FormsModule, CommonModule],
  providers: [RickService],
  templateUrl: './rick-home.component.html',
  styleUrl: './rick-home.component.css'
})
export class RickHomeComponent {
  characters: Character[] = [];
  searchQuery = '';
  page = 1;
  total = 0;

constructor(@Inject(RickService) private rickService: RickService) {}

ngOnInit(): void {
  this.getCharacter();
}

getCharacter() {
  this.rickService.getCharacters(this.page).then((characters) => {
    this.characters = characters.results;
    this.total = characters.info.pages;
  });
}

searchCharacter(searchTerm: string) {
  this.searchQuery = searchTerm;
  this.page = 1; 
  this.getCharacter();
}

changePage(direction: 'next' | 'prev') {
  if (direction === 'next' && this.page < this.total) {
    this.page++;
  } else if (direction === 'prev' && this.page > 1) {
    this.page--;
  }
  this.getCharacter();
  }
}