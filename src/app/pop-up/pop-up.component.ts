import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopUpComponent implements OnInit {
  @Input() message!: string;
  @Output() close = new EventEmitter<void>();



  ngOnInit(): void {
      console.log("el mensaje para el pop up", this.message)
  }



  closeAlert() {
    this.close.emit();
  }


}
