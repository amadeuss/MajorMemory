import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { MajorMemoryNumber } from './majormemorynumber';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class MajorMemoryService {
    private _numberUrl = 'app/api/majormemorynumbers/majormemorynumbers.json';

    constructor(private _http: Http) {}

    // get all the major memory numbers
    getMajorMemoryNumbers(): Observable<MajorMemoryNumber[]> {
        return this._http.get(this._numberUrl)
            .map((response: Response) => <MajorMemoryNumber[]> response.json())
            .catch(this._handleError);
    }

    // get a single matching major memory number
    getMajorMemoryNumber(memoryNumber: string): Observable<MajorMemoryNumber> {
        return this._http.get(this._numberUrl)
            .map((response: Response) => (<MajorMemoryNumber[]> response.json()).find(memNumber => memNumber.memoryNumber === memoryNumber))
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this._handleError);
    }

    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().err || 'Server error');
    }
}
