import { Component, signal } from '@angular/core';
import { PrimeTableComponent } from '@shared/components/prime-table/prime-table.component';
import { PrimeTable, PrimeTableColumn } from '@shared/components/prime-table/prime-table.component.model';
import { ContentLayoutComponent } from '@shared/layouts/content-layout/content-layout.component';

type Product = {
	code: string;
	lastname: string;
	name: string;
	age: number;
	email: string;
	address: string;
};

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [PrimeTableComponent, ContentLayoutComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {
	public aaa = 0;
	public dataInput = signal<PrimeTable<Product>>(
		new PrimeTable<Product>({
			title: 'Test',
			columns: [
				new PrimeTableColumn({ property: 'code', header: 'Code', isFrozen: true }),
				new PrimeTableColumn({ property: 'lastname', header: 'Lastname', isFrozen: false }),
				new PrimeTableColumn({ property: 'name', header: 'Name', isFrozen: false }),
				new PrimeTableColumn({ property: 'age', header: 'Age', isFrozen: false }),
				new PrimeTableColumn({ property: 'email', header: 'Email', isFrozen: false }),
				new PrimeTableColumn({ property: 'address', header: 'Address', isFrozen: false })
			],
			onLazyload: async (): Promise<void> => {
				const a = this.aaa == 0 ? this.page1() : this.page2();
				this.dataInput().values.update(() => {
					return {
						data: a,
						totalRecords: 20
					};
				});
				this.aaa++;
			}
		})
	);

	private page1(): Product[] {
		return [
			{
				code: 'code11',
				lastname: 'Anderson',
				name: 'Jenny',
				age: 34,
				email: 'jenny.anderson@example.com',
				address: '808 Alder St'
			},
			{
				code: 'code12',
				lastname: 'Thomas',
				name: 'James',
				age: 24,
				email: 'james.thomas@example.com',
				address: '909 Willow St'
			},
			{
				code: 'code13',
				lastname: 'Jackson',
				name: 'Julia',
				age: 22,
				email: 'julia.jackson@example.com',
				address: '1010 Fir St'
			},
			{
				code: 'code14',
				lastname: 'White',
				name: 'Jacob',
				age: 21,
				email: 'jacob.white@example.com',
				address: '1111 Redwood St'
			},
			{
				code: 'code15',
				lastname: 'Harris',
				name: 'Judy',
				age: 29,
				email: 'judy.harris@example.com',
				address: '1212 Cypress St'
			},
			{
				code: 'code16',
				lastname: 'Martin',
				name: 'Jeff',
				age: 36,
				email: 'jeff.martin@example.com',
				address: '1313 Sequoia St'
			},
			{
				code: 'code17',
				lastname: 'Thompson',
				name: 'Jill',
				age: 37,
				email: 'jill.thompson@example.com',
				address: '1414 Oak St'
			},
			{
				code: 'code18',
				lastname: 'Garcia',
				name: 'Jon',
				age: 38,
				email: 'jon.garcia@example.com',
				address: '1515 Maple St'
			},
			{
				code: 'code19',
				lastname: 'Martinez',
				name: 'Jenny',
				age: 39,
				email: 'jenny.martinez@example.com',
				address: '1616 Birch St'
			},
			{
				code: 'code20',
				lastname: 'Rodriguez',
				name: 'Jim',
				age: 40,
				email: 'jim.rodriguez@example.com',
				address: '1717 Pine St'
			}
		];
	}

	private page2(): Product[] {
		return [
			{
				code: 'code1',
				lastname: 'Doe',
				name: 'John',
				age: 30,
				email: 'john.doe1@example.com',
				address: '123 Main St'
			},
			{
				code: 'code2',
				lastname: 'Smith',
				name: 'Jane',
				age: 25,
				email: 'jane.smith@example.com',
				address: '456 Elm St'
			},
			{
				code: 'code3',
				lastname: 'Johnson',
				name: 'Jim',
				age: 27,
				email: 'jim.johnson@example.com',
				address: '789 Maple St'
			},
			{
				code: 'code4',
				lastname: 'Williams',
				name: 'Jake',
				age: 35,
				email: 'jake.williams@example.com',
				address: '101 Oak St'
			},
			{
				code: 'code5',
				lastname: 'Brown',
				name: 'Jill',
				age: 28,
				email: 'jill.brown@example.com',
				address: '202 Pine St'
			},
			{
				code: 'code6',
				lastname: 'Davis',
				name: 'Jen',
				age: 32,
				email: 'jen.davis@example.com',
				address: '303 Cedar St'
			},
			{
				code: 'code7',
				lastname: 'Miller',
				name: 'Jack',
				age: 31,
				email: 'jack.miller@example.com',
				address: '404 Birch St'
			},
			{
				code: 'code8',
				lastname: 'Wilson',
				name: 'Jerry',
				age: 29,
				email: 'jerry.wilson@example.com',
				address: '505 Spruce St'
			},
			{
				code: 'code9',
				lastname: 'Moore',
				name: 'Jess',
				age: 26,
				email: 'jess.moore@example.com',
				address: '606 Cherry St'
			},
			{
				code: 'code10',
				lastname: 'Taylor',
				name: 'Joel',
				age: 33,
				email: 'joel.taylor@example.com',
				address: '707 Aspen St'
			}
		];
	}
}
