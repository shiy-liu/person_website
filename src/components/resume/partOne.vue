<template>
  <div class="part-one">
    <img :src="headerImg" alt="" class="header-img">
    <p>姓&emsp;&emsp;名：刘国富</p>
    <p>学&emsp;&emsp;历：本科</p>
    <p>出生日期：1995.09.12</p>
    <p>工作年限：1 年</p>
    <p>年&emsp;&emsp;龄：25</p>
    <p>联系电话：18814665470</p>
    <p>电子邮箱：814253358@qq.com</p>
    <p>个人网站：<a href="http://www.liuguofu.top">十弋年</a></p>
  </div>
</template>

<script>
export default {
  name: "partOne",
  data() {
    return {
      headerImg: require('../../assets/images/resume/head_image.png')
    }
  },
};
</script>

<style scoped>
.part-one {
  width: 100%;
  height: 500px;
  border: 15px solid transparent;
  border-image: url("../../assets/images/resume/border_image.png") 30 30 stretch;
  background: #18202d;
}
.header-img{
  width: 150px;
  height: 150px;
}
p{
  line-height: 30px;
}
</style>