<template>
  <div class="home">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Module1View',
  components: {
  },
  data () {
    return {
      moduleConf: ''
    }
  },
  props: {
    moduleConfXXX: String
  },
  mounted () {
    if (typeof this.$route.params.moduleConf === 'undefined') {
      return
    }
    this.moduleConf = this.$route.params.moduleConf
  },
  watch: {
    '$route.params.moduleConf': function (moduleConf) {
      // console.log('watcher ', moduleConf)
      // this.$router.push(`/module1/${moduleConf}`)
    }
  }
}
</script>
