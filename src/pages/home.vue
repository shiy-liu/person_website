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
                <img src="../assets/images/index/logo.png" alt="logo">
                <span class="logo-title">{{$t('text')}}</span> 
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item :href="item.path" v-for="(item,index) in nav" :key="index">
                {{$t(item.name)}}
            </b-navbar-item>
            <b-navbar-dropdown :label="lang">
                <b-navbar-item href="#" @click="changeLanguage('中文')">
                    中文
                </b-navbar-item>
                <b-navbar-item href="#" @click="changeLanguage('English')">
                    English
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
        </b-navbar>
        <div class="columns">
            <div class="column mt">
                <router-view ref="index"></router-view>
            </div>
        </div>
        <div class=" columns">
            <div class="column is-2 has-text-centered">
                <p class="footer-title">{{$t('app')}}</p>
                <ul class="links">
                    <li> <a  @click="showHot">{{$t('news')}}</a></li>
                    <li> <a  @click="eatWhat">{{$t('eat')}}</a></li>
                    <li>{{$t('ticket')}}</li>
                    <li>{{$t('nep')}}</li>
                    <li>{{$t('iKnow')}}</li>
                </ul>
            </div>
            <div class="column is-8 has-text-centered">
                <p class="footer-title">{{$t('wxp')}}</p>
                <img src="../assets/images/index/wx.jpg" alt="微信公众号" width="120" height="150">
            </div>
             <div class="column is-2 has-text-centered">
                 <p class="footer-title">{{$t('links')}}</p>
                 <ul class="links">
                    <li><a href="https://www.jianshu.com/u/67548e948c35" target="_self">{{$t('linksJS')}}</a> </li>
                    <li><a href="https://www.cnblogs.com/liuguofu/" target="_self">{{$t('linksBK')}}</a> </li>
                    <li><a href="https://me.csdn.net/blog/qq_42463483" target="_self">CSDN</a></li>
                    <li><a href="https://github.com/shiy-liu/study.git" target="_self">GithubBA</a> </li>
                    <li><a href="https://juejin.im/user/5be29da46fb9a049dc01b864" target="_self">{{$t('linksJJ')}}</a> </li>
                </ul>
            </div>
        </div>
        <div class="my-footer">
          <a href="http://www.beian.miit.gov.cn/" style="color:#aaa">京ICP备20007850号</a>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      lang:localStorage.getItem('lang') || "中文"
    }
  },
  computed:{
    nav(){
      return this.$t('nav')
    }
  },
  methods: {
    eatWhat() {
      this.$router.push('eatWhat')
    },
    changeLanguage(lang){
      this.lang = lang
      this.$i18n.locale = lang
      localStorage.setItem('lang', lang);
    },
    showHot(){
      this.$refs.index.isClickHot = true
    }
  },
}
</script>

<style scoped>

.mt {
    margin-top: 20px;
}
.logo-title {
    font-weight: 700;
}
.footer-title {
    font-size: 1.2rem;
    font-weight: 700;
}
.links {
  font-size: 1rem
}
.my-footer{
  padding-bottom:30px;
  margin: 0 auto;
  width: 118px;
  font-size: 12px;
}
</style>