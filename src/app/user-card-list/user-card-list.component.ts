import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardsComponent } from "../user-cards/user-cards.component";

@Component({
  selector:"app-user-card-list",
  imports: [UserCardsComponent, CommonModule],
  templateUrl:"./user-card-list.component.html",
  styleUrls:["./user-card-list.component.css"],
})
export class UserCardListComponent {
  users =[
    {name:"umapathi",age:21,place:"gummidipoondi",contact:"umapathi1014@gmail.com"},
    {name:"solomon",age:23,place:"ponneri",contact:"solomn@gmail.com"},
    {name:"deena",age:21,place:"ponneri",contact:"deena@gmail.com"}
  ];
}
