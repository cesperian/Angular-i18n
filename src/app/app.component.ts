import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [TranslatePipe],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en-US']);
    this.translate.setDefaultLang('en-US');
    this.translate.use('en-US');
  }
}
