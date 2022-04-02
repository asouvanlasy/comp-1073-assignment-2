//--from github repo
import { Injectable } from '@angular/core';
import { Student } from './student';
import { PC } from './PC';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

// Our imports
import { Nintendo } from './nintendo';
import { PlayStation } from './playstation';
import { Xbox } from './xbox';
import { Mobile } from './mobile'

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  endpoint: string = 'http://localhost:8000/api';
  endpointPC: string = 'http://localhost:8003/api';
  endpointNintendo: string = 'http://localhost:8001/api';
  endpointPlayStation: string = 'http://localhost:8004/api';
  endpointXbox: string = 'http://localhost:8002/api'
  endpointMobile: string = 'http://localhost:8005/api'
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add student
  AddStudent(data: Student): Observable<any> {
    let API_URL = `${this.endpoint}/add-student`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all students
  GetStudents() {
    return this.http.get(`${this.endpoint}`);
  }


  // Get student
  //  // Get student
  GetStudent(id: any): Observable<any> {
    let API_URL = `${this.endpoint}/read-student/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map(res => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  // Update student
  UpdateStudent(id: any, data: any): Observable<any> {
    let API_URL = `${this.endpoint}/update-student/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Delete student
  DeleteStudent(id: any): Observable<any> {
    var API_URL = `${this.endpoint}/delete-student/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  // Nintendo stuff
  GetNintendos() {
    return this.http.get(`${this.endpointNintendo}`);
  }

  GetNintendo(id: any): Observable<any> {
    let API_URL = `${this.endpointNintendo}/read-nintendo/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map(res => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  AddNintendo(data: Nintendo): Observable<any> {
    let API_URL = `${this.endpointNintendo}/add-nintendo`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  UpdateNintendo(id: any, data: any): Observable<any> {
    let API_URL = `${this.endpointNintendo}/update-nintendo/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  DeleteNintendo(id: any): Observable<any> {
    var API_URL = `${this.endpointNintendo}/delete-Nintendo/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
      }



// PlayStation stuff
GetPlayStations() {
  return this.http.get(`${this.endpointPlayStation}`);
}

GetPlayStation(id: any): Observable<any> {
  let API_URL = `${this.endpointPlayStation}/read-playstation/${id}`;
  return this.http.get(API_URL, { headers: this.headers })
    .pipe(
      map(res => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
}

AddPlayStation(data: PlayStation): Observable<any> {
  let API_URL = `${this.endpointPlayStation}/add-playstation`;
  return this.http.post(API_URL, data)
    .pipe(
      catchError(this.errorMgmt)
    )
}

UpdatePlayStation(id: any, data: any): Observable<any> {
  let API_URL = `${this.endpointPlayStation}/update-playstation/${id}`;
  return this.http.put(API_URL, data, { headers: this.headers })
    .pipe(
      catchError(this.errorMgmt)
    )
}

DeletePlayStation(id: any): Observable<any> {
  var API_URL = `${this.endpointPlayStation}/delete-PlayStation/${id}`;
  return this.http.delete(API_URL)
    .pipe(
      catchError(this.errorMgmt)
    )
}




//PC functions
GetPCs() {
  return this.http.get(`${this.endpointPC}`);
}


// Get PC
GetPC(id: any): Observable<any> {
  let API_URL = `${this.endpointPC}/read-PC/${id}`;
  return this.http.get(API_URL, { headers: this.headers })
    .pipe(
      map(res => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
}

// Xbox stuff
GetXboxs() {
  return this.http.get(`${this.endpointXbox}`);
}

GetXbox(id: any): Observable<any> {
  let API_URL = `${this.endpointXbox}/read-xbox/${id}`;
  return this.http.get(API_URL, { headers: this.headers })
    .pipe(
      map(res => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
}

AddPC(data: PC): Observable<any> {
  let API_URL = `${this.endpointPC}/add-PC`;
  return this.http.post(API_URL, data)
    .pipe(
      catchError(this.errorMgmt)
    )
}
AddXbox(data: Xbox): Observable<any> {
  let API_URL = `${this.endpointXbox}/add-xbox`;
  return this.http.post(API_URL, data)
    .pipe(
      catchError(this.errorMgmt)
    )
}

UpdatePC(id: any, data: any): Observable<any> {
  let API_URL = `${this.endpointPC}/update-PC/${id}`;
  return this.http.put(API_URL, data, { headers: this.headers })
    .pipe(
      catchError(this.errorMgmt)
    )
}
UpdateXbox(id: any, data: any): Observable<any> {
  let API_URL = `${this.endpointXbox}/update-xbox/${id}`;
  return this.http.put(API_URL, data, { headers: this.headers })
    .pipe(
      catchError(this.errorMgmt)
    )
}

// Delete PC
DeletePC(id: any): Observable<any> {
  var API_URL = `${this.endpointPC}/delete-PC/${id}`;
  return this.http.delete(API_URL)
    .pipe(
      catchError(this.errorMgmt)
    )
}
DeleteXbox(id: any): Observable<any> {
  var API_URL = `${this.endpointXbox}/delete-Xbox/${id}`;
  return this.http.delete(API_URL)
    .pipe(
      catchError(this.errorMgmt)
    )
}


// Mobile stuff
GetMobiles() {
  return this.http.get(`${this.endpointMobile}`);
}

GetMobile(id: any): Observable<any> {
  let API_URL = `${this.endpointMobile}/read-mobille/${id}`;
  return this.http.get(API_URL, { headers: this.headers })
    .pipe(
      map(res => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
}

AddMobile(data: Mobile): Observable<any> {
  let API_URL = `${this.endpointMobile}/add-mobille`;
  return this.http.post(API_URL, data)
    .pipe(
      catchError(this.errorMgmt)
    )
}

UpdateMobile(id: any, data: any): Observable<any> {
  let API_URL = `${this.endpointMobile}/update-mobille/${id}`;
  return this.http.put(API_URL, data, { headers: this.headers })
    .pipe(
      catchError(this.errorMgmt)
    )
}

DeleteMobile(id: any): Observable<any> {
  var API_URL = `${this.endpointMobile}/delete-mobille/${id}`;
  return this.http.delete(API_URL)
    .pipe(
      catchError(this.errorMgmt)
    )
}







































}