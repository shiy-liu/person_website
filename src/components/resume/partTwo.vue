<template>
  <div class="part-two">
    <div id="map"></div>
  </div>
</template>

<script>
import hlj from '../../../static/heilongjiang.js';
export default {
  name: "partTwo",
  mounted(){
    this.initMap()
  },
  methods: {
    initMap() {
      let canvas = document.getElementById("map")
      const myChart = this.$echarts.init(canvas);
      let option = {
        tooltip: {
          padding: 0,
          enterable: true,
          transitionDuration: 1,
          textStyle: {
            color: '#000',
            decoration: 'none',
          },
          formatter: function(params) {
            let data = [0,0,0]
            if(params.data){
              data = params.data.value
            }
            let tipHtml = '';
            tipHtml = '<div style="width:280px;height:180px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">'
            + '<div style="width:100%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 20px;box-sizing:border-box;">' + '<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:40px;">' + '</i>'
            + '<span style="margin-left:10px;color:#fff;font-size:16px;">' + params.name + '</span>' + '</div>'
            + '<div style="padding:20px">'
            + '<p style="color:#fff;font-size:12px;">' + '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' + '</i>'
            + '时长：' + '<span style="color:#11ee7d;margin:0 6px;">' + data[0] + '</span>' + 'hour' + '</p>'
            + '</div>' + '</div>';
            // setTimeout(() => {
            //   tooltipCharts();
            // }, 10);
            return tipHtml;
          }
        },
        visualMap: {
          min: 0,
          max: 500,
          left: 'left',
          top: 'bottom',
          text: ['高','低'],
          color:'#fff',
          dimension:0,
          inRange: {
            color: ['#fff', 'red']
          },
          show:true
        },
        geo: {
          map: '黑龙江',
          roam: false,
          zoom:1.23,
          label: {
            normal: {
              show: true,
              fontSize:'10',
              color: 'rgba(0,0,0,0.7)',
              position: ['50%', '50%']
            }
          },
          itemStyle: {
            normal:{
              borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis:{
              areaColor: '#F3B329',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series : [
          {
            name: '足迹',
            type: 'map',
            geoIndex: 0,
            data:[
              {name:"大庆市",value:"300"}]
          }
        ]
      };
      myChart.setOption(option);
    }
  },
};
</script>

<style scoped>
.part-two {
  width: 100%;
  height: 500px;
  border: 15px solid transparent;
  border-image: url("../../assets/images/resume/border_image.png") 30 30 stretch;
  background: #18202d;
}
#map{
  width:100%;
  height: 400px;
}
</style>