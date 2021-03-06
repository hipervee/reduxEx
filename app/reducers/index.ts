import '@ngrx/core/add/operator/select';
import {compose} from '@ngrx/core/compose';
import {storeLogger} from 'ngrx-store-logger';
import {combineReducers} from '@ngrx/store';

import heroListReducer, * as fromHeroList from './hero-list';
import heroReducer, * as fromHero from './hero';

export interface AppState {
    heroes: fromHeroList.HeroListState;
    hero: fromHero.HeroState;
};

//uncomment the storeLogger import and this line
//and comment out the other export default line to turn on
//the store logger to see the actions as they flow through the store
//turned this off by default as i found the logger kinda noisy

export default compose(storeLogger(), combineReducers)({
//export default compose(combineReducers)({
    heroes: heroListReducer,
    hero: heroReducer
});
