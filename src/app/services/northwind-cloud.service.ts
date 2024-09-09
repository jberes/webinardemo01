import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { CustomerOrdersResult } from '../models/northwind-cloud/customer-orders-result';
import { Customer } from '../models/northwind-cloud/customer';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://northwindcloud.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class NorthwindCloudService {
  constructor(
    private http: HttpClient
  ) { }

  public getCustomerList(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_ENDPOINT}/api/customers`)
      .pipe(catchError(ErrorHandlerService.handleError<Customer[]>('getCustomerList', [])));
  }

  public getCustomerOrdersResultList(customerId: string = 'ALFKI'): Observable<CustomerOrdersResult[]> {
    if (!customerId) {
      return of([]);
    }
    return this.http.get<CustomerOrdersResult[]>(`${API_ENDPOINT}/api/customer_orders/${customerId}`)
      .pipe(catchError(ErrorHandlerService.handleError<CustomerOrdersResult[]>('getCustomerOrdersResultList', [])));
  }
}
