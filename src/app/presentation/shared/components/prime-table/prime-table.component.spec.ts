import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeTableComponent } from './prime-table.component';

describe('VirtualScrollTableComponent', () => {
	let component: PrimeTableComponent;
	let fixture: ComponentFixture<PrimeTableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PrimeTableComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(PrimeTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
