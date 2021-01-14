export default ({ app, route, store, redirect }) => {
	// Every time the route changes (fired on initialization too)

	app.router.afterEach((to, from) => {
    console.log(to, from)
    // console.log(route)
    // console.log(from)
    // console.log(store)
    // console.log(redirect)
	});
};
