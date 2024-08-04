export class PrimeTable {
	title: string;
	columns: PrimeTableColumn[];
	rowsPerPageOptions: number[];
	constructor(data: Partial<PrimeTable>) {
		this.title = data.title || '';
		this.columns = data.columns || [];
		this.rowsPerPageOptions = data.rowsPerPageOptions || [10, 20, 50];
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
