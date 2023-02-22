import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string ='';

  amount: number = 0;
  height: number = 0;

  miles: number = 0;

  car = {
    make: "Toyota",
    model: "RAV4",
    year: 2020
  }

  onNameChange(value: any){
    this.name = value;
  }

  onDateChange(value: any){
    this.date = value;
  }

  onAmountChange(value: any){
    this.amount = parseFloat(value);
  }

  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }

  onMilesChange(value: string){
    this.miles = parseFloat(value);
  }
}
