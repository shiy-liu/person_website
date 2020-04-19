<!--
 * @Author: aaron.liu
 * @Date: 2019-11-24 20:51:22
 * @LastEditTime : 2019-12-26 15:52:05
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /shiyi_website/src/pages/index.vue
 -->
<template>
  <div conatiner>
    <div class="columns">
      <div class="column is-6 is-full-mobile">
        <img src="../../assets/images/index/cat.jpeg" alt="cat" width="100%" style="border-radius:20px" v-if="!isClickHot"/>
        <is-hot v-if="isClickHot" @changeImg="change"></is-hot>
      </div>
      <div class="column is-5 is-offset-1 is-full-mobile">
        <p class="title">{{$t('title')}}</p>
        <ul class="column is-offset-3-mobile">
          <li v-for="(item,index) in demand" :key="index">
            {{$t(item)}}
          </li>
        </ul>
        <div class="columns is-mobile">
          <div class="column is-full-mobile is-offset-4" style="margin-left:130px;">
            <b-button type="is-danger" icon-pack="ionicons" icon-left="chatbubbles" rounded @click="snackbar">{{$t('wx')}}</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import isHot from '@/components/isHot.vue';
export default {
  data() {
    return {
      isClickHot:false
    }
  },
  mounted () {
    this.getDemand();
  },
  components: {
    isHot,
  },
  computed:{
    demand:{
      get(){
        return this.$t('demand')
      },
      set(val){
        this.value = this.$t('val')
      }
    }
  },
  methods: {
    snackbar() {
      this.$buefy.snackbar.open({
        message: `liu18814665470`,
        position: 'is-top-right',
        duration: 7000,
        type: 'is-warning'
      })
    },
    change(){
      this.isClickHot = false;
    },
    async getDemand(){
      let res = await this.$request.fetch('/api/introduct')
      this.demand = res.data.result.map(item=>{return item.type})
    }
  }
}
</script>

<style  scoped>
.title {
  display: inline-block;
  width: 24ch;
  margin: 100px 0;
  border-right: 1px solid #000;
  letter-spacing: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 3s steps(10) infinite alternate;
}
@keyframes typing {
  from {
    width: 0;
  }
}
</style>