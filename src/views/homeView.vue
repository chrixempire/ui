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

      axios.post('http://localhost:5000/tasks',{
        text,
        day,
        reminder
      }).then (res => this.tasks.push(res.data))
      .catch(err => console.log(err))
    },
    delTasks(id){
      if(confirm('Are you sure?')){
             axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(res => this.tasks = this.tasks.filter(task => task.id !== id)).
      catch(err => console.log(err))
      }
    //   this.tasks = this.tasks.filter(task => task.id !== id)


     
    },
    async compTask(id){
      console.log(id)
      this.tasks = this.tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task)

    },

  
 
  },
   created(){

    axios.get('http://localhost:5000/tasks').then(res => this.tasks = res.data)
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