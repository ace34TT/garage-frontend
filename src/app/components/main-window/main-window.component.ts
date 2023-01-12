import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss'],
})
export class MainWindowComponent implements OnInit {
  name!: string;

  ngOnInit(): void {
    this.name = 'Thomas';
    throw new Error('Method not implemented.');
  }
}
