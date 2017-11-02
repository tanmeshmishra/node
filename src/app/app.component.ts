import { Component } from '@angular/core';
import { ExitService } from './exit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private service: ExitService) {}
  doThis() {
    this.service.exit=true;
  }
}
