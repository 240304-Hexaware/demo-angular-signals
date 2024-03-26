import { Component } from '@angular/core';
import { SignalService } from '../signal.service';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  signalService: SignalService;
  constructor(signalService: SignalService) {
    this.signalService = signalService;
  }

  valueUpdate(event: any) {
    this.signalService.count.set(event.target.value);
  }
}
