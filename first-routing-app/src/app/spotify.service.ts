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
        'Bearer BQA3AOY3rWNMb4l6ytVXYDZ4YbPeoczQBoH3Sf7D8Kx3nGraX15WmZVg2RHlsAWnG3PQYLWuS_y9V1qDGgC7Y1vCCjiamd0QfYoEQKU5p7m6qGPEUeCJbvAzDVbxB_e16ahCcmpFlhZVsd-zqJPtzYwvYO8qALnzBtg'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}