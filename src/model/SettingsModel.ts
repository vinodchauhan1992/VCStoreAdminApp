export type SettingsIconType = 'none' | 'chevron' | 'switch';

export interface SettingsModel {
	id: string | null;
	title: string | null;
	subtitle: string | null;
	iconType: SettingsIconType;
	route: string | null;
}
