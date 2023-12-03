import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

value:number=0
id!:number
  constructor(private activatedRoutes:ActivatedRoute,private router:Router){

    console.log(activatedRoutes.snapshot)
//     activatedRoutes.params.subscribe(
//       a=>{
// this.id=a['id']
//       }
//     )
this.id=activatedRoutes.snapshot.params['id']
  }

  btn(){
    // this.router.navigateByUrl("/parent/c1/"+this.value)
  this.router.navigate(['parent','c1',this.value])
  }


}
