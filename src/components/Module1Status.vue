<template>
  <div>
    <h1>COMPONENT: {{ componentName }}</h1>
    <p>do we have moduleConf in component?
      <span v-if="moduleConf">yes: {{ moduleConf }}</span>
      <span v-if="!moduleConf">no</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Module1Status',
  components: {},
  data () {
    return {
      moduleConf: ''
    }
  },
  props: {
    componentName: {
      type: String,
      default: '',
      required: false
    }
  },
  mounted () {
    if (typeof this.$route.params.moduleConf === 'undefined') {
      return
    }
    this.moduleConf = this.$route.params.moduleConf
  }
}
</script>
