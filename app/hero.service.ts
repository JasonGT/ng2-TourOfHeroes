import {HEROES} from './mock-heroes';
import {Hero} from './hero'
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }
    
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        );
    }
    
    getHero(id: number): any {
        return Promise.resolve(HEROES).then(
            h => h.filter(hero => hero.id == id)[0]
        );
    }
}
