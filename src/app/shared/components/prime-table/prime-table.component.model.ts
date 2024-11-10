import { Signal, signal } from '@angular/core';
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
	dataKey: string;
	selectionMode: 'single' | 'multiple' | null | undefined;
	selectedRows: T[];
	onLazyload: (event: TableLazyLoadEvent) => Promise<void>;
	constructor(data: Partial<PrimeTable<T>>) {
		this.title = data.title || '';
		this.columns = data.columns || [];
		this.dataKey = data.dataKey || '';
		this.selectionMode = data.selectionMode || PrimeTableSelectionMode.Single;
		this.selectedRows = data.selectedRows || [];
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

export enum PrimeTableSelectionMode {
	Single = 'single',
	Multiple = 'multiple'
}

export class PrimeTableColumn {
	/* eslint-disable @typescript-eslint/no-explicit-any */
	type: PrimeTableColumnType<any>;
	isFrozen: boolean;
	property: string;
	header: Signal<string | undefined>;
	minWidth: string;
	alignFrozen: PrimeTableColumnAlignFrozen;
	constructor(data: Partial<PrimeTableColumn>) {
		this.type = data.type || new PrimeTableColumnType({});
		this.isFrozen = data.isFrozen || false;
		this.property = data.property || '';
		this.header = data.header || signal<string>('');
		this.minWidth = data.minWidth || '';
		this.alignFrozen = data.alignFrozen || PrimeTableColumnAlignFrozen.Left;
	}
}

export class PrimeTableColumnType<T> {
	type: PrimeTableColumnTypes;
	input: T;
	constructor(data: Partial<PrimeTableColumnType<T>>) {
		this.type = data.type || PrimeTableColumnTypes.TEXT;
		this.input = data.input || ('' as T);
	}
}

export enum PrimeTableColumnTypes {
	TEXT = 'text',
	AVATAR = 'avatar'
}
