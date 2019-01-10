import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.less']
})
export class CubeComponent implements OnInit {

  @Input() zindex: number;

  constructor() {
  }

  ngOnInit() {
  }

}
