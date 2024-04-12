import { Component, Input, signal } from '@angular/core';
import { TableModule } from 'primeng/table';

export class VirtualScrollTableInput {
	label: string;
	constructor(data: Partial<VirtualScrollTableInput>) {
		this.label = data.label || '';
	}
}

@Component({
	selector: 'app-virtual-scroll-table',
	standalone: true,
	imports: [TableModule],
	templateUrl: './virtual-scroll-table.component.html',
	styleUrl: './virtual-scroll-table.component.scss'
})
export class VirtualScrollTableComponent {
	@Input() inputDta = signal(new VirtualScrollTableInput({}));
}
