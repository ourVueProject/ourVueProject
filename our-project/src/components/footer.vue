<template lang="pug">
    .foot
        .displayflex
            span 版权信息
            span 联系我们
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.displayflex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.foot {
    width:100%;
    background:#393939;
    padding:40px 0;
    color:#fff;
}
</style>
