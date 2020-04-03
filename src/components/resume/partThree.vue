<template>
  <div class="part-three">
    <div id="skill"></div>
  </div>
</template>

<script>
export default {
  name: "partThree",
  mounted(){
    this.initMap()
  },
  methods: {
    initMap() {
      let canvas = document.getElementById("skill")
      const myChart = this.$echarts.init(canvas);
      let option = {
        title: {
          text: '技能玫瑰图',
          subtext: 'more',
          left: 'center',
          textStyle:{
            color:'white'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          top: 'bottom',
          data: ['ES6+', '计算机网络', 'Node', 'Vue', 'MongoDB', '微信小程序','数据结构算法'],
          textStyle:{
            color:'red'
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
              show: true,
              type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        series: [
          {
            name: 'my skill',
            type: 'pie',
            color:['red','yellow','blue','white','orange','purple','green','pink'],
            radius: [30, 110],
            center: ['50%', '50%'],
            roseType: 'radius',
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: true
              }
            },
            data: [
              {value: 20, name: 'ES6+'},
              {value: 13, name: '计算机基础'},
              {value: 17, name: 'Node'},
              {value: 25, name: 'Vue'},
              {value: 22, name: 'MongoDB'},
              {value: 24, name: '微信小程序'},
              {value: 10, name: '数据结构算法'}
            ]
          }
        ]
      }
      myChart.setOption(option);
    }
  },
};
</script>

<style scoped>
.part-three {
  width: 100%;
  height: 500px;
  border: 15px solid transparent;
  border-image: url("../../assets/images/resume/border_image.png") 30 30 stretch;
  background: #18202d;
}
#skill{
  width: 100%;
  height: 400px;
}
</style>