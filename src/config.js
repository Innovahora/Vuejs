const base_mode = 'production',
	base_api = {
		development: 'http://localhost/tbi/backend_estadisticas/',
		//development: 'http://localhost:81/innovahora/backend_estadisticas/',
		testing: 'https://innovahora.com/',
		// production: 'http://52.87.243.188:8080/estadisticas_backend/'
		production: 'http://estadisticasapi.asociacionafp.pe/estadisticas_backend/'
		// production: 'http://ec2-3-17-205-253.us-east-2.compute.amazonaws.com'
	},
	config = {
		base_mode: base_mode,
		base_url: base_api[base_mode]
	}

export default config