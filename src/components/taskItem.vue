<template>
    <div @click="$emit('tasked', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>{{task.text}}
            <span class="material-symbols-outlined fas" @click="$emit('onClick', task.id)" >
delete
</span></h3>
        <p>{{task.day}}</p>
        
    </div>
</template>
<script>
export default {
   name:"taskItem",
   props:{
    task: Object,
   },
   data(){
    return{
      completed : this.task.reminder
    }
   },
   emits: ['onClick', 'tasked'],
   methods:{
   
   }
}
</script>

<style scoped>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 20px;
  cursor: pointer;
  /* border: 1px solid red; */
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
}

</style>