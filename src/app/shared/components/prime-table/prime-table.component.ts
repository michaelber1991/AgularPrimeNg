import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PrimeTable } from './prime-table.component.model';

@Component({
	selector: 'app-prime-table',
	standalone: true,
	imports: [TableModule, CommonModule],
	templateUrl: './prime-table.component.html',
	styleUrl: './prime-table.component.scss'
})
export class PrimeTableComponent {
	public input = input(new PrimeTable({}));
}
