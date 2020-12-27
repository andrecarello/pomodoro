export default {
  methods: {
    get: function (e) {
      console.log(e.target.value)

      this.$router.push('/repositories/' + e.target.value);
    }
  }
}
