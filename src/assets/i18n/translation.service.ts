import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ITranslations, TranslationsRoot } from './ITranslations';
import { Languages } from './languages';

@Injectable({
	providedIn: 'root'
})
export class TranslationService {
	private _translateService = inject(TranslateService);
	public translationBook = signal<ITranslations>(this._translateService.instant(TranslationsRoot.ROOT));

	public async setTranslationLanguage(lang: Languages): Promise<void> {
		this._translateService.use(lang);
		await this.setTranslationBook();
	}

	private async setTranslationBook(): Promise<void> {
		const book = await this._translateService.instant(TranslationsRoot.ROOT);
		this.translationBook.set(book);
	}
}
