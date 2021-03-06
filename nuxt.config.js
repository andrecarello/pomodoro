const sassDir = '@/assets/sass';

export default {
	ssr: true,

	// Global door
	server: {
		port: 8080, // default: 3000
		host: 'localhost' // default: localhost
	},

	// Vue config
	vue: {
		config: {
			productionTip: true,
			devtools: true
		}
	},

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'Pomodoro',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;400;800&display=swap'
			}
		]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [ sassDir + '/app.scss' ],

	styleResources: {
		scss: [
			sassDir + '/core/_settings.scss',
			sassDir + '/core/_colors.scss',
			sassDir + '/core/_functions.scss',
			sassDir + '/core/_mixins.scss',
			sassDir + '/layout/_display.scss',
			sassDir + '/layout/_sizes.scss'
		]
	},

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
		// https://vueformulate.com/guide/
		'~/plugins/vue-formulate'
		// '~/plugins/route'
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		// '@nuxtjs/tailwindcss',
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/content
		'@nuxt/content',
		// https://www.npmjs.com/package/@nuxtjs/style-resources
		'@nuxtjs/style-resources'
	],

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {
		baseUrl: 'http://localhost:8080/'
	},

	// Content module configuration (https://go.nuxtjs.dev/config-content)
	content: {},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {}
};
