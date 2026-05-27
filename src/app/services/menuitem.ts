import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItemDTO } from '../models/menuitem.model';
@Injectable({
  providedIn: 'root',
})
export class MenuItemService { private apiUrl = 'http://localhost:1999/api/menus';

  constructor(private http: HttpClient) {}

  getMenus(date: string): Observable<MenuItemDTO[]> {
    return this.http.get<MenuItemDTO[]>(`${this.apiUrl}?date=${date}`);
  }

  saveMenu(menu: MenuItemDTO): Observable<MenuItemDTO> {
    return this.http.post<MenuItemDTO>(this.apiUrl, menu);
  }

  deleteMenu(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
