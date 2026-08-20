import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { SideBar } from '../side-bar/side-bar';

@Component({
  selector: 'app-dashboard',
  imports: [HlmSidebarImports, HlmButtonImports, SideBar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
