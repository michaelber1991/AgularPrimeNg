import { Component, signal } from '@angular/core';
import { PrimeTableComponent } from '@components/prime-table/prime-table.component';
import { PrimeTable, PrimeTableColumn } from '@components/prime-table/prime-table.component.model';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [PrimeTableComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {
	public dataInput = signal<PrimeTable>(
		new PrimeTable({
			title: 'Test',
			columns: [
				new PrimeTableColumn({ property: 'code', header: 'Code', isFrozen: true }),
				new PrimeTableColumn({ property: 'lastname', header: 'Lastname', isFrozen: false }),
				new PrimeTableColumn({ property: 'name', header: 'Name', isFrozen: false }),
				new PrimeTableColumn({ property: 'age', header: 'Age', isFrozen: false }),
				new PrimeTableColumn({ property: 'email', header: 'Email', isFrozen: false }),
				new PrimeTableColumn({ property: 'address', header: 'Address', isFrozen: false })
			]
		})
	);
}
