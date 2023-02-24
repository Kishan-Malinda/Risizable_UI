import { Component,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dividr-example',
  templateUrl: './dividr-example.component.html',
  styleUrls: ['./dividr-example.component.css']
})
export class DividrExampleComponent {
  @ViewChild('leftPanel') leftPanelRef!: ElementRef;
  @ViewChild('rightPanel') rightPanelRef!: ElementRef;
  @ViewChild('topPanel') topPanelRef!: ElementRef;
  @ViewChild('bottomPanel') bottomPanelRef!: ElementRef;

  leftPanelWidth = 500;
  rightPanelWidth = 500;
  rightPanelTopHeight = 350;
  rightPanelBottomHeight = 350;
  isDragging = false;

  onMouseDownVertical(event: MouseEvent): void {
    console.log('onMouseDownVertical');
    
    this.isDragging = true;
    const startX = event.clientX;
    const leftPanelWidth = this.leftPanelRef.nativeElement.clientWidth;
    const rightPanelWidth = this.rightPanelRef.nativeElement.clientWidth;

    const onMouseMoveVertical = (e: MouseEvent) => {
      if (this.isDragging) {
        const diff = e.clientX - startX;
        this.leftPanelWidth = leftPanelWidth + diff;
        this.rightPanelWidth = rightPanelWidth - diff;
      }
    };

    const onMouseUpVertical = () => {
      if (this.isDragging) {
        this.isDragging = false;
        document.removeEventListener('mousemove', onMouseMoveVertical);
        document.removeEventListener('mouseup', onMouseUpVertical);
      }
    };

    document.addEventListener('mousemove', onMouseMoveVertical);
    document.addEventListener('mouseup', onMouseUpVertical);
  }

  onMouseDownHorizontal(event: MouseEvent): void {
    console.log('onMouseDownHorizontal');
    this.isDragging = true;
    const startY = event.clientY;
    const topPanelHeight = this.topPanelRef.nativeElement.clientHeight;
    const bottomPanelHeight = this.bottomPanelRef.nativeElement.clientHeight;

    const onMouseMoveHorizontal = (e: MouseEvent) => {
      if (this.isDragging) {
        const diff = e.clientY - startY;
        this.rightPanelTopHeight = topPanelHeight + diff;
        this.rightPanelBottomHeight = bottomPanelHeight - diff;
      }
    };

    const onMouseUpHorizontal = () => {
      if (this.isDragging) {
        this.isDragging = false;
        document.removeEventListener('mousemove', onMouseMoveHorizontal);
        document.removeEventListener('mouseup', onMouseUpHorizontal);
      }
    };

    document.addEventListener('mousemove', onMouseMoveHorizontal);
    document.addEventListener('mouseup', onMouseUpHorizontal);
  }
}
