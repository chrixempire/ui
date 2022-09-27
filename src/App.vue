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
    async addNewTask(newtask){
      const res = await fetch('http://localhost:5000/tasks',{
        method: 'POST',
        headers:{
          'content-type': 'application/json',
         
        },
        body: JSON.stringify(newtask)
      })

      const data = await res.json()
      this.tasks.push(data)
    },
    delTasks(id){
      if(confirm('Are you Sure?')){
        this.tasks = this.tasks.filter( task => task.id !== id)
      }
     
    },
    compTask(id){
      console.log(id)
      this.tasks = this.tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task)

    },
    toggleAdd(){
      this.showTask = !this.showTask
    },
    async fetchTasks(){
      const res = await fetch('http://localhost:5000/tasks')
      
      const data = await res.json()

      return data
    }
 
  },
  async created(){
    this.tasks = this.fetchTasks()
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
