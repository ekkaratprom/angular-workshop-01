import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ekkarat';
  score = 100;
  show = true ;
  firstName = '';
  lastName = '';
  name = '';
  colors = ['red','green','blue'] ; //array

  inputYourName(event: any){
    this.firstName = event.target.value;
  }

  inputLastname(input: string): void{
    this.lastName = input;
  }

  saveName() : void {
      this.name = this.firstName +' '+ this.lastName ; // String concat
      /* this.name = `$(firstName) $(lastName)`; */ // String template 
  
  }

  
}
