<template>
  <div class="foot">
    <p class="copyright">{{$t('footText')}}</p>
  </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/style.css";
</style>
