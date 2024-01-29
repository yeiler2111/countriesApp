import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.debounce.unsubscribe()
  }
  private debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void  {
    this.debounce
      .pipe(debounceTime(300)).subscribe(value => {
        this.myEvent.emit(value)
      })



  }

  @Input()
  public placeholder: string = ''

  @Input()
  public initialValue : string ='';

  @Output() myEvent = new EventEmitter<string>();



  onKeySearh(searchTerm: any): void {
    this.debounce.next(searchTerm.target.value)
  }
}
