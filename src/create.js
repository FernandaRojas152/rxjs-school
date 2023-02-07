import { from } from 'rxjs';
import { displayLog } from './utils';

export default () => {
    /** start coding */
    const arr= [1,2,3,4,5,6];
    const text="It's me, Hi! I'm the problem it's me";
    //create a promise
    const myPromise= new Promise(resolve=> {
        setTimeout(() => {
            resolve("It's me, Hi! I'm the problem it's me -Tay Tay");
        }, 2000);
    });


    const myObservable= from(myPromise);

    const subscriber= myObservable.subscribe(evt => displayLog(evt));

    /** end coding */
}