import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { SideBar } from '../side-bar/side-bar';
import { Header } from '../../../shared/header/header';

@Component({
  selector: 'app-dashboard',
  imports: [HlmSidebarImports, HlmButtonImports, SideBar, Header],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
