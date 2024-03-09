import { enumsUtils } from '../utils';

export interface AdminMenuDataModel {
	id: string;
	menuTitle: string;
	description: string;
	adminMenuStatusID: string;
	adminMenuStatus: string;
	isDeleteable: boolean;
	isAdminDeleteable: boolean;
	dateAdded: string;
	dateModified: string;
	__v: number;
}

export type AdminMenuModelStatusTypes = enumsUtils.ResultTypeEnum;

export interface AdminMenuModel {
	status: AdminMenuModelStatusTypes;
	message: string;
	data: AdminMenuDataModel[] | null;
}
