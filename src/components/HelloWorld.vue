<template>
  <div class="hello">
    <a href="javascript:;" @click="changeZh">{{$t("message.btnText1")}}</a>
    <a href="javascript:;" @click="changeEn">{{$t("message.btnText2")}}</a>

    <h1>{{$t("message.title")}}</h1>
    <input style="width: 300px;" class="form-control" :placeholder="$t('placeholder.enter')">
    <ul>
      <li v-for="brand in $t('brands')" :key="brand.id">{{brand}}</li>
    </ul>


  </div>
</template>

<script>
export default {
  name: 'helloworld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      changeZh(){
        this.$i18n.locale = 'zh'
      },
      changeEn(){
        this.$i18n.locale = 'en'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
