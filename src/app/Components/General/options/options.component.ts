import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
  option$: Observable<String[]> | null = null;
  newDeveloper: String = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.option$ = this.dataService.option$;
  }

  deleteOpt(option: any) {
    this.dataService.deleteNewOption(option);
  }
  addNewDeveloper(option: any) {
    this.dataService.addNewOption(option);
  }

  onOptionChange(value: any) {
    const val =  value.target.value
    this.dataService.addNewOption(val);
  }
}
