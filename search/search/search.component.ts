import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'manibu-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  name: string = '';
  @Input() title: string = '';
  @Input() searchControl: FormControl = new FormControl();
  @Input() dicStyle: string = '';

  @Output() searchChange = new EventEmitter<{ name: string }>();

  constructor() {}

  emitFilters(): void {
    if (this.name.length >= 3 || this.name.length === 0) {
      this.searchChange.emit({ name: this.name });
    }
  }

  clearSearch(): void {
    this.name = '';
    this.emitFilters();
  }
}
