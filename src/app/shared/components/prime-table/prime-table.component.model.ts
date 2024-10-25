import { signal } from '@angular/core';
import { TableLazyLoadEvent } from 'primeng/table';

export type PrimeTableValues<T> = {
	data: T[];
	totalRecords: number;
};

export class PrimeTable<T> {
	title: string;
	columns: PrimeTableColumn[];
	values = signal<PrimeTableValues<T>>({ data: [], totalRecords: 0 });
	totalRecords: number;
	rowsPerPageOptions: number[];
	loading: boolean;
	onLazyload: (event: TableLazyLoadEvent) => Promise<void>;

	constructor(data: Partial<PrimeTable<T>>) {
		this.title = data.title || '';
		this.columns = data.columns || [];
		this.rowsPerPageOptions = data.rowsPerPageOptions || [10, 20, 50];
		this.totalRecords = data.totalRecords || 0;
		this.onLazyload = data.onLazyload ?? (async (): Promise<void> => {});
		this.loading = data.loading || false;
	}
}

export enum PrimeTableColumnAlignFrozen {
	Right = 'right',
	Left = 'left'
}

export class PrimeTableColumn {
	isFrozen: boolean;
	property: string;
	header: string;
	minWidth: string;
	alignFrozen: PrimeTableColumnAlignFrozen;
	constructor(data: Partial<PrimeTableColumn>) {
		this.isFrozen = data.isFrozen || false;
		this.property = data.property || '';
		this.header = data.header || '';
		this.minWidth = data.minWidth || '';
		this.alignFrozen = data.alignFrozen || PrimeTableColumnAlignFrozen.Left;
	}
}
