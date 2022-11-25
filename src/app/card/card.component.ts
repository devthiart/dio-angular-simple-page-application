import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  products: string[] = [];
  newProductName: string = '';
  menuType: string = ''; // user | admin | superuser
  constructor() {
    this.products = [
      "Mouse",
      "Teclado",
      "Cabo",
      "Fonte",
    ]
  }

  ngOnInit(): void {
  }

  addToProducts(): void {
    this.products.push(this.newProductName);
    alert("Product added.");
    this.newProductName = '';
  }

  removeProduct(index: number): void {
    this.products.splice(index, 1);
  }

}
