import config from '../config';

export const getApiBaseUrl = () => {
	if (!config.env.isLocalHostEnvironment) {
		return `${config.env.productionHost}${config.env.apiVersion}`;
	}
	return `${config.env.localHost}${config.env.apiVersion}`;
};
