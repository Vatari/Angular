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
  errorFetchData = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadThemes().subscribe({
      next: (value) => {
        this.themeList = value;
      },
      error: (err) => {
        this.errorFetchData = true;
        console.error(err);
      },
    });
  }
}
