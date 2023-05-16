import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class EmailService {

  constructor(private httpClient: HttpClient) { }


  postEmail(email:string){
    let data  = {
      email:email
    }
    return this.httpClient.post(`${environment.baseUrl}/Email/`,data);
  }
}
