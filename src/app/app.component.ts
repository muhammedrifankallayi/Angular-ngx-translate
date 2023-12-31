import { Component ,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SMA';

constructor(public translate:TranslateService){
  translate.addLangs(["en","nl","es","de"])
  translate.setDefaultLang("en")
}

switchLanguage(lang:string){
this.translate.use(lang)

}

}
