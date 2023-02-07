import { displayLog } from './utils';
import { of, range } from 'rxjs';

export default () => {
    /** Of */
    const source= of([1,2,3,4]);
    const source2= of(
        [1,2,3,4],
        "Hello World",
        {casa: "azul"},
        function sayHello(){
            return "Hello";
        }
    );
    
    const sus1= source.subscribe(data => displayLog(data));
    displayLog("Second subscription");
    const sus2= source2.subscribe(data => displayLog(data));


    /** Range */

    const source3= range(2,10);
    displayLog("Third subscription");
    const sus3= source3.subscribe(data => displayLog(data))
}