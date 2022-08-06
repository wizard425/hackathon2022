import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewTestsComponent } from './view-tests/view-tests.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { MatDialogModule } from '@angular/material/dialog';
import { BlueprintCreateDetailComponent } from './blueprint-create-detail/blueprint-create-detail.component';
import { TestDetailComponent } from './test-detail/test-detail.component';
import { BlueprintsForRequestComponent } from './blueprints-for-request/blueprints-for-request.component';
import { BlueprintDetailComponent } from './blueprints-for-request/blueprint-detail/blueprint-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewTestsComponent,
    ViewDetailComponent,
    TestDetailComponent,
    BlueprintCreateDetailComponent,
    TestDetailComponent,
    BlueprintsForRequestComponent,
    BlueprintDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    NgxJsonViewerModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
