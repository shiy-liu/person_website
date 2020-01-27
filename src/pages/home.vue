<!--
 * @Author: aaron
 * @Date: 2019-11-24 20:28:39
 * @LastEditTime : 2019-12-26 14:31:13
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /shiyi_website/src/pages/home.vue
 -->
<template>
    <div class="container is-fuild">
        <b-navbar>
        <template slot="start">
            <b-navbar-item>
                <img src="../assets/images/logo.png" alt="logo">
                <span class="logo-title">十弋</span> 
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item :href="item.path" v-for="(item,index) in nav" :key="index">
                {{item.name}}
            </b-navbar-item>
            <b-navbar-dropdown label="中文">
                <b-navbar-item href="#">
                    中文
                </b-navbar-item>
                <b-navbar-item href="#">
                    English
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
        </b-navbar>
        <div class="columns">
            <div class="column mt">
                <router-view></router-view>
            </div>
        </div>
        <div class="footer columns">
            <div class="column is-2 has-text-centered">
                <p class="footer-title">小应用</p>
                <ul>
                    <li>新闻热点</li>
                    <li><a href="#" @click="eatWhat">晚上吃啥</a></li>
                    <li>抢票</li>
                    <li>东北银</li>
                </ul>
            </div>
            <div class="column is-8 has-text-centered">
                <p class="footer-title">微信公众号</p>
                <img src="../assets/images/wx.jpg" alt="微信公众号" width="100" height="120">
            </div>
             <div class="column is-2 has-text-centered">
                 <p class="footer-title">友情链接</p>
                 <ul>
                    <li><a href="https://www.jianshu.com/u/67548e948c35" target="blank">简书</a> </li>
                    <li><a href="https://www.cnblogs.com/liuguofu/" target="blank">博客园</a> </li>
                    <li><a href="https://me.csdn.net/blog/qq_42463483" target="blank">CSDN</a></li>
                    <li><a href="https://github.com/shiy-liu/study.git" target="blank">Github</a> </li>
                    <li><a href="https://juejin.im/user/5be29da46fb9a049dc01b864" target="blank">掘金</a> </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          name:"首页",path:"/"
        },
        {
          name:"练习",path:"/practice"
        },
        {
          name:"作品",path:"/work"
        },
        {
          name:"简历",path:"/resume"
        },
        {
          name:"留言墙",path:"/comment"
        },
        {
          name:"换肤",path:"/skin"
        }
      ]
    }
  },
  methods: {
    eatWhat() {
      this.$router.push('eatWhat')
    }
  },
}
</script>

<style scoped>
.mt {
    margin-top: 50px;
}
.logo-title {
    font-weight: 700;
}
.footer-title {
    font-size: 1rem;
    font-weight: 700;
}
</style>