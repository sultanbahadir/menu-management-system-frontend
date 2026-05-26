import { Category } from "../enum/menu";

export interface Menu {
  id?: number;
  category: Category
  name: string;
  price: number;
}