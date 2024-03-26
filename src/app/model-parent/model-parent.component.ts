import { Component, ModelSignal, WritableSignal, model, signal } from '@angular/core';
import { ModelChildComponent } from '../model-child/model-child.component';
import { SignalService } from '../signal.service';

@Component({
  selector: 'app-model-parent',
  standalone: true,
  imports: [ModelChildComponent],
  templateUrl: './model-parent.component.html',
  styleUrl: './model-parent.component.css'
})
export class ModelParentComponent {
  /*
  We are syncing the values here between parentNum here in the parent component
  and childNum in the child component. In the template of this component we have
  the <app-model-child> element which has two attributes, or properties:
    [(childNum)]="parentNum" this banana-in-a-box syntax binds the property of the child 
    to the state of the parent. When parentNum changes, childNum will be changed, causing 
    the child to re-render.

    (childNumChange)="numChange($event)" Note how we have childNum and childNumChange,
    this conforms to the input/output property pattern where an input property is
    x and the output emitter is xChange. This is the same as a normal output prop. When
    childNum changes, an event will emit informing the parent about that change.
  */
  parentNum: WritableSignal<number> = signal(0);

  numChange(value: number) {
    console.log("Value: ", value);
    this.parentNum.set(value);
  }

  increment() {
    this.parentNum.set(this.parentNum() + 1)
  }

  decrement() {
    this.parentNum.set(this.parentNum() - 1)
  }
}
