import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {

  @Output() onRadioClick = new EventEmitter<string>();

  model;
  constructor() {
    this.model = {
      sortBy: "name"
    }
  }

  returnModelState() {
    //return the the model.sortBy value
    return this.model.sortBy;
  }

  setModelState(radio) {
    this.model.sortBy = radio.value;
    this.onRadioClick.emit(this.model.sortBy);
  }
}
