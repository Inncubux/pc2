import { Component, Input } from '@angular/core';
import { responseApiGetAll } from '../../interfaces/responeApi_GetAll';

@Component({
  selector: 'rick-character',
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  @Input() character!: responseApiGetAll;
}
