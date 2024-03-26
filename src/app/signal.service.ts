import { computed, effect, Injectable, model, ModelSignal, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
  count: WritableSignal<number> = signal(0);
  cube: Signal<number> = computed(()=>{return Math.pow(this.count(), 3)});
  log: any = effect(()=>{
    console.log(`${this.count()} cubed = ${this.cube()}`)
  })

  number: ModelSignal<number> = model(0);

  constructor() {
    console.log(this.count());
    this.count.set(10);
    // this.count.set(this.count() * this.count());//this accomplishes the same as below
    console.log(this.count());
    this.count.update((value: number)=>{return value *= value})
  }

  
}
