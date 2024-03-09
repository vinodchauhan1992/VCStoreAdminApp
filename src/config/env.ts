enum ApiVersionEnum {
	v1 = 'v1/',
	v2 = 'v2/',
}

export default {
	isLocalHostEnvironment: true,
	productionHost: 'https://vcstoreapi-production.up.railway.app/',
	localHost: 'http://localhost:3371/',
	apiVersion: ApiVersionEnum.v2,
};
