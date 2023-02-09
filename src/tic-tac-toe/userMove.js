import {canvas, CELL_SIZE} from "./draw";
import { gameState$ } from "./gameState";
import { fromEvent, Observable } from "rxjs";
import { filter, map, withLatestFrom } from "rxjs/operators";

const click$= fromEvent(canvas, 'click').pipe(
    map(e => { return {
        x: Math.floor(e.offsetX/CELL_SIZE),
        y: Math.floor(e.offsetY/CELL_SIZE)
    }}),
);

export const userMove$= click$.pipe(
    //filter valid moves
    withLatestFrom(gameState$),
    filter(([click, state])=> state.nextPlayer==1),
    filter(([click, state])=> state.board[click.y][click.x]==0),
    map(([click, state])=> click)


);