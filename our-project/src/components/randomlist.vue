<template>
    <transition name="fade">
      <div class="randomlist">

              <div class="list-item" v-for="item in randoms">
                  <router-link :to="{ name: 'randomdetail', params: {id: item.randomid} }">
                      <h4 class="tit">{{item.randomtit}}</h4>
                      <p class="cont">{{item.randomcont}}</p>
                </router-link>
              </div>

          <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
              <!-- <span >加载中</span> -->
              <i v-show="loading" class="el-icon-loading icon-size"></i>
          </div>
      </div>
  </transition>
</template>

<script>
//import { mapState } from 'vuex'
import axios from 'axios'

export default {
  data () {
    return {
        busy: false,
        loading: false,
        page:1,
        pagesize:5,
        randoms:[]
    }
 },
 methods: {
    getnewslist() {
        let newinfo = {
            page:this.page,
            pagesize:this.pagesize
        };
        this.loading = true;
        let self = this;
        axios.get('/randoms',newinfo).then((response)=>{
            //console.log(response.data);
            self.randoms = response.data.todos;
        })
    },
    loadMore() {
        this.busy = true;
        setTimeout(() => {
          this.page++;
        }, 500);
    }
 },
 mounted(){
    this.getnewslist();
 }
// methods: {
//     removehead() {
//         this.$store.commit("headhide",true);
//     },
//     removefoot() {
//         this.$store.commit("foothide",true);
//     }
// },
// mounted () {
//   this.removehead();
//   this.removefoot();
// }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-item {
    width: 90%;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 6px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    background-color: white;
    height: auto;
    padding: 10px;
    border-radius: 5px;
    text-align: left;
    margin-bottom: 10px;
}
.tit {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #333;
}
.cont {
    margin-bottom: 8px;
    font-size: 13px;
    color:#9e9e9e;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    /* height: 25px; */
    line-height: 1.3;
}
.icon-size {
    font-size: 30px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
