import { Component } from '@angular/core';
import 'phaser';
import { config } from '../game/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phaser = Phaser;
  config = config;
}
