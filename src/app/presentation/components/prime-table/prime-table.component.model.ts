export class PrimeTable {
	title: string;
	columns: PrimeTableColumn[];
	constructor(data: Partial<PrimeTable>) {
		this.title = data.title || '';
		this.columns = data.columns || [];
	}
}

export class PrimeTableColumn {
	isFrozen: boolean;
	property: string;
	header: string;
	constructor(data: Partial<PrimeTableColumn>) {
		this.isFrozen = data.isFrozen || false;
		this.property = data.property || '';
		this.header = data.header || '';
	}
}
