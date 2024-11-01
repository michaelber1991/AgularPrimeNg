import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { ITranslations, TranslationsRoot } from './ITranslations';
import { Languages } from './languages';

@Injectable({
	providedIn: 'root'
})
export class TranslationService {
	private _translateService = inject(TranslateService);
	public translationBook = signal<ITranslations>(this._translateService.instant(TranslationsRoot.ROOT));

	public async setTranslationLanguage(lang: Languages): Promise<void> {
		await firstValueFrom(this._translateService.use(lang));
		const book = await firstValueFrom(this._translateService.get(TranslationsRoot.ROOT));
		this.translationBook.set(book);
	}

	public getCurrentLanguage(): Languages {
		return this._translateService.currentLang as Languages;
	}
}
