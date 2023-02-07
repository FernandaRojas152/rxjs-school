import { displayLog } from './utils';
import { Observable } from 'rxjs';

export default () => {
    const hello= new Observable((observer)=>{
        observer.next("Hello");
        setTimeout(()=>{observer.next("World! :D")}, 2000);
    });

    const sus= hello.subscribe(evt => displayLog(evt));
}