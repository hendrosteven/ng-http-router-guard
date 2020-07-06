import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  name: string = '';
  job: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSaveUser(){
    this.userService.saveUser(this.name, this.job).subscribe((result)=>{
      alert('Data saved!');
      this.name = '';
      this.job = '';
    })
  }

}
