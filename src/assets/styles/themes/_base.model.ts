export class ThemeSwitcher {
	type: ThemeSwitcherType;
	themeSwitcherItems: ThemeSwitcherItem[];
	constructor(type: ThemeSwitcherType, themeSwitcherItems: ThemeSwitcherItem[]) {
		this.type = type;
		this.themeSwitcherItems = themeSwitcherItems;
	}
}

export enum ThemeSwitcherType {
	LIGHT = 'light',
	DARK = 'dark'
}

export class ThemeSwitcherItem {
	property: ThemeSwitcherProperties;
	value: string;
	constructor(property: ThemeSwitcherProperties, value: string) {
		this.property = property;
		this.value = value;
	}
}

export enum ThemeSwitcherProperties {
	PRIMARY_COLOR = '--primary-color',
	PRIMARY_CONTRAST_COLOR = '--primary-contrast-color',
	WATERMARK_COLOR = '--watermark-color',
	WATERMARK_CONTRAST_COLOR = '--watermark-contrast-color',
	GRAY_LIGHT_COLOR = '--gray-light-color',
	GRAY_LIGHT_CONTRAST_COLOR = '--gray-light-contrast-color',
	SECONDARY_COLOR = '--secondary-color',
	SUCCESS_COLOR = '--success-color',
	INFO_COLOR = '--info-color',
	WARNING_COLOR = '--warning-color',
	DANGER_COLOR = '--danger-color',
	LIGHT_COLOR = '--light-color',
	DARK_COLOR = '--dark-color',
	CARD_SHADOW = '--card-shadow'
}
