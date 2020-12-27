import { mapGetters } from 'vuex';

export default {
	computed: mapGetters({
		repository: 'repository/get'
	}),

	async fetch({ $axios, params, store }) {
		await $axios.get('https://api.github.com/repos/' + params.username + '/' + params.repo).then((response) => {
			console.log(response);

			store.commit('repository/set', response.data);
		});
	}
};
