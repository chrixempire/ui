<template>
    <div v-for="task in tasks" :key="task.id" >
      <taskItem :task = "task" @onClick="deleteTask($event)" @tasked="completed(task.id)" />
    </div>
</template>

<script>
    import taskItem from './taskItem.vue'
export default {
    components:{
        taskItem
    },
    name: "mainTask",
    props:['tasks'],
 
    methods:{
        deleteTask(id){
            console.log(id)
            this.$emit('del-Task', id)
        },
        completed(id){
            console.log(id);
            this.$emit("completeTask", id)
        }
    }

}
</script>