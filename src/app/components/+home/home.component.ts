import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'h2c-home',
  template: `
home
    <!--<p class="lead">Hello <strong>{{name}}</strong>!</p>-->
  `
})
export class HomeComponent {
  // subsName: Subscription;
  // name: string = '';
  //
  // constructor(
  //   private _store: Store<AppState>
  // ) {}
  //
  // ngOnInit() {
  //   this.subsName = this._store
  //     .select(s => s.user && s.user.currentUser)
  //     .filter(x => !!x)
  //     .subscribe(currentUser => {
  //       this.name = currentUser.name
  //     });
  // }
  //
  // ngOnDestroy() {
  //   if (this.subsName) this.subsName.unsubscribe();
  // }
}
