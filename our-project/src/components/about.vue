<template>
    <div class="">
        <el-row :gutter="20">
         <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
         <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
         <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
         <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
       </el-row>
       <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-row {
margin-bottom: 20px;
&:last-child {
  margin-bottom: 0;
}
}
.el-col {
border-radius: 4px;
}
.bg-purple-dark {
background: #99a9bf;
}
.bg-purple {
background: #d3dce6;
}
.bg-purple-light {
background: #e5e9f2;
}
.grid-content {
border-radius: 4px;
min-height: 36px;
}
.row-bg {
padding: 10px 0;
background-color: #f9fafc;
}
</style>
