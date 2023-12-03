import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  //dependency injectio
  constructor(private router:Router){

  }


  btn(){
    this.router.navigateByUrl("/login")
  }
}
