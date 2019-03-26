import { State } from './state';
import { BehaviorSubject, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Song } from './songs/services/songs.service';

const state: State = {
    playlist: undefined
};

export class Store {

    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable();

    get value() {
        return this.subject.value;
    }

    set(name: string, state: any) {
        
        this.subject.next({
            ...this.value, [name]: state
          });
          
    }

    //mention the return type;   
    select(name: string): Observable<Song[]> {
        return this.store.pipe(pluck(name));
    }

}   