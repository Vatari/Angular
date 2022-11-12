import { Component, OnInit } from '@angular/core';
import { CausesService } from '../causes.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss'],
})
export class RightComponent implements OnInit {
  constructor(private causesService: CausesService) {}

  ngOnInit(): void {}
}
