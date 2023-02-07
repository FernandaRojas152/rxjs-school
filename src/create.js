import { displayLog } from './utils';
import { from, fromEvent } from 'rxjs';

export default () => {
    const actionBtn= document.querySelector("#action-btn");
    const source = fromEvent(actionBtn, 'click');
    source.subscribe(data => displayLog(`click event at position ${data.x} - ${data.y}`));

    fromEvent(actionBtn, 'mousemove').subscribe(data => console.log(data));
}