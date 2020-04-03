<template>
  <div class="home">
    <h1>VIEW: Module1View</h1>
    <p>do we have moduleConf in view?
      <span v-if="moduleConf">yes: {{ moduleConf }}</span>
      <span v-if="!moduleConf">no</span>
    </p>
    <Module1Configurator v-if="!moduleConf" />
    <Module1Show v-else :moduleConf="moduleConf" />
    <router-view />
  </div>
</template>

<script>
import Module1Configurator from '@/components/Module1Configurator.vue'
import Module1Show from '@/components/Module1Show.vue'

export default {
  name: 'Module1View',
  components: {
    Module1Configurator,
    Module1Show
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
