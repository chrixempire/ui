<template>
    <Header>
        <h1>{{ title }}</h1>
        <addButton text="Add Task" color="green" class="btn"/>
    </Header>
</template>

<script>
import addButton from './addButton.vue';



export default {
   name:"headerLayout",
   props: {
    title : {
        type : String,
    }
   },
   components:{
    addButton,
   }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>