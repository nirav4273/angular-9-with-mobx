import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import { MobxAngularModule } from 'mobx-angular';

import { HeaderComponent } from 'src/shared/components/header/header.component';
import { FooterComponent } from 'src/shared/components/footer/footer.component';
import { LoaderComponent } from 'src/shared/components/loader/loader.component';
import { LanguageComponent } from 'src/shared/components/language/language.component';

@NgModule({
  declarations: [
  	HeaderComponent,
  	FooterComponent,
    LoaderComponent,
    LanguageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    MobxAngularModule
  ],
  exports: [
  	HeaderComponent,
  	FooterComponent,
    LoaderComponent,
    LanguageComponent,
  	RouterModule,
  	HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    MobxAngularModule
  ]
})
export class LayoutModule { }
