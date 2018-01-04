<template>
 <div class="index">
     <transition-group tag="ul" class="displayflex">
         <li v-for="(list,index) in slideList" :key="index">
             <a :href="list.clickUrl">
                 <img :src="'/static/'+list.bannerimg" alt="">
             </a>
         </li>
     </transition-group>
     <!-- <ul>
         <li>
             <a href="#">
                 <img src="" alt="">
             </a>
         </li>
     </ul> -->
     <span id="prve"><</span>
     <span id="next">></span>
 </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            slideList:[]
        }
    },
    methods: {
        getslideList() {
            let self = this;
            axios.get('/slideList').then(function(response) {
                console.log(response.data.data);
                self.slideList = response.data.data;
            })
        }
    },
    mounted () {
        this.getslideList();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .index {
        ul {
            width: 100%;
            height: 500px;
            overflow: hidden;
            li {
                width: 100%;
            }
        }
        .displayflex {
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
        }
        span {
            //color: white;
            cursor: pointer;
        }
    }

</style>
