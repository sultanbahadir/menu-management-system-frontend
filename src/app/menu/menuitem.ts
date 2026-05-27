import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MenuItemDTO } from '../models/menuitem.model';
import { MenuItemService } from '../services/menuitem';
@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menuitem.html',
  styleUrl: './menuitem.css',
})
export class MenuComponent {

  menus: any[] = [];
  selectedDate: any;

  constructor(private menuService: MenuItemService) {}

  getMenus() {
    this.menuService.getMenus(this.selectedDate)
      .subscribe((data: any) => {
        this.menus = data;
      });
  }
}