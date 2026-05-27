import { MenuItemDTO } from "./menuitem.model";

export interface MenuDTO {
  id: number;
  price: number;
  status: string;
  dateCreated: string;
  items: MenuItemDTO[];
}