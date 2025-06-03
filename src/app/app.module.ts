import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, registerLocaleData } from '@angular/common';
import { DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { HomeComponent } from './Components/General/home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTabsModule} from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import localeDe from '@angular/common/locales/de';
import localeAr from '@angular/common/locales/ar';
import { NgParticlesModule } from 'ng-particles';
import { WheelComponent } from './Components/General/wheel/wheel.component';
import { OptionsComponent } from './Components/General/options/options.component';

const locale = navigator.language.split('-')[0];

const availableLocales = ['fr', 'en', 'de', 'ar'];  // Supported languages

if (availableLocales.includes(locale)) {
  switch (locale) {
    case 'fr':
      registerLocaleData(localeFr);
      break;
    case 'en':
      registerLocaleData(localeEn);
      break;
    case 'de':
      registerLocaleData(localeDe);
      break;
    case 'ar':
      registerLocaleData(localeAr);
      break;
    default:
      registerLocaleData(localeFr); // Fallback to French if the locale is not supported
  }
} else {
  registerLocaleData(localeFr); // Fallback to French if the locale is not supported
}



@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        WheelComponent,
        OptionsComponent,
    ],
    bootstrap: [AppComponent], imports: [
        BrowserModule,
        AppRoutingModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatCheckboxModule,
        FormsModule,
        MatDialogModule,
        MatDatepickerModule,
        MatSelectModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatNativeDateModule,
        MatProgressBarModule,
        MatRadioModule,
        DragDropModule,
        MatTabsModule,
        MatMenuModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatSortModule,
        MatChipsModule,
        MatDividerModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatStepperModule,
        NgParticlesModule
    ], providers: [
        provideAnimationsAsync(),
        { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
        MatDatepickerModule,
        provideHttpClient(withInterceptorsFromDi()),
        DatePipe,
        CurrencyPipe
    ] 
})
export class AppModule { }