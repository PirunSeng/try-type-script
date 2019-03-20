import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'try-type-script';
  keepHistory = true;
  

  changeMe(){
    console.log('sdf');
  }
}
