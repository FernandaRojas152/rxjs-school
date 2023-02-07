import { displayLog } from './utils';
import { interval, timer } from 'rxjs';

export default () => {
    const source= interval(500);
    const sus= source.subscribe(data => displayLog(data));

    timer(3000).subscribe(() => sus.unsubscribe()); // this is with a rxjs function 
    // setTimeout(()=> sus.unsubscribe(), 3000); This is the way with a js vanilla function

    const source2= timer(4000,100);
    const sus2= source2.subscribe(data=> displayLog(`2-- ${data}`));

    timer(6000).subscribe(()=> sus2.unsubscribe());

    /** end coding */
}