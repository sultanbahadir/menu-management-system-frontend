import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuDTO } from '../models/menu.model';

@Injectable({ providedIn: 'root' })
export class MenuService {

  private apiUrl = 'http://localhost:1999/api/menus';

  constructor(private http: HttpClient) {}

  getMenus() {
    return this.http.get<MenuDTO[]>(this.apiUrl);
  }

  getTodayMenu() {
    return this.http.get<MenuDTO>(`${this.apiUrl}/today`);
  }

saveOrUpdate(menu: MenuDTO) {
  return this.http.post<MenuDTO>(this.apiUrl, menu);
}
  deleteMenu(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}