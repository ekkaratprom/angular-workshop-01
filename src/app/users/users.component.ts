import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  
  firstName = '';
  lastName = '';
  name = '';
  users = [] ; //array
  show = true ;
  completed = 0;
  
  constructor() { }

  inputYourName(event: any){
    this.firstName = event.target.value;
  }

  inputLastname(input: string): void{
    this.lastName = input;
  }

  saveName() : void {
    if (this.firstName == null || this.firstName.trim() === ''){
      return alert("First name not be empty or spacebar"); 
    }
      /* this.name = this.firstName +' '+ this.lastName ; */  // String concat
      this.name = `${this.firstName} ${this.lastName}` // String template 
      //Append to list/Array
      this.users.push({task: this.name, completed: false})
      
  
  }

  selected(index : number){
    if(!this.users[index].completed){
      this.completed++;
    } else {
      this.completed--;
    }
    this.users[index].completed = !this.users[index].completed
  }


  ngOnInit(): void {
  }

  

}
