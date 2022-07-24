<template>
  <div id="Projects">
    <h1>PROJECTS</h1>
    <div class="container">
      <div class="card" v-for="project in projects" :key="project.id" :project="project">
          <div class="card-item">
              {{ project.title }}
            <img class="image" v-bind:src="project.image"/>
            <button><a :href="project.github">Github</a></button>
             <button><a :href="project.live">Live</a></button>
          </div>
          
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      projects : [
        {
          id: 1,
          title: "Restaurantly",
          image: "https://picsum.photos/id/1/200",
          github: "https://github.com/Willzi3/restaurantly.git",
          live:"https://willowy-hotteok-575d6b.netlify.app/"
        },
         {
          id: 2,
          title: "Portfolio",
          image: "https://picsum.photos/id/2/200",
           github: "https://github.com/Willzi3/Portfolio2.0.git",
          live:"https://celadon-pithivier-e1dd53.netlify.app/"
        },
         {
          id: 3,
          title: "Beautify",
          image: "https://picsum.photos/id/3/200",
           github: "https://github.com/Willzi3/Beautify.git",
          live:"https://vermillion-brioche-50acd1.netlify.app/"
        },
         {
          id: 4,
          title: "Tempreture converter",
          image: "https://picsum.photos/id/4/200",
          github: "https://github.com/Willzi3/tempreture-calculator.git",
          live:"https://loquacious-rabanadas-1e66a0.netlify.app/"
        },
         {
          id: 5,
          title: "Calculator",
          image: "https://picsum.photos/id/5/200",
           github: "https://github.com/Willzi3/Calculator.git",
          live:"https://tourmaline-starlight-d6ba80.netlify.app/"
        },
         {
          id: 6,
          title: "BmiCalculatpr",
          image: "https://picsum.photos/id/6/200",
           github: "https://github.com/Willzi3/bmi-calculator.git",
          live:"https://stirring-choux-ad5dd4.netlify.app/"
        }
      ]
    }
  }
}
</script>

<style>
#Projects{
  height: 100vh;
  background-image: url(../assets/andrew-kliatskyi-jpu0gMXT9to-unsplash.jpg);
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container{
  height: 98vh;
  width: 70vw;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.card{
  width: 300px;
  height: 300px;
  background: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h1{
  color: white;
  font-family: "alfa slab one";
  font-size: 4rem;
}
.image{
  border-radius: 10px;
  height: 150px;
  width: 150px;
 
}
.card{
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 260px;
  width: 240px;
}
.card-item{
  border: 1px solid white;
    display: flex;
  flex-direction: column;
  gap: 5px;
}
button{
  background: black;
  color: white;
  border-radius: 5px;
}
button a {
  text-decoration: none;
  color: white;
}
</style>