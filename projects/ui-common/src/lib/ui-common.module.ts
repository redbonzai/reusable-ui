import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, RouterModule, NgModule], // CommonModule is required for directives like *ngIf, *ngFor
  exports: [HeaderComponent, SidebarComponent], // Export components so they can be used elsewhere
})
export class UiCommonModule {}
