<template>
<h1>Project Page</h1>
 <div class="projects">
    <div v-for="project in projects" :key="project.id">
<div class="project">
    <router-link :to="{name: 'ProjectDetails', params: {id: project.id}}">
    <p>{{ project.title}}</p>
</router-link>
</div>
      </div>
 </div>
</template>



<style>
.projects{
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
}
.project{
    border: 1px solid black;
    height: 50vh;
    width: 40vw;
}

</style>
<script>
export default {
  data(){
    return {
       projects: [
      {
        id: 1,
        title: "HTML",
        description: ""
      },
        {
        id: 2,
        title: "CSS",
         description: ""
      },
        {
        id: 3,
        title: "JAVASCRIPT",
         description: ""
      },
        {
        id: 4,
        title: "VUE",
         description: ""
      }
     
    ]
    }
  }
}
</script>