<template>

 <div class="projects">
  <h1>PROJECTS</h1>
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-image: url(../assets/mike-ko-tjod6u2RpiU-unsplash.jpg);
  background-size: cover;
}
.project{
     border-radius: 10px;
    height: 50vh;
    width: 40vw;
    box-shadow: 5px 5px 5px 5px lightgray;
}

</style>
<script>
export default {
  data(){
    return {
       projects: [
      {
        id: 1,
        title: "Portfolio",
        description: ""
      },
        {
        id: 2,
        title: "Restaurantly",
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