<template>
  <div class="resume">
    <div class="banner"></div>
    <div class="columns">
      <div class="column is-3 part" is-full-mobile>
        <part-one></part-one>
      </div>
      <div class="column is-6 part" is-full-mobile>
        <part-two></part-two>
      </div>
      <div class="column is-3 part" is-full-mobile>
        <part-three></part-three>
      </div>
    </div>
    <div class="columns">
      <div class="column is-4 part" is-full-mobile>
        <part-four></part-four>
      </div>
      <div class="column is-4 part" is-full-mobile>
        <part-five></part-five>
      </div>
      <div class="column is-2 part" is-full-mobile>
        <part-six></part-six>
      </div>
      <div class="column is-2 part" is-full-mobile>
        <part-seven></part-seven>
      </div>
    </div>
  </div>
</template>

<script>
import partOne from '@/components/resume/partOne.vue';
import partTwo from '@/components/resume/partTwo.vue';
import partThree from '@/components/resume/partThree.vue';
import partFour from '@/components/resume/partFour.vue';
import partFive from '@/components/resume/partFive.vue';
import partSix from '@/components/resume/partSix.vue';
import partSeven from '@/components/resume/partSeven.vue';
export default {
  data() {
    return {
      bannerImg: require('../../assets/images/resume/banner.png')
    }
  },
  components: {
    partOne,
    partTwo,
    partThree,
    partFour,
    partFive,
    partSix,
    partSeven
  },
  methods: {
  },
    
}
</script>

<style  scoped>
.resume {
  background: #011128;
  color: #fff;
}
.part {
  padding: 20px;
}
.banner{
  width: 100%;
  height: 80px;
}

@media screen and (min-width:100px){
  .banner{
    background-image: url('../../assets/images/resume/banner.png');
  }
}
/*屏幕宽度大于600，小于1000的时候*/
@media screen and (min-width:600px) and (max-width:1000px){
   .banner{
    background-image: url('../../assets/images/resume/banner_1000.png');
  }
}
/*屏幕宽度小于600的时候*/
@media screen and (max-width:600px){
 .banner{
    background-image:none;
  }
}
p {
  text-align: center;
}
</style>