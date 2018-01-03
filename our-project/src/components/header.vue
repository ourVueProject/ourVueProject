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
    </div>
</template>

<script>
export default {}
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
</style>
