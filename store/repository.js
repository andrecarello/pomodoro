export const state = () => ({
  repository: []
});

export const mutations = {
	set(state, value) {
		state.repository = value;
	}
};

export const getters = {
	get(state) {
		return state.repository;
	}
};
