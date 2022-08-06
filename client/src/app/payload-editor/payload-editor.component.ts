import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payload-editor',
  templateUrl: './payload-editor.component.html',
  styleUrls: ['./payload-editor.component.scss'],
})
export class PayloadEditorComponent implements OnInit {
  @Input()
  public payload: any;
  constructor() {}

  ngOnInit(): void {}

  getEntries(): { key: string; value: any }[] {
    return Object.entries(this.payload).map(([key, value]) => ({ key, value }));
  }

  isNumber(value: any): boolean {
    return typeof value === 'number';
  }
}
