<template>
    <transition name="fade">
      <div class="randomdetail">
          <!-- <div class="">
              {{$route.params.id}}
          </div> -->
          <div class="" v-for="item in randomit">
              <h4 class="tit">{{item.randomtit}}</h4>
              <p class="cont">{{item.randomcont}}</p>
          </div>
      </div>
    </transition>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
        randomit:[]
    }
 },
 methods: {
     getrandomdetail() {
         let self = this;
         let param = {
             id: this.$route.params.id
         };
         axios.post('/randomitem',param).then((response)=>{
                 console.log(response.data);
                 self.randomit = response.data;
         })
     }
 },
 mounted(){
     this.getrandomdetail()
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.tit {
    font-size: 18px;
    font-weight: bold;
}
.cont {
    text-align: left;
    text-indent: 2em;
    margin: 10px 0;
    line-height: 1.3;
}
</style>
