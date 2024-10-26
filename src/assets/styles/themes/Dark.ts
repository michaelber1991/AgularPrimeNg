import { ThemeSwitcherItem, ThemeSwitcherProperties } from './_base.model';

export const DarkTheme = [
	//colors
	new ThemeSwitcherItem(ThemeSwitcherProperties.PRIMARY_COLOR, '#3f5e85'),
	new ThemeSwitcherItem(ThemeSwitcherProperties.PRIMARY_CONTRAST_COLOR, 'white'),
	new ThemeSwitcherItem(ThemeSwitcherProperties.WATERMARK_COLOR, '#e2e8ec'),
	new ThemeSwitcherItem(ThemeSwitcherProperties.WATERMARK_CONTRAST_COLOR, '#343a40'),
	new ThemeSwitcherItem(ThemeSwitcherProperties.GRAY_LIGHT_COLOR, '#6c757d'),
	new ThemeSwitcherItem(ThemeSwitcherProperties.GRAY_LIGHT_CONTRAST_COLOR, '#343a40'),
	new ThemeSwitcherItem(ThemeSwitcherProperties.SECONDARY_COLOR, '#6c757d'),
	new ThemeSwitcherItem(ThemeSwitcherProperties.SUCCESS_COLOR, '#28a745'),
	new ThemeSwitcherItem(ThemeSwitcherProperties.INFO_COLOR, '#17a2b8'),
	new ThemeSwitcherItem(ThemeSwitcherProperties.WARNING_COLOR, '#ffc107'),
	new ThemeSwitcherItem(ThemeSwitcherProperties.DANGER_COLOR, '#dc3545'),
	new ThemeSwitcherItem(ThemeSwitcherProperties.LIGHT_COLOR, '#f8f9fa'),
	new ThemeSwitcherItem(ThemeSwitcherProperties.DARK_COLOR, '#343a40'),

	//shadows
	new ThemeSwitcherItem(
		ThemeSwitcherProperties.CARD_SHADOW,
		'0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)'
	)
];
