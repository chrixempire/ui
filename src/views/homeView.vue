<template>
     <div v-show="showTask">
    <addTask @add-Tasks="addNewTask"/>
  </div>
  <mainTask :tasks="tasks" @del-Task="delTasks($event)" @completeTask="compTask($event)"  />
  <p v-show="this.tasks.length === 0">Add New Tasks..</p>
</template>

<script>
import mainTask from '../components/mainTask'
import addTask from '../components/addTask'
import axios from 'axios'
export default {
   name: "homeView",
   components:{
    mainTask,
    addTask
   },
   props: {
    showTask: Boolean
   },
   data(){
    return{
        tasks: []
    }
   },
   methods:{
     addNewTask(newTask){
      const{text, day, reminder} = newTask

      axios.post('api/tasks',{
        text,
        day,
        reminder
      }).then (res => this.tasks = [...this.tasks, res.data])
      .catch(err => console.log(err))
    },
    async delTasks(id){
  if(confirm('Are you Sure?')){
    const res = await fetch(`api/tasks/${id}`,
        {
          method:'DELETE'
        })
        res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error deleting task')
      
  }
       
      

     
    },
    async compTask(id){
      const taskToggle = await this.fetchTask(id)
      const updTask = {...taskToggle, reminder: !taskToggle.reminder}

      const res = await fetch(`api/tasks/${id}`,{
        method: 'PUT',
        headers:{
          'content-type' : 'application/json'
        },
        body : JSON.stringify(updTask)
      })
      const data = await res.json()
      console.log(id)
      this.tasks = this.tasks.map((task)=> task.id === id ? {...task, reminder: data.reminder} : task)

    },
    async fetchTasks(){
      const res = await fetch('api/tasks')
      const data = await res.json()

      return data
    },
  
    async fetchTask(id){
      const res = await fetch(`api/tasks/${id}`)
      const data = await res.json()

      return data
    }
  
 
  },
   created(){

    axios.get('api/tasks').then(res => this.tasks = res.data)
    .catch(err => console.log(err))
    // this.tasks = await this.fetchTasks()
  }

}
</script>

<style scoped>
p{
    color: red;
}
</style>