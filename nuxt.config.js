const sassDir = '@/assets/sass';

export default {
  ssr: true,

	// Global door
	server: {
		port: 8080, // default: 3000
		host: 'localhost' // default: localhost
	},

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
		link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [ sassDir + '/app.scss' ],

	styleResources: {
		scss: [
			sassDir + '/core/_settings.scss',
			sassDir + '/core/_functions.scss',
			sassDir + '/core/_mixins.scss',
      sassDir + '/layout/_display.scss',
      sassDir + '/layout/_sizes.scss'
		]
	},

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [],

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
	axios: {},

	// Content module configuration (https://go.nuxtjs.dev/config-content)
	content: {},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {}
};
