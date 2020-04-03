<template>
  <div class="part-four">
    <div id="article-amount"></div>
  </div>
</template>

<script>
export default {
  name: "partFour",
  mounted(){
    this.initMap()
  },
  methods: {
    initMap() {
      let canvas = document.getElementById("article-amount")
      const myChart = this.$echarts.init(canvas);
      let allData = [{date:'1-2',value:66},{date:'1-3',value:4},{date:'1-3',value:22},]
      let xAxisData = allData.map(item=>{return item.date})
      let option = {
        title: {
          text: '网站访客留言量',
          subtext: 'happy',
          left: 'center',
          textStyle:{
            color:'white'
          }
        },
        xAxis: {
          type: 'category',
          data:xAxisData,
          axisLabel:{
            color:'white'
          }
        },
        yAxis: {
          type: 'value',
          axisLabel:{
            color:'white'
          }
        },
        series: [{
          data: allData,
          type: 'bar',
          label:{
            show:true
          },
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
          }
        }]
      };
      myChart.setOption(option);
    }
  },
};
</script>

<style scoped>
.part-four {
  width: 100%;
  height: 500px;
  border: 15px solid transparent;
  border-image: url("../../assets/images/resume/border_image.png") 30 30 stretch;
  background: #18202d;
}
#article-amount{
  width: 100%;
  height: 400px;
}
</style>