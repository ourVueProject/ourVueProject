<template>
 <div class="carousel-wrap" id="carousel">
     <transition-group tag="ul" class="slide-ul" name="list">
         <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
             <a :href="list.clickUrl">
                 <img :src="'/static/'+list.bannerimg" alt="">
             </a>
         </li>
     </transition-group>
     <div class="carousel-items">
        <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
    </div>
 </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            slideList:[],
            currentIndex: 0,
            timer: ''
        }
    },
    methods: {
        getslideList() {
            let self = this;
            axios.get('/slideList').then(function(response) {
                //console.log(response.data.data);
                self.slideList = response.data.data;
            })
        },
        go() {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 4000)
        },
        stop() {
            clearInterval(this.timer)
            this.timer = null
        },
        change(index) {
            this.currentIndex = index
        },
        autoPlay() {
            this.currentIndex++
            if (this.currentIndex > this.slideList.length - 1) {
                this.currentIndex = 0
            }
        }
    },
    mounted () {
        this.getslideList();
    },
    created() {
     this.$nextTick(() => {
       this.timer = setInterval(() => {
         this.autoPlay()
       }, 4000)
     })
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .carousel-wrap {
        height: 453px;
        width: 100%;
        overflow: hidden;
        background-color: #fff;
    }
    .slide-ul {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .slide-ul li {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    img {
        width: 100%;
        height: 100%;
    }
    .carousel-items {
      position: absolute;
      z-index: 10;
      top: 380px;
      width: 100%;
      margin: 0 auto;
      text-align: center;
      font-size: 0;
    }

    .carousel-items span {
      display: inline-block;
      height: 6px;
      width: 30px;
      margin: 0 3px;
      background-color: #b2b2b2;
      cursor: pointer;
    }
    .carousel-items .active {
      background-color: orange;
    }
    .list-enter-to {
      transition: all 1s ease;
      transform: translateX(0);
    }
    .list-leave-active {
      transition: all 1s ease;
      transform: translateX(-100%)
    }

    .list-enter {
      transform: translateX(100%)
    }

    .list-leave {
      transform: translateX(0)
    }
</style>
