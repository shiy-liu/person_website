<template>
  <div class="feedBack">
    <button class="button is-medium is-primary" @click="comment">{{$t('comment')}}</button>
   <div class="cont" id="cont"></div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  data() {
    return {
      messages:[]
    }
  },
  mounted(){
    this.getContent()
  },
  methods: {
    async getContent(){
      let res = await this.$request.fetch('/api/feedback/content')
      this.messages = res.data.result
      if(res.data.status === '200'){this.init()}
    },
    init() {
      let cont = document.getElementById("cont");
      cont.innerHTML = "";
      for (let i = 0; i < this.messages.length; i++) {
        let divObj = document.createElement("div");
        cont.appendChild(divObj);
        divObj.className = "tip";
        divObj.innerHTML = "<div class='tit'>第[" + (i + 1) + "]条" + moment(this.messages[i].time).locale('zh-cn').format('MMMM Do YYYY, h:mm:ss a') + "</div>\
        <div class='close1'>X</div>\
        <div class='sm_cont'>" + this.messages[i].content + "</div>\<div class='abc'>" + this.messages[i].name + "</div>\
        ";
        divObj.style.left = parseInt(Math.random() * 542) + "px";
        divObj.style.top = parseInt(Math.random() * 432) + "px";
      }
      let zIndex = 0;
      let tips = document.getElementsByClassName("tip");
      for (let i = 0; i < tips.length; i++) {
        tips[i].onclick = function() {
          zIndex++;
          this.style.zIndex = zIndex;
        }
      }
    },
    comment() {
      this.$buefy.dialog.prompt({
        message: `留言`,
        inputAttrs: {
          placeholder: '说点什么吧...',
          type: 'text',
          maxlength:"200"
        },
        cancelText: '取消',
        confirmText: '确定',
        trapFocus: true,
        onConfirm: (value) =>{
          let next = this.messages.length + 1
          let contInfo = {
            "id": next,
            "name": "匿名",
            "content": value,
            "time": new Date()
          }
          if(value === ''){
            this.$buefy.toast.open(`不能留空啊～`)
            return
          }
          this.$request.fetch('/api/feedback/content',{contInfo},'post')
          this.getContent()
          this.$buefy.toast.open(`来找找你的留言～`)
        }
      })
    }
  },
}
</script>
 <style >
.feedBack {
  background: url('../../assets/images/feedBack/qiangti.jpg') repeat;
  font-size: 12px;
}
.feedBack .cont {
  width: 900px;
  height: 650px;
  background: url('../../assets/images/feedBack/content.jpg') no-repeat;
  margin: 0 auto;
  position: relative;
}
.feedBack .tip {
  width: 227px;
  height: 241px;
  position: absolute;
}
.feedBack .tit {
  width: 227px;
  height: 63px;
  background-color: royalblue;
  float: left;
  padding: 5px;
  background: url('../../assets/images/feedBack/yetou.jpg');
}
.feedBack .sm_cont {
  clear: both;
  width: 227px;
  height: 100px;
  background-color: #eee;
  padding: 20px;
}
 .abc {
  width: 227px;
  height: 73px;
  background-color: gold;
  padding: 5px;
  background: url('../../assets/images/feedBack/yejiao.jpg');
} 
.feedBack .close1 {
  width: 17px;
  height: 10px;
  font-size: 16px;
  color: red;
  position: absolute;
  top: 0%;
  right: 0%;
  cursor: pointer;
}
    </style>