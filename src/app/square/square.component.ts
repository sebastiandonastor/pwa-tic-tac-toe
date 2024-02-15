import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export type SquareState = 'X' | 'O' | '';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquareComponent {
  @Input() state : SquareState = ''; 
  
  @Output() squareClicked = new EventEmitter<SquareState>();

}
