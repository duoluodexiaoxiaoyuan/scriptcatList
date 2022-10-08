<template>
  <!--  组件的结构 -->
  <div class="demo">
    {{schoolName}}
  </div>
</template>

<script>
  // 组件交互相关的代码(数据，方法等等)
  //  
  // 统一暴露
  // export {school}

  // 默认暴露
  // export default school 

  // 最终写法
  // export default Vue.extend({
  //   data(){
  //     return {
  //       schoolName:"家里蹲"
  //     }
  //   }
  // })

  // 终结写法，Vue.extend可以省略
   export default {
    name: "School",   // 组件名, 现在我们只是创建了组件，用的时候还要注册该组件 
    data(){
      return {
        schoolName:"家里蹲"
      }
    }
  }
</script>

<style>
  /*  组件的样式 */
  .demo {
    background-color: skyblue ;
  }
</style>