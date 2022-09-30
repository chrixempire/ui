<template>
    <Header>
        <h1>{{ title }}</h1>
        <addButton v-show="homepage" :text="showTask ? 'close' : 'Add Task' " :color="showTask ? 'red' : 'green' "  class="btn" @show-task="$emit('toggleTask')"/>
    </Header>
</template>

<script>
import addButton from './addButton.vue';



export default {
   name:"headerLayout",
   props: {
    title : {
        type : String,
    },
    showTask:{
        type: Boolean
    }
   },
   components:{
    addButton,
   },
   computed:{
    homepage(){
        if(this.$route.path === '/'){
            return true
        }else {
            return false
        }
    }
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