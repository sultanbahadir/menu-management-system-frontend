import { Category } from "../enum/menu";

export interface MenuItemDTO {
  id: number;
  category: Category;
  name: string;
  price: number;
  status: string;
  dateCreated: string;
  dateUpdated: string;
}