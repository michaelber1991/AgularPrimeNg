import { Component } from '@angular/core';
import { VirtualScrollTableComponent } from '@components/virtual-scroll-table/virtual-scroll-table.component';

@Component({
	selector: 'app-about',
	standalone: true,
	imports: [VirtualScrollTableComponent],
	templateUrl: './about.component.html',
	styleUrl: './about.component.scss'
})
export class AboutComponent {}
