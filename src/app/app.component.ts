import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  @ViewChild('topPanel') topPanel!: ElementRef<HTMLDivElement>;
  @ViewChild('bottomPanel') bottomPanel!: ElementRef<HTMLDivElement>;
  @ViewChild('divider') divider!: ElementRef<HTMLDivElement>;

  private isDragging = false;
  private startY = 0;
  private startHeight = 0;

  constructor() { }

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startY = event.clientY;
    this.startHeight = this.topPanel.nativeElement.offsetHeight;
    event.preventDefault();
  }

  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const deltaY = event.clientY - this.startY;
      const newHeight = this.startHeight + deltaY;
      this.topPanel.nativeElement.style.height = `${newHeight}px`;
    }
  }

  onMouseUp(event: MouseEvent) {
    this.isDragging = false;
  }

  ngOnInit() {
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('mousemove', this.onMouseMove.bind(this));
    document.removeEventListener('mouseup', this.onMouseUp.bind(this));
  }
}
