<template>
<div class="container">
  <headerLayout title="Task Tracker" @toggleTask="toggleAdd" :showTask = "showTask"/>
  <div v-show="showTask">
    <addTask @add-Tasks="addNewTask"/>
  </div>
  <mainTask :tasks="tasks" @del-Task="delTasks($event)" @completeTask="compTask($event)"  />
</div>
</template>

<script>
import headerLayout from './components/headerLayout'
import mainTask from './components/mainTask'
import addTask from './components/addTask'
import axios from 'axios';
import { identifier } from '@babel/types';
export default {
  name: 'App',
  components: {
    headerLayout,
    mainTask,
    addTask
  },
  data(){
    return{
      tasks : [],
      showTask: false
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
      // axios.delete(`http://localhost:5000/tasks/${id}`)
      // .then(res => this.tasks = this.tasks.filter(task => task.id !== id)).
      // catch(err => console.log(err))
      this.tasks = this.tasks.filter(task => task.id !== id)
     
    },
    compTask(id){
      console.log(id)
      this.tasks = this.tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task)

    },
    toggleAdd(){
      this.showTask = !this.showTask
    },
  
 
  },
   created(){

    axios.get('http://localhost:5000/tasks').then(res => this.tasks = res.data)
    .catch(err => console.log(err))
    // this.tasks = await this.fetchTasks()
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
