import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export default () => {
    const grid = document.getElementById('grid');

    fromEvent(grid, 'click').pipe(
        map(val => [Math.floor(val.offsetX/50), Math.floor(val.offsetY/50)]),
        filter(val=> (val[0]+val[1])%2!=0)
        ).subscribe(data => displayLog(data));
}