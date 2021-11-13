import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-product',
  templateUrl: './stock-product.component.html',
  styleUrls: ['./stock-product.component.scss']
})
export class StockProductComponent implements OnInit {

  @Input()
  parent: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

}
