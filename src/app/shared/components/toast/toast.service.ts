import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
	providedIn: 'root'
})
export class ToastService {
	private _messageService = inject(MessageService);

	showSuccess(title: string, detail: string) {
		this._messageService.add({ severity: 'success', summary: title, detail: detail });
	}

	showInfo(title: string, detail: string) {
		this._messageService.add({ severity: 'info', summary: title, detail: detail });
	}

	showWarn(title: string, detail: string) {
		this._messageService.add({ severity: 'warn', summary: title, detail: detail });
	}

	showError(title: string, detail: string) {
		this._messageService.add({ severity: 'error', summary: title, detail: detail });
	}

	showContrast(title: string, detail: string) {
		this._messageService.add({ severity: 'contrast', summary: title, detail: detail });
	}

	showSecondary(title: string, detail: string) {
		this._messageService.add({ severity: 'secondary', summary: title, detail: detail });
	}
}
