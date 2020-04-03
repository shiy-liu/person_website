<template>
  <div class="part-five">
    <p>工作经历 <span class="down">（点我预览pdf版本简历）</span></p>
  </div>
</template>

<script>
export default {
  name: "partFive"
};
</script>

<style scoped>
.part-five {
  width: 100%;
  height: 500px;
  border: 15px solid transparent;
  border-image: url("../../assets/images/resume/border_image.png") 30 30 stretch;
  background: #18202d;
}
.down{
  color:aqua
}
</style>