import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAqX89SsV9b5V8FYIGMI_pCueTalERRFkevW7tHvj3mRiip9p3PuhkDWqhhUbf1j1Mcf00GovPWQ3y0N-JrNZhDakIIZgqUGoaryfDNoaW3IkZ5wxwW8JfTA61xa5s5kY71j_9rGqnTqLj5y-s1O6QtRefMqwo'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer  BQAqX89SsV9b5V8FYIGMI_pCueTalERRFkevW7tHvj3mRiip9p3PuhkDWqhhUbf1j1Mcf00GovPWQ3y0N-JrNZhDakIIZgqUGoaryfDNoaW3IkZ5wxwW8JfTA61xa5s5kY71j_9rGqnTqLj5y-s1O6QtRefMqwo'
    });
    
    return this.http.get(url, { headers });
  }
  getArtist(id: string) {
    const url = `https://api.spotify.com/v1/artists/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer  BQAqX89SsV9b5V8FYIGMI_pCueTalERRFkevW7tHvj3mRiip9p3PuhkDWqhhUbf1j1Mcf00GovPWQ3y0N-JrNZhDakIIZgqUGoaryfDNoaW3IkZ5wxwW8JfTA61xa5s5kY71j_9rGqnTqLj5y-s1O6QtRefMqwo'
    });
    
    return this.http.get(url, { headers });
  }
}