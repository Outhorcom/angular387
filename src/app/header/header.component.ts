import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'cm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  thisRoute = this.router.url;
  @Input() title = this.getPageTitle(this.thisRoute);
  @Output() addNewClicked = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Isprintan title: ' + this.title);
  }
  addNewClickedEvent() {
    this.addNewClicked.emit(this.title);
    console.log('REAKCIJA NA CLICK EVENT: Trenutni content view je: ' + this.title);
  }
  getPageTitle(titleFromRoute) {
    if (titleFromRoute === '/') {
      titleFromRoute = ('home').toUpperCase();
    } else if (titleFromRoute === '/home') {
      titleFromRoute = (this.thisRoute.replace(/^\/+|\/+$/g, '')).toUpperCase();
    } else {
      titleFromRoute = (this.thisRoute.replace(/^\/+|\/+$/g, '') + 's').toUpperCase();
    }
    return titleFromRoute;
  }
  ngOnDestroy() {
    console.log('Header component destroyed');
    this.addNewClicked.unsubscribe();
  }

}
