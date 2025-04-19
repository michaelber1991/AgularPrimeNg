import { Component } from '@angular/core';
import { Toast, ToastModule } from 'primeng/toast';

@Component({
	selector: 'app-toast',
	imports: [Toast, ToastModule],
	standalone: true,
	template: '<p-toast />',
	styleUrl: './toast.component.scss'
})
export class ToastComponent {}
