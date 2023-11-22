import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  
  
   
  
  

}

export class User {
  public id: string = '';
  public firstName: string = '';
  public email: string = '';
  public phone: string = '';
  public cpf: string = '';
  public password: string = '';
  public dataNascimento: string = '';

}