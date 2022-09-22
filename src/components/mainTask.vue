<template>
    <div v-for="task in tasks" :key="task.id" >
      <taskItem :task = "task" @onClick="deleteTask($event)" />
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
            console.log('delete')
            this.$emit('del-Task', id)
        }
    }

}
</script>