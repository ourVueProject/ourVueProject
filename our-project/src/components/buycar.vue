<template>
 <div class="buycar-warrp-border displayflex">
     <div class="buycar-item" v-for="item in carList">
        <img v-bind:src="'/static/'+item.prodcutImg" alt="">
		<p class="car-name">{{item.productName}}<br><span>{{item.productTit}}</span></p>
		<span class="car-money">{{item.prodcutPrice}}</span>
		<span class="disable">{{item.prodcutTwo}}</span>
		<div class="apply-btn">
			立即申请
		</div>
     </div>
 </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return{
            carList:[]
        }
    },
    mounted () {
        this.getcarlist();
    },
    methods:{
        getcarlist() {
            // this 指针漂移，this指的是自己本身，而不是全局
            let self = this;
            axios.get('https://easy-mock.com/mock/5a5dbbddd467601e4b7f2fb6/example/result').then((response) => {
                console.log(response.data);
                self.carList = response.data.result;
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .buycar-warrp-border {
        .buycar-item {
            width: 390px;
            height: 380px;
            border: 1px solid #d6d6d6;
        }
    }
    .displayflex {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
    }
</style>
