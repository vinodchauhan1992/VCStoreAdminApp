import { AddressModel } from './AddressModel';
import { ImageDataModel } from './ImageDataModel';

export interface LoggedInUserNameModel {
	firstname: string;
	lastname: string;
}

export interface LoggedInUserModel {
	user: {
		id: string;
		email: string;
		username: string;
		password: string;
		name: LoggedInUserNameModel;
		address: AddressModel;
		phone: string;
		userRoleID: string;
		userRole: string;
		userStatusID: string;
		userStatus: string;
		imageData: ImageDataModel;
		dateOfBirth: Date;
		dateAdded: Date;
		dateModified: Date;
	};
	jwtToken: string;
}
