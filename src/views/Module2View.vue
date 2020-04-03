<template>
  <div class="home">
    <h2>VIEW: Module2View</h2>
    <p>do we have moduleConf in view?
      <span v-if="moduleConf">yes: {{ moduleConf }}</span>
      <span v-if="!moduleConf">no</span>
    </p>
    <Module2Configurator v-if="!moduleConf" />
    <Module2Show v-else :moduleConf="moduleConf" />
    <router-view />
  </div>
</template>

<script>
import Module2Configurator from '@/components/Module2Configurator.vue'
import Module2Show from '@/components/Module2Show.vue'

export default {
  name: 'Module2View',
  components: {
    Module2Configurator,
    Module2Show
  },
  data () {
    return {
      moduleConfXXX: ''
    }
  },
  props: {
    moduleConf: String
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
      // this.$router.push(`/module2/${moduleConf}`)
    }
  }
}
</script>
