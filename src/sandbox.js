import { fromEvent } from 'rxjs';
import { updateDisplay, displayLog } from './utils';
import { debounceTime, map } from 'rxjs/operators';

export default () => {
    /** start coding */
    
    const inputBox = document.getElementById('input-box');
    fromEvent(inputBox, "input")
        .pipe(
            debounceTime(500),
            map(event => event.target.value),
            )
        .subscribe(displayLog);

    /** end coding */
}