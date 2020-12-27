import { mapGetters } from 'vuex';

export default {
	asyncData({ params }) {
		const username = params.username;

		return { username };
	},

	computed: mapGetters({
		repositories: 'repositories/get'
	}),

	async fetch({ $axios, params, store }) {
		await $axios
			.get('https://api.github.com/users/' + params.username + '/repos')
			.then((response) => {
				if (response.status === 200) {
					store.commit('repositories/set', response.data);
				} else {
					console.log('error -> ' + response.error);
				}
			})
			.catch((response) => console.log(response))
			.finally(() => {});
	}
};
