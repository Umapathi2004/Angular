import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css'],
})
export class UserCardsComponent {
@Input() user!: {
  name:string;
  age:number;
  place:string;
  contact:string
}
}
