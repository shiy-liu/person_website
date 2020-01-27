<!--
 * @Author: your name
 * @Date: 2019-11-24 20:51:22
 * @LastEditTime : 2019-12-26 15:52:05
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /shiyi_website/src/pages/index.vue
 -->
<template>
    <div conatiner>
        <div class="columns">
            <div class="column is-6">
                <img src="../assets/images/cat.jpeg" alt="cat" width="100%" style="border-radius:20px">
            </div>
            <div class="column is-5 is-offset-1">
                <p class="title">刘十弋个人学习网站</p>
                <div class="columns is-mobile">
                    <div class="column is-4 is-offset-3">
                        <b-button type="is-danger" icon-left="heart" rounded @click="snackbar">加我微信</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    snackbar() {
      this.$buefy.snackbar.open({
        message: `liu18814665470`,
        position:"is-top-right",
        duration: 7000,
        type: 'is-warning'
      })
    }
  },
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
@keyframes typing{
  from {
    width: 0;
  }
}
</style>