<template>
  <div>
    <Module1Status componentName="Module1Show"/>
    <br>
    <p>navigation</p>
    <ul>
      <li>
        <router-link to="/module1">back to module 1 configurator</router-link>
      </li>
      <li>
        <router-link to="/">back to menu</router-link>
      </li>
    </ul>
  </div>
</template>
<script>

import Module1Status from './Module1Status'

export default {
  name: 'Module1Show',
  components: {
    Module1Status
  },
  data () {
    return {
    }
  },
  props: {
  },
  mounted () {
  }
}
</script>
