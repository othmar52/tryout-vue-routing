<template>
  <div class="home">
    <ModuleMenu />
  </div>
</template>

<script>
// @ is an alias to /src
import ModuleMenu from '@/components/ModuleMenu.vue'

export default {
  name: 'Home',
  components: {
    ModuleMenu
  }
}
</script>
