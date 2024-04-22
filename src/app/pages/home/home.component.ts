import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  menuOpen = false;

  goTo(link:string) {
    window.open(link, '_blank');
  }


  toggleMenu() {

    if(this.menuOpen == true) {
      this.menuOpen = false;
    } else if (this.menuOpen == false) {
      this.menuOpen = true;
    }

    console.log(this.menuOpen)
  }
}
