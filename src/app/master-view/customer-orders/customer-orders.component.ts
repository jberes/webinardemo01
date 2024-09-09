import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { CustomerOrdersResult } from '../../models/northwind-cloud/customer-orders-result';
import { Customer } from '../../models/northwind-cloud/customer';
import { NorthwindCloudService } from '../../services/northwind-cloud.service';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss']
})
export class CustomerOrdersComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  private _customerId?: string;
  public get customerId(): string | undefined {
    return this._customerId;
  }
  public set customerId(value: string | undefined) {
    this._customerId = value;
    this.northwindCloudCustomerOrdersResult$.next();
  }
  public northwindCloudCustomer: Customer[] = [];
  public northwindCloudCustomerOrdersResult: CustomerOrdersResult[] = [];
  public northwindCloudCustomerOrdersResult$: Subject<void> = new Subject<void>();


  constructor(
    private northwindCloudService: NorthwindCloudService,
  ) {}

  ngOnInit() {
    this.northwindCloudService.getCustomerList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindCloudCustomer = data
    );
    this.northwindCloudService.getCustomerOrdersResultList(this.customerId as any).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindCloudCustomerOrdersResult = data
    );
    this.northwindCloudCustomerOrdersResult$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.northwindCloudService.getCustomerOrdersResultList(this.customerId as any).pipe(take(1)).subscribe(
        data => this.northwindCloudCustomerOrdersResult = data
    )});
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.northwindCloudCustomerOrdersResult$.complete();
    this.destroy$.complete();
  }

  public listItemClick(item: Customer) {
    this.customerId = item.customerID;
  }
}
