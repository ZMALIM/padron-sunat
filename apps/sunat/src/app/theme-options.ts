import { Injectable } from '@angular/core';

@Injectable()
export class ThemeOptions {

  // Header

  headerFixed = true;
  headerShadow = true;
  headerTransparentBg = true;

  // Sidebar

  toggleSidebarMobile = false;
  sidebarBackground = '';
  sidebarBackgroundStyle = 'dark';
  sidebarFixed = true;
  // Main content

  contentBackground = '';
}
