import { Component, OnInit } from '@angular/core';
import { SquareComponent, SquareState } from 'app/square/square.component';
import { BoardFactoryService, BoardType } from './board-factory.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, SquareComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent implements OnInit {
  board: SquareState[] = [];
  isPlayerOneTurn: boolean = true;
  winner: string | null = null;
  moves: number = 0;


  constructor(private boardFactory: BoardFactoryService) {}

  ngOnInit() {
    this.board = this.boardFactory.createBoard(
      BoardType.TicTacToe
    ) as SquareState[];
  }

  onSquareClicked(state: SquareState, line : number) {
    this.assignSquare(line);
    this.calculateWinnner();
  }

  calculateWinnner() {
    
    if(this.moves < 4)
    return;

    let lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
 
    let previousPlayer = !this.isPlayerOneTurn ? 'X' : 'O';

    for(let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(this.board[a] && this.board[a] == this.board[b] && this.board[b] == this.board[c]) {  
        this.winner = previousPlayer;
        break;
      }

    } 
  }

  assignSquare(line: number) {
    let square = this.board[line];

    if (square !== '') return;

    if (square == '' && this.isPlayerOneTurn) {
      square = 'X';
    }

    if (square == '' && !this.isPlayerOneTurn) {
      square = 'O';
    }

    this.isPlayerOneTurn = !this.isPlayerOneTurn;

    this.board[line] = square;
    this.moves++;
  }

}
