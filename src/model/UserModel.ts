export interface UserModel {
	idToken?: string | null;
	serverAuthCode?: string | null;
	scopes?: string[] | null;
	user?: {
		photo?: string | null;
		givenName?: string | null;
		familyName?: string | null;
		name?: string | null;
		email?: string | null;
		id?: string | null;
	};
}
