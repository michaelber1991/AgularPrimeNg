import { CommonModule } from '@angular/common';
import { Component, OnInit, input } from '@angular/core';
import { TableModule } from 'primeng/table';

export class VirtualScrollTableInput {
	title: string;
	constructor(data: Partial<VirtualScrollTableInput>) {
		this.title = data.title || '';
	}
}

@Component({
	selector: 'app-virtual-scroll-table',
	standalone: true,
	imports: [TableModule, CommonModule],
	templateUrl: './virtual-scroll-table.component.html',
	styleUrl: './virtual-scroll-table.component.scss'
})
export class VirtualScrollTableComponent implements OnInit {
	cols!: unknown[];
	products!: unknown[];
	public input = input(new VirtualScrollTableInput({}));

	ngOnInit(): void {
		this.products = [
			{ code: 'code1', name: 'Product 1', category: 'Category A', quantity: 10 },
			{ code: 'code2', name: 'Product 2', category: 'Category B', quantity: 20 },
			{ code: 'code3', name: 'Product 3', category: 'Category C', quantity: 30 },
			{ code: 'code4', name: 'Product 4', category: 'Category A', quantity: 40 },
			{ code: 'code5', name: 'Product 5', category: 'Category B', quantity: 50 }
		];

		this.cols = [
			{ field: 'code', header: 'Code' },
			{ field: 'name', header: 'Name' },
			{ field: 'category', header: 'Category' },
			{ field: 'quantity', header: 'Quantity' }
		];
	}
}
