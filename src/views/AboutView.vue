<template>
  <div id="About">
    <img class="image" src="../assets/Zachary__2_-removebg-preview.png"/>
    <div class="flip-card">
    <div class="flip-card-inner">
    <div class="flip-card-front">
     <div class="about-intro">
       <h1>ABOUT ME</h1>
      <p>I like to describe myself as focused and dedicated. If I do something, I do it to the best of my abilities. If I do not know the answer to something, I won't just sit back and have the answer handed to me. I will make sure to find the answer.</p>
     </div>
      <div class="about-details">
        <div class="details">
          <h3>Full Name</h3>
          <p>Zachary Williams</p>
        </div>
        <div class="details">
          <h3>Date Of Birth</h3>
          <p>2000/09/26</p>
        </div>
        <div class="details">
          <h3>Address</h3>
          <p>Melkbosstrand</p>
        </div>
        <div class="details">
          <h3>Drivers</h3>
          <p>None</p>
        </div>
        <div class="details">
          <h3>Criminal Record</h3>
          <p>None</p>
        </div>
      </div>
    </div>
    <div class="flip-card-back">
      <h1>Skills</h1>
      <div class="skills">
        <div v-for="skill in skills" :key="skill.id">
        <router-link :to="{name: 'SkillDetails', params: {id: skill.id}}">
        <p class="skill">{{ skill.title}}</p>
        </router-link>
     
      </div>  
      </div>
      
</div>
    </div>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return {
       skills: [
      {
        id: 1,
        title: "HTML",
      },
        {
        id: 2,
        title: "CSS",
      },
        {
        id: 3,
        title: "JAVASCRIPT",
      },
        {
        id: 4,
        title: "VUE",
      },
        {
        id: 5,
        title: "NODE.JS",
      },
        {
        id: 6,
        title: "DATABASES",
      },
     
    ]
    }
  }
  
  
   
  }

  
</script>



<style scoped>
h1{
  font-family: "Alfa Slab One";
  font-size: 2.5rem;
}

#About{
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
   background-image: url(../assets/mike-ko-tjod6u2RpiU-unsplash.jpg);
  background-size: cover;
}
.image{
  margin-right: -180px;
  margin-top: -185px;
  height: 75vh;
}



/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 700px;
  height: 500px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
  border-radius: 10px;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
}

/* Style the back side */
.flip-card-back {
  background-color: gray;
  color: white;
  transform: rotateY(180deg);
  border-radius: 10px;
  
}
.skills{
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  align-items: center;
}

.about-details{

  margin-inline: 10%;
 
}
.about-intro{
  margin-inline: 10%;
    margin-bottom: 10px;
     margin-top: 16px;
     /* color: white; */
}
.about-intro p{
    font-weight: bold;
    font-size: 16px;
}
.details{
  display: flex;
  justify-content: space-between;
  /* color: white; */
}

.details p{
  font-weight: bold;
  font-size: 18px;
}


.skill {
  height: 140px;
  width: 140px;
  border-radius: 10px;
  background-color: white;
  
}
</style>
