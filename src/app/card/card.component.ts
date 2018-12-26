import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private sixtySeconds = 60;
  public remainingSeconds = this.sixtySeconds;
  public isTimerRunning = false;
  public isTimerPaused = false;
  public rounds = 1;
  private currentRound = 1;
  private audio: any;

  constructor() { 
    this.audio = new Audio('../assets/Tick-DeepFrozenApps-397275646.mp3');
  }

  ngOnInit() {
  }

  private startTimer(remainingSeconds = this.sixtySeconds): void {
    this.remainingSeconds = remainingSeconds;
    this.isTimerRunning = true;
    setTimeout(() => {
      if (this.remainingSeconds > 0 && this.isTimerRunning && !this.isTimerPaused) {
        this.remainingSeconds = --remainingSeconds;
        if (this.remainingSeconds <= 5) {
          this.audio.play();
        }
        this.startTimer(this.remainingSeconds);
      } else if (this.remainingSeconds === 0 && this.currentRound < this.rounds) {
        ++this.currentRound;
        this.remainingSeconds = this.sixtySeconds;
        this.startTimer(this.remainingSeconds);
      } else if (this.remainingSeconds === 0 && this.currentRound === this.rounds) {
        this.isTimerRunning = false;
        this.currentRound = 1;
        this.remainingSeconds = this.sixtySeconds;
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
    this.isTimerPaused = false;
    this.isTimerRunning = false;
    this.currentRound = 1;
    this.remainingSeconds = this.sixtySeconds;
  }

  private editRounds(increment): void {
    if (this.rounds >= 1) {
      this.rounds = this.rounds + increment;
    }
  }

}