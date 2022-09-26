<template>
<div class="container">
  <headerLayout title="Task Tracker"/>
  <mainTask :tasks="tasks" @del-Task="delTasks($event)" @completeTask="compTask($event)"  />
</div>
</template>

<script>
import headerLayout from './components/headerLayout'
import mainTask from './components/mainTask'
export default {
  name: 'App',
  components: {
    headerLayout,
    mainTask
  },
  data(){
    return{
      tasks : []
    }
    
  },
  methods:{
    delTasks(id){
      if(confirm('Are you Sure?')){
        this.tasks = this.tasks.filter( task => task.id !== id)
      }
     
    },
    compTask(id){
      console.log(id)
      console.log('what')
      this.tasks = this.tasks.map(()=> task.id === id ? {...task, reminder: !task.reminder}: task)
    }
 
  },
  created(){
    this.tasks = [
      {
      id: 1,
      text: "Doctor's Appointment",
      day: 'March 1st at 2:30pm',
      reminder: false
    },
      {
      id: 2,
      text: "Meeting at School",
      day: 'March 3rd at 1:30pm',
      reminder: true
    },
      {
      id: 3,
      text: "Food Shopping",
      day: 'March 5th at 2:00pm',
      reminder: false
    },
      {
      id: 4,
      text: "Write code",
      day: 'March 21st at 3:30pm',
      reminder: true
    },
  ]
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
