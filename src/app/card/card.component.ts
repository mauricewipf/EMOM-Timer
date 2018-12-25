import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private remainingSeconds: number;
  private isTimerRunning = false;
  private isTimerPaused = false;

  constructor() { }

  ngOnInit() {
  }

  private startTimer(remainingSeconds: number): void {
    this.remainingSeconds = remainingSeconds;
    this.isTimerRunning = true;
    setTimeout(() => {
      if (this.remainingSeconds > 0 && !this.isTimerPaused) {
        this.remainingSeconds = --remainingSeconds;
        this.startTimer(this.remainingSeconds);
        console.log(remainingSeconds);
      } else if (this.remainingSeconds === 0) {
        this.isTimerRunning = false;
      }
    }, 1000);
  }

  private pause(): void {
    this.isTimerPaused = true;
  }

  private continue(): void {
    this.isTimerPaused = false;
    this.startTimer(this.remainingSeconds);
  }

  private stop(): void {
    this.continue();
    this.remainingSeconds = 0;
  }

}