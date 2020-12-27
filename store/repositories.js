export const state = () => ({
  repositories: []
});

export const mutations = {
	set(state, value) {
		state.repositories = value;
	}
};

export const getters = {
	get(state) {
		return state.repositories;
	}
};
