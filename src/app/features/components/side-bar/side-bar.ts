import { Component } from '@angular/core';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmCollapsibleImports } from '@spartan-ng/helm/collapsible';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-side-bar',
  imports: [HlmSidebarImports, NgIcon, HlmDropdownMenuImports, HlmCollapsibleImports],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css',
})
export class SideBar {
  protected readonly _items = [
    {
      title: 'Cycles',
      defaultOpen: false,
      items: [{ title: 'My Cycles' }, { title: 'Add Cycle' }, { title: 'Bike Details' }],
      icon: 'lucideBike',
    },
    {
      title: 'Rides',
      defaultOpen: false,
      icon: 'lucideWind',
      items: [
        { title: 'Start Ride' },
        { title: 'Ride History', isActive: false },
        { title: 'Live Ride' },
      ],
    },
    {
      title: 'Routes',
      defaultOpen: false,
      icon: 'lucideSignpost',
      items: [{ title: 'Discover Routes' }, { title: 'Saved routes' }, { title: 'Create Route' }],
    },
    {
      title: 'Performance',
      defaultOpen: false,
      icon: 'lucideSpotlight',
      items: [{ title: 'Statistics' }, { title: 'Progress' }, { title: 'Personal Records' }],
    },
    {
      title: 'Maintenance',
      defaultOpen: false,
      icon: 'lucideWrench',
      items: [
        { title: 'Services Schedule' },
        { title: 'Maintenance History' },
        { title: 'Expense' },
      ],
    },
    // {
    //   title: 'Achievements',
    //   defaultOpen: false,
    //   icon: 'lucideChevronUp',
    // },
    // {
    //   title: 'Community',
    //   defaultOpen: false,
    //   icon: 'lucideChevronUp',
    // },
    // {
    //   title: 'Notifications',
    //   defaultOpen: false,
    //   icon: 'lucideChevronUp',
    // },
    // {
    //   title: 'Settings',
    // },
  ];
}
