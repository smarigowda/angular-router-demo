import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
