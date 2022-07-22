<template>
<div id="Projects">
  <h1>PROJECTS</h1>
<div v-for="project in projects" :key="project" :project="project">
  <div class="projectCard">
    {{ project.title }}
  <img v-bind:src="project.image"/>
  </div>
</div>
</div>
</template>



<style>
#Projects{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    /* background-image: url(../assets/mike-ko-tjod6u2RpiU-unsplash.jpg);
  background-size: cover; */
}
.project{
     border-radius: 10px;
    height: 70vh;
    width: 40vw;
    box-shadow: 5px 5px 5px 5px lightgray;
}
.project a{
  text-decoration: none;
  font-size: 2rem;
  color: black;
}
img{
  width: 500px;
  height: 300px;
  border-radius: 10px;
}
.projectCard{
  border: 1px solid black;
  width: 520px;
  height: 400px;
  padding: 5px;
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
        image:"https://i.postimg.cc/fRyhXyMd/portfolio.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat sagittis justo, vel sagittis est pellentesque vitae."
      },
        {
        id: 2,
        title: "Restaurantly",
        image: "https://i.postimg.cc/6pPxhKQm/res.jpg",
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat sagittis justo, vel sagittis est pellentesque vitae."
      }
    ]
    }
  }
}
</script>