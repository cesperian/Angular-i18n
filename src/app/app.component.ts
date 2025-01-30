import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {TranslateService} from "@ngx-translate/core";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {

  translateBase = [
    $localize`:@@books.hitchhiker:The Hitchhiker's Guide to the Galaxy`,
    $localize`:@@books.restaurant:The Restaurant at the End of the Universe`,
    $localize`:@@books.universe:Life, the Universe and Everything`,
    $localize`:@@books.fish:So Long, and Thanks for All the Fish`,
    $localize`:@@books.harmless:Mostly Harmless`,
  ]
  translateContent$: Observable<any>;

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en-US']);
    this.translate.setDefaultLang('en-US');
    this.translate.use('en-US');
    this.translateContent$ = translate.stream('books');
  }
}
