import { Component, signal } from '@angular/core';
import {
	VirtualScrollTableComponent,
	VirtualScrollTableInput
} from '@components/virtual-scroll-table/virtual-scroll-table.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [VirtualScrollTableComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {
	public dataInput = signal<VirtualScrollTableInput>(new VirtualScrollTableInput({ label: '' }));
}
