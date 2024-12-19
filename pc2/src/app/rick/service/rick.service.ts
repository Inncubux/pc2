import { HttpClient, HttpDownloadProgressEvent, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { first, firstValueFrom, Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/ApiRespone';
@Injectable({
  providedIn: 'root'
})
export class RickService {
  private apiUrl = "https://rickandmortyapi.com/api/character"
  
  public errors: string[] = [];

  private http = inject(HttpClient);

  async getCharacters(page: number): Promise<ApiResponse> {
    try {
      const queryPage = new HttpParams().set('page', page.toString());
      const response = await firstValueFrom(this.http.get<ApiResponse>(`${this.apiUrl}?${queryPage}`));
      return Promise.resolve(response);
    } catch (error) {
      console.error('Error al obtener los personaes de la serie', error);
      let e = error as HttpErrorResponse;
      this.errors.push(e.message);
      return Promise.reject(e);
    }
  }
}