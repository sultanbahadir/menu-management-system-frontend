import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MenuService } from '../services/menu';
import { MenuDTO } from '../models/menu.model';
import { MenuItemDTO } from '../models/menuitem.model';
import { Category } from '../enum/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class MenuComponent implements OnInit {


  Category = Category;

  menus: MenuDTO[] = [];
  selectedMenu: MenuDTO = this.emptyMenu();

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.loadMenus();
    this.loadTodayMenu();
  }

  loadMenus(): void {
    this.menuService.getMenus()
      .subscribe({
        next: res => this.menus = res,
        error: err => console.log('Menu list error', err)
      });
  }

  loadTodayMenu(): void {
    this.menuService.getTodayMenu()
      .subscribe({
        next: res => this.selectedMenu = res,
        error: () => this.selectedMenu = this.emptyMenu()
      });
  }

  addItem(): void {
    const newItem: MenuItemDTO = {
      id: 0,
      category: Category.SOUP,
      name: '',
      price: 0,
      status: 'ACTIVE',
      dateCreated: new Date().toISOString(),
      dateUpdated: new Date().toISOString()
    };

    this.selectedMenu.items.push(newItem);
  }

  removeItem(index: number): void {
    this.selectedMenu.items.splice(index, 1);
  }

  saveMenu(): void {
    this.menuService.saveOrUpdate(this.selectedMenu)
      .subscribe({
        next: () => {
          this.loadMenus();
          this.loadTodayMenu();
        },
        error: err => console.log('Save error', err)
      });
  }

  deleteMenu(id: number): void {
    this.menuService.deleteMenu(id)
      .subscribe(() => this.loadMenus());
  }

  emptyMenu(): MenuDTO {
    return {
      id: 0,
      price: 0,
      status: 'ACTIVE',
      dateCreated: new Date().toISOString(),
      items: []
    };
  }

  getCategoryName(c: string): string {
    switch (c) {
      case 'SOUP': return 'Çorba';
      case 'MAIN_COURSE': return 'Ana Yemek';
      case 'DESSERT': return 'Tatlı';
      case 'DRINK': return 'İçecek';
      default: return c;
    }
  }
}