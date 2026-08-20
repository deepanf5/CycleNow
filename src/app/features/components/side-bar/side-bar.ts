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
      title: 'Getting Started',
      defaultOpen: true,
      items: [{ title: 'Installation' }, { title: 'Project Structure' }],
      icon: 'lucideBike',
    },
    {
      title: 'Building Your Application',
      defaultOpen: false,
      icon: 'lucideChevronUp',
      items: [
        { title: 'Routing' },
        { title: 'Data Fetching', isActive: true },
        { title: 'Rendering' },
        { title: 'Caching' },
        { title: 'Styling' },
        { title: 'Optimizing' },
        { title: 'Configuring' },
        { title: 'Testing' },
        { title: 'Authentication' },
        { title: 'Deploying' },
        { title: 'Upgrading' },
        { title: 'Examples' },
      ],
    },
    {
      title: 'API Reference',
      defaultOpen: false,
      icon: 'lucideChevronUp',
      items: [
        { title: 'Components' },
        { title: 'File Conventions' },
        { title: 'Functions' },
        { title: 'next.config.js Options' },
        { title: 'CLI' },
        { title: 'Edge Runtime' },
      ],
    },
    {
      title: 'Architecture',
      defaultOpen: false,
      icon: 'lucideChevronUp',
      items: [
        { title: 'Accessibility' },
        { title: 'Fast Refresh' },
        { title: 'Next.js Compiler' },
        { title: 'Supported Browsers' },
        { title: 'Turbopack' },
      ],
    },
  ];
}
