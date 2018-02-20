<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>Essential Links</h2>
    <input
      type="number"
      v-model="depth"
      @input="updateDepth"
    />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      depth: this.$store.state.depth
    };
  },
  mounted() {
    console.log(this.$store.state.depth)
  },
  methods: {
    updateDepth(event) {
      this.$store.commit("updateDepth", event.target.value);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
