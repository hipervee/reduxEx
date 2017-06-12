import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';

import {AppState} from '../../reducers';
import {HeroActions} from '../../actions';


@Component({
    selector: 'rx-zeroes',
    template: require('./zeroes.component.html')
})
export class Zeroes {
    constructor(
        private store: Store<AppState>,
        private heroActions: HeroActions,
        private router: Router
    ) {
        
    }
}