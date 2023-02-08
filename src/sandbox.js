import { updateDisplay, displayLog } from './utils';

import { fromEvent, combineLatest } from 'rxjs';
import { map, debounceTime, withLatestFrom } from 'rxjs/operators';

export default () => {
    /** start coding */
    
    /** get the form element */
    const form = document.getElementById('form');
    
    /** get observables from each form element */
    const formName$ = fromEvent(form.name, 'input').pipe(
        debounceTime(400),
        map(evt => evt.target.value)
    );
    const formEmail$ = fromEvent(form.email, 'input').pipe(
        debounceTime(400),
        map(evt => evt.target.value)
    );
    const formNumber$ = fromEvent(form.phone, 'input').pipe(
        debounceTime(400),
        map(evt => evt.target.value)
    );
    const submitButton$ = fromEvent(form.btn, 'click');
    
    //const formData$= combineLatest(formName$, formEmail$, formNumber$).subscribe(displayLog);
    const formData$= submitButton$.pipe(
        withLatestFrom(formName$, formEmail$, formNumber$),
        map(data=> {
            const [click, ...formData]= data;
            return formData;
        })
    ).subscribe(displayLog);
    

    /** end coding */
}