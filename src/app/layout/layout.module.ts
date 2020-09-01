import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, HeaderComponent, SidebarComponent],
})
export class LayoutModule {}
