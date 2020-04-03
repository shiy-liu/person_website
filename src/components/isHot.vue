<template>
<div class="news">
<section class="columns my-titles is-mobile">
  <section class="column is-6">
    <p class="title is-4 my-title">百度新闻热点</p>
  </section>
    <section class="column is-1 is-offset-2" @click="getNews">
    <b-icon pack="ionicons" icon="refresh"></b-icon>
  </section>
  <section class="column is-1 is-offset-1" @click="close">
    <b-icon pack="ionicons" icon="close"></b-icon>
  </section>
</section>
<ul class="my-content">
  <li v-for="(item,index) in news" :key="index">
   <a :href="item.href">{{item.title}}</a>
  </li>
</ul>
   <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true">
   </b-loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [],
      isLoading: false,
      isFullPage:false
    }
  },
  created () {
    this.getNews();
  },
  methods: {
    async getNews(){
      this.isLoading = true
      let res = await this.$request.fetch('/api/hotnews/hotNews')
      if(res.data.status === '200'){
        this.news = res.data.result
        this.isLoading = false
      }
    },
    close(){
      this.$emit('changeImg')
    }
  },
}
</script>

<style scoped>
.news {
  width: 100% !important;
  height: 300px !important;
  overflow: auto !important;
}
.my-titles{
  cursor: pointer;
}

</style>