import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { tap } from 'rxjs/internal/operators/tap';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Producto } from '../Producto/models/producto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  baseUrl!: string;
  constructor(
    private http: HttpClient,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = environment.baseApiUrl;
  }

  get(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseUrl + 'api/Producto')
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Producto[]>('Consulta Producto'))
      );
  }

  post(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.baseUrl + 'api/Producto', producto)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Producto>('Registrar Producto'))
      );
  }

}
