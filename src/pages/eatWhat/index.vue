<!--
 * @Author:aaron
 * @Date: 2019-12-22 11:32:31
 * @LastEditTime : 2019-12-26 17:23:17
 * @LastEditors  : Please set LastEditors
 * @Description: 今晚吃啥首页
 * @FilePath: /shiyi_website/src/pages/eatWhat/index.vue
 -->
<template>
  <div class="container is-fuild">
    <b-steps :animated="true" icon-prev="arrow-left" icon-next="arrow-right" v-model="activeStep">
      <b-step-item label="确定吃饭人数" icon="account-multiple-check" columns>
        <section class="column is-6 has-text-centered is-offset-3">
          <div class="block">
            <p class="content">
              <b>今天晚上几个人吃?</b>
            </p>
            <b-radio
              v-model="peopleNum"
              name="people"
              :native-value="item"
              v-for="(item,index) in peopleData"
              :key="index"
            >{{item}}人</b-radio>
          </div>
          <p class="content">
            <b>吃饭人数确定:</b>
            {{ peopleNum }}人
          </p>
          <b-field class="column is-6 has-text-centered is-offset-3">
            <b-input
              v-model="customizeNum"
              @input="finalNum"
              required
              validation-message="选好人数啊"
              placeholder="我要自己输入吃饭人数"
            ></b-input>
          </b-field>
        </section>
      </b-step-item>
      <b-step-item label="确定主食" icon="rice">
        <section class="column is-6 has-text-centered is-offset-3">
          <div class="block">
            <p class="content">
              <b>主食吃啥？</b>
            </p>
            <b-radio
              v-model="stapleFood"
              name="foods"
              :native-value="item"
              v-for="(item,index) in stapleFoodData"
              :key="index"
            >{{item}}</b-radio>
          </div>
          <p class="content">
            <b>主食确定:</b>
            {{ stapleFood }}
          </p>
          <b-button type="is-success" @click="randStapleFood">随机主食</b-button>
        </section>
      </b-step-item>
      <b-step-item label="确定菜品" icon="food">
        <section class="column is-8 has-text-centered is-offset-2">
          <div class="block">
            <p class="content">
              <b>吃啥菜？</b>
            </p>
            <b-checkbox
              v-model="dishesGroup"
              :native-value="item"
              v-for="(item,index) in dishesData"
              :key="index"
            >{{item.name}}</b-checkbox>
          </div>
          <p class="content">
            <b>菜品确定:</b>
            <b v-for="(item,index) in dishesGroup" :key="index">【{{ item.name }}】</b>
          </p>
          <div class="columns is-2">
            <div class="column is-6">
              <b-button type="is-success" @click="randDishesGroup('平常')">随机菜品</b-button>
            </div>
            <div class="column is-6">
              <b-button type="is-success" @click="randDishesGroup">吃点好的</b-button>
            </div>
          </div>
        </section>
        <b-button size="is-large" type="is-info" @click="activeStep=3">选好了！生成菜单</b-button>
      </b-step-item>
      <b-step-item label="生成菜单" icon="silverware">
        <section>
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left"></div>
                <div class="media-content">
                  <p class="title is-6">晚餐菜单</p>
                </div>
              </div>
              <div class="content">
                <p>人数：{{peopleNum}}</p>
                <p>主食：{{stapleFood}}</p>
                <p>
                  菜品：
                  <b v-for="(item,index) in dishesGroup" :key="index">【{{ item.name }}】</b>
                </p>
                <p>
                  食材：
                  <b v-for="(item,index) in needTypes" :key="index">| {{ item }} |</b>
                </p>
                <a>@设置邮件提醒</a>
                <br />
                <small>{{date}}</small>
              </div>
            </div>
          </div>
        </section>
      </b-step-item>
    </b-steps>
    <b-button size="is-large" type="is-danger" @click="randAll">不选了随机来一份！</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      peopleData: ['4', '5', '6'],
      stapleFoodData: ['米饭', '手抓饼', '馒头', '馅饼'],
      peopleNum: '6',
      customizeNum: '',
      stapleFood: '',
      clickCount: 0,
      dishesGroup: [],
      activeStep: 0,
      date: new Date().toISOString().substr(0, 10),
      dishesData: [
        {
          name: '炖排骨',
          type: ['荤菜', '硬菜'],
          chef: 'amy',
          needs: ['猪排骨', '土豆', '玉米']
        },
        { name: '清蒸鱼', type: ['荤菜', '硬菜'], chef: 'amy', needs: ['鱼'] },
        {
          name: '宫保大虾',
          type: ['荤菜', '硬菜'],
          chef: 'aaron',
          needs: ['虾仁', '豆瓣酱']
        },
        {
          name: '辣炒花蛤',
          type: ['荤菜', '硬菜'],
          chef: 'amy',
          needs: ['花蛤']
        },
        {
          name: '白菜肥牛',
          type: ['荤菜', '平常'],
          chef: 'alice',
          needs: ['大白菜', '肥牛卷']
        },
        {
          name: '蒜蓉粉丝娃娃菜',
          type: ['素菜', '平常'],
          chef: 'aaron',
          needs: ['粉丝', '娃娃菜']
        },
        {
          name: '醋溜白菜',
          type: ['素菜', '平常'],
          chef: 'amy',
          needs: ['大白菜']
        },
        {
          name: '清炒菜心',
          type: ['素菜', '平常'],
          chef: 'amy',
          needs: ['菜心']
        },
        {
          name: '洋葱炒鸡蛋',
          type: ['素菜', '平常'],
          chef: 'aaron',
          needs: ['洋葱', '鸡蛋']
        },
        {
          name: '洋葱炒肉',
          type: ['荤菜', '平常'],
          chef: 'aaron',
          needs: ['洋葱', '猪肉']
        },
        {
          name: '尖椒炒肉',
          type: ['荤菜', '平常'],
          chef: 'aaron',
          needs: ['尖椒', '猪肉']
        },
        {
          name: '虎皮辣椒',
          type: ['素菜', '平常'],
          chef: 'aaron',
          needs: ['尖椒']
        },
        {
          name: '柿子炒鸡蛋',
          type: ['素菜', '平常'],
          chef: 'aaron',
          needs: ['西红柿', '鸡蛋']
        },
        {
          name: '火山飘雪',
          type: ['凉菜', '平常'],
          chef: 'amber',
          needs: ['西红柿', '白糖']
        },
        {
          name: '凉拌生菜',
          type: ['凉菜', '平常'],
          chef: 'amber',
          needs: ['凉拌汁', '生菜']
        },
        {
          name: '凉拌菠菜',
          type: ['凉菜', '平常'],
          chef: 'amber',
          needs: ['凉拌汁', '菠菜']
        }
      ]
    }
  },
  computed: {
    needTypes() {
      let result = []
      result = this.dishesGroup.map(item => {
        return item.needs
      })
      return result.flat()
    }
  },
  methods: {
    finalNum() {
      this.peopleNum = this.customizeNum
    },
    randStapleFood() {
      this.stapleFood = this.rand(this.stapleFoodData)
    },
    randDishesGroup(type) {
      this.clickCount += 1
      if (this.clickCount > 4) {
        this.$buefy.dialog.confirm({
          title: '是不是自己不想做了',
          message: `你可以：订外卖 煮方便面 出去吃火锅`,
          cancelText: '不，我就自己做',
          confirmText: '好主意',
          type: 'is-danger',
          onCancel: () => this.clickCount = 0,
          onConfirm: () => this.$buefy.toast.open('开心～')
        })
        return
      }
      this.dishesGroup = []
      let filterDishes = this.dishesData
      if (type === '平常') {
        filterDishes = this.dishesData.filter(item => {
          return item.type.indexOf(type) !== -1
        })
      }
      while (this.dishesGroup.length < 4) {
        let result = this.rand(filterDishes)
        if (this.dishesGroup.indexOf(result) === -1) {
          this.dishesGroup.push(result)
        }
        let delIndex = []
        this.dishesGroup.forEach((item, index) => {
          if (item.type[0] === '凉菜') {
            delIndex.push(index)
          }
        })
        if (delIndex.length > 1) {
          this.dishesGroup.splice(delIndex[delIndex.length - 1], 1)
        }
      }
    },
    rand(arr) {
      let randIndex = Math.floor(Math.random() * arr.length)
      return arr[randIndex]
    },
    randAll() {
      this.randStapleFood()
      this.randDishesGroup()
      this.activeStep = 3
    }
  }
}
</script>