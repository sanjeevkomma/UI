import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  getOrders() {
    return [
      { id: 1, item: 'Laptop', price: 80000 },
      { id: 2, item: 'Phone', price: 50000 },
    ];
  }
}
