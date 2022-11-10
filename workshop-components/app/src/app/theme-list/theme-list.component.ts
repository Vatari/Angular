import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Itheme } from '../interfaces/theme';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss'],
})
export class ThemeListComponent implements OnInit {
  themeList: Itheme[] | null = null;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadThemes().subscribe({
      next: (value) => {
        this.themeList = value;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
