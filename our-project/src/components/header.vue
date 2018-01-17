<template>
    <div class="head displayflex">
        <img src="../assets/logo.png">
        <div class="">
            <router-link :to="{ name: 'index', params: {} }">首页</router-link>
        </div>
        <div class="">
            <router-link :to="{ name: 'buycar', params: {} }">买车</router-link>
        </div>
        <div class="">
            <router-link :to="{ name: 'loan', params: {} }">贷款</router-link>
        </div>
        <div class="">
            <router-link :to="{ name: 'about', params: {} }">关于我们</router-link>
        </div>
        <div class="" @click="toregin">
            登陆／注册
        </div>
        <!-- <div class="model" v-show="loginModalFlag">
            <div class="model-padding">
                <input type="text"  name="" value="" placeholder="用户名">
                <input type="text"  name="" value="" @keyup.enter="login" placeholder="密码">
                <div class="">
                    <a href="javascript:;" class="" @click="login">登陆</a>
                </div>
            </div>

        </div> -->
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data (){
        return {
            loginModalFlag:false
        }
    },
    methods: {
        login() {
           //  if ("WebSocket" in window)
           //  {
           //     alert("您的浏览器支持 WebSocket!");
           // }
       },
       toregin(){
           this.$router.push('/regin')
       }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.head {
    width:100%;
    img {
        width:250px;
        height:55px;
    }
}
.displayflex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.model {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(153, 153, 153, 0.65);
    z-index: 9999;
}
.model-padding {
    padding: 22%;
}
</style>
