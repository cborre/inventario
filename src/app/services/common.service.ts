import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Generic } from './../models/generic';

export abstract class CommonService<E extends Generic> {

  protected baseEndpoint: string;

  protected cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(protected http: HttpClient) { }

  public listar(): Observable<E[]> {

    // Return
    return this.http.get<E[]>(this.baseEndpoint);
  }

  public listarPaginas(page: string, size: string): Observable<any> {

    const httpParams = new HttpParams()
      .set('page', page)
      .set('size', size);

    // Return
    return this.http.get<any>(`${this.baseEndpoint}/pagina`, { params: httpParams });
  }

  public ver(id: number): Observable<E> {

    // Return
    return this.http.get<E>(`${this.baseEndpoint}/${id}`);
  }

  public crear(e: E): Observable<E> {

    // Return
    return this.http.post<E>(this.baseEndpoint, e, { headers: this.cabeceras });
  }

  public editar(e: E): Observable<E> {

    // Return
    return this.http.put<E>(`${this.baseEndpoint}/${e.id}`, e, { headers: this.cabeceras });
  }

  public eliminar(id: number): Observable<void> {

    // Return
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }
}