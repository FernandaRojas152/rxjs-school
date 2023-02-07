import { displayLog } from './utils';
import { Observable } from 'rxjs';

export default () => {
    /** start coding */
    const hello = Observable.create(function(observer) {
        observer.next('Hello');
        setTimeout(()=>{
            observer.next('World! :D'),
            observer.complete();
        }, 2000);
    });
    
    const subscribe = hello.subscribe(evt => displayLog(evt));
    const subscribe2 = hello.subscribe(evt => displayLog(evt));
    subscribe.unsubscribe();
    /** end coding */
}