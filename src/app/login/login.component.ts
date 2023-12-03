import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { apidata } from '../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
data:Array<apidata>=[]
  constructor(public http:HttpService){
      console.log(this.http.code)


      this.http.get().subscribe(
        (data)=>{
          this.data=data
        },
        (err)=>{
          console.error(err)
        }
      )

    }


}
