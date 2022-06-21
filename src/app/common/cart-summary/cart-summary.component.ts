import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CartItem, CartItem2 } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartItems2: CartItem2[] = [];
  constructor(
    private _cartService: CartService,
    private _toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCart();
  }
  getCart() {
    this.cartItems = this._cartService.list();
    this.cartItems2 = this._cartService.list2();
  }

  removeFromCart(car: Car) {
    this._cartService.removeFromCart(car);
    this._toastrService.error('Deleted', car.brandName + ' deleted from cart.');
  }
}
