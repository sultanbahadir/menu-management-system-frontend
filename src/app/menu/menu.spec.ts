import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Bunu ekleyin
import { FormsModule } from '@angular/forms';     // <-- Bunu ekleyin

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- Buraya bu iki modülü kesinlikle yazın!
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class MenuComponent {
  // Mevcut kodlarınız (Category, selectedMenu, menus, vb.) aşağıda aynen kalsın...
}