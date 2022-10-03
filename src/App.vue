<template>
<div class="container">
  <headerLayout title="Task Tracker" @toggleTask="toggleAdd" :showTask = "showTask"/>
 
  <router-view :showTask="showTask"/>
  <footerTask></footerTask>
</div>
</template>

<script>
import headerLayout from './components/headerLayout'
import footerTask from './components/footerTask'

export default {
  name: 'App',
  components: {
    headerLayout,
    footerTask
  },
  data(){
    return{
      showTask: false
    }
    
  },
  methods: {
    toggleAdd(){
      this.showTask = !this.showTask
    }
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

  margin: auto;
}
.container {
  max-width: 500px;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  margin: auto;
  /* margin: 30px 10px; */
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


@media screen and (max-width:600px) {
  .container{
    padding: 20px;
  }
  
}
</style>
