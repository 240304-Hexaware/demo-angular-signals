import { Component, model, ModelSignal } from '@angular/core';
import { SignalService } from '../signal.service';

@Component({
  selector: 'app-model-child',
  standalone: true,
  imports: [],
  templateUrl: './model-child.component.html',
  styleUrl: './model-child.component.css'
})
export class ModelChildComponent {
  signalService: SignalService;
  /*
  A model signal acts as both an @Input and @Output property. 
  When the parent sends down a new value for num, this child receives it and is re-rendered
  When the value of num changes down here in the child, a numChange event is emitted from this component
    
  */
  childNum: ModelSignal<number> = model(0);

  constructor(signalService: SignalService) {
    this.signalService = signalService;
  }

  increment() {
    this.childNum.set(this.childNum() + 1)
  }

  decrement() {
    this.childNum.set(this.childNum() - 1)
  }
}
