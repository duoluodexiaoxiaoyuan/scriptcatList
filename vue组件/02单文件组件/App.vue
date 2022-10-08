<template>
  <div>
    <!-- <School></School>
    <Student></Student> -->
    <!-- 在脚手架里面下面这样写也行 -->
    <School/>
    <Student/>
  </div>
</template>


<script>
  // 引入组件
  import School from './School.vue';
  import Student from './Student.vue'
  //  export default {
  //     name:'App',
  //     components:{
  //       School:School,
  //       Student:Student
  //     }

  //  }
   export default {
      name:'App',
      components:{
        School,
        Student
      }

   }
</script>