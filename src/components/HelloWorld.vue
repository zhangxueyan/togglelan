<template>
  <div class="hello">
    <a href="javascript:;" @click="changeLocale">{{$t("message.btnText")}}</a>
    <h1>{{$t("message.title")}}</h1>
    <input style="width: 300px;" class="form-control" :placeholder="$t('placeholder.enter')">
    <ul>
      <li v-for="brand in $t('brands')" :key="brand.id">{{brand}}</li>
    </ul>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      changeLocale () {
          let locale = this.$i18n.locale
          locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
