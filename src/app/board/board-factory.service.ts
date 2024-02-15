import { Injectable } from '@angular/core';

export enum BoardType {
  TicTacToe 
}

@Injectable({
  providedIn: 'root'
})
export class BoardFactoryService {

  constructor() { }


  createBoard(type : BoardType) : string[] {
    switch(type) {
      case BoardType.TicTacToe:
        return [
          '','','',
          '','','',
          '','',''
        ];
      default:
      return [];
    }
  }
}
