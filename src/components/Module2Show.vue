<template>
  <div>
    <h2>COMPONENT: module 2 show</h2>
    <p>do we have moduleConf in component?
      <span v-if="moduleConf">yes: {{ moduleConf }}</span>
      <span v-if="!moduleConf">no</span>
    </p>
    <p>navigation</p>
    <ul>
      <li>
        <router-link to="/module2">back to module 2 configurator</router-link>
      </li>
      <li>
        <router-link to="/">back to menu</router-link>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'Module2Show',
  props: {
    moduleConf: String
  }
}
</script>
