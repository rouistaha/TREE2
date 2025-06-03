import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 _defaultOpts = [
  'Kiss 😘',
  'Hug 🤗',
  'Movie Night 🎬',
  'Ice Cream 🍨',
  ];

  public optionSource: BehaviorSubject<string[]>;
  public option$;

  public winnersSource: BehaviorSubject<string[]>;
  public winner$: Observable<string[]>;

  constructor() {
    this.optionSource = new BehaviorSubject(this.getOptions());
    this.option$ = this.optionSource.asObservable();

    this.winnersSource =  new BehaviorSubject<string[]>([]);
    this.winner$ = this.winnersSource.asObservable();
  }

  addNewOption(value: any) {
    const currentOpts = [...this.optionSource.getValue()];
    currentOpts.push(value);
    this.optionSource.next(currentOpts);
    this.persistOptions();
  }

  deleteNewOption(value: any) {
    const currentOpts = this.optionSource.getValue();
    this.optionSource.next(currentOpts.filter(opts => opts != value));
    this.persistOptions();
  }

  addWinner(value: any) {
    let winners = this.winnersSource.getValue();
    winners = [...winners, value];
    this.winnersSource.next(winners);
  }

  restartWinners() {
    this.winnersSource.next([]);
  }

  persistOptions() {
    localStorage.setItem("OPTS", JSON.stringify(this.optionSource.getValue()));
  }

  getOptions(): string[] {
    const value = localStorage.getItem("OPTS");
    return value ? JSON.parse(value) : this._defaultOpts;
  }

  resetToDefault() {
    this.optionSource.next(this._defaultOpts);
  }
}