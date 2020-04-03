<template>
  <div>
    <h1>COMPONENT: module 1 show</h1>
    <p>do we have moduleConf in component?
      <span v-if="moduleConf">yes: {{ moduleConf }}</span>
      <span v-if="!moduleConf">no</span>
    </p>
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

export default {
  name: 'Module1Show',
  props: {
    moduleConf: String
  }
}
</script>
