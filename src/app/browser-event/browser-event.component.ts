import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event',
  templateUrl: './browser-event.component.html',
  styleUrls: ['./browser-event.component.css']
})
export class BrowserEventComponent implements OnInit {

  hoverSection: HTMLElement;

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    this.hoverSection.addEventListener('mousemove', this.onMouseMove)
  }
onMouseMove(e: MouseEvent) {
    console.log(e);
}
unsubscribe() {
    console.log('Called unsubscribe');
    this.hoverSection.removeEventListener('mousemove', this.onMouseMove)
}
}
