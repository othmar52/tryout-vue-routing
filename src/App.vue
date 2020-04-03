<template>
  <div id="app">
    <ConfigInvalid v-if="!haveValidConfig" />
    <PermanentVisible v-if="haveValidConfig" />
    <router-view v-if="haveValidConfig" />
  </div>
</template>
<script>
import ConfigInvalid from '@/components/ConfigInvalid.vue'
import PermanentVisible from '@/components/PermanentVisible.vue'
export default {
  components: {
    ConfigInvalid,
    PermanentVisible
  },
  data () {
    return {
      haveValidConfig: true
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
