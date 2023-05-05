<template>
  <div class="hello">
    <fm-making-form
      ref="makingform"
      style="height: 100vh"
      preview
      generate-code
      generate-json
    >
      <template slot="action">
      </template>
    </fm-making-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
