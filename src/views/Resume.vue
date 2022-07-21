<template>
  <div id="Resume">
    <div class="container">
      <img class="profile-img" src="../assets/face.png"/>
      <div class="row">
        <div class="col">
        <div class="info-details">
          <h1>Biography</h1>
            <div class="info">
            <h3>Name</h3>
            <p>Zachary Williams</p>
          </div>
           <div class="info">
            <h3>Gender</h3>
            <p>Male</p>
          </div>
           <div class="info">
            <h3>Status</h3>
            <p>Single</p>
          </div>
           <div class="info">
            <h3>Date Of Birth</h3>
            <p>2000/09/26</p>
          </div>
           <div class="info">
            <h3>Nationality</h3>
            <p>South African</p>
          </div>
           <div class="info">
            <h3>Religion</h3>
            <p>Christian</p>
          </div>
        </div>
       <div class="info-details">
        <div class="edu">
          <h3>Matric</h3>
          <p>Matriculated at Melkbosstrand High School.</p>
        </div>
        <div class="edu">
          <h3>Studies</h3>
          <p>Started my studies at Code Space in February 2020, until National lockdown in March 2020. I further attended the online classes.</p>
        </div>
        <div class="edu">
          <h3>Self-Studies</h3>
          <p>In the year 2021,I completed short online courses,until my admission to Life Choices Academy in March 2022.</p>
        </div>
        <div class="edu">
          <h3>Present</h3>
          <p>In the year 2021,I completed short online courses,until my admission to Life Choices Academy in March 2022.</p>
        </div>
       </div>

        </div>
        <div class="col">
          <div class="skills-container">
            <h1>Skill</h1>
            <div class="skills">
              <div v-for="skill in skills" :key="skill.id">
              <p class="skill" >{{ skill.title}}</p>
            </div>
            </div>
        </div></div>
        <div class="col">
          <div class="info-details">
            <h1>Experience</h1>
            <div class="exp">
              <p>2018-2019</p>
              <h3>Delivery Driver</h3>
              <p>I worked as a delivery driver for Debonairs, Fish Away as well as Steers.</p>
            </div>
            <div class="exp">
              <p>2021</p>
              <h3>Self-Employed</h3>
              <p>As someone who is constantly online, i found a way to use that time in order to make some income. Sold computer hardware online.</p>
            </div>
          </div>
          <div class="info-detail">
            <h1>Socials</h1>
            <div class="socials">
              <i class="fa-solid fa-music"></i>
              <h3>LinkedIn</h3>
            </div>
            <div class="socials">
              <i class="fa-solid fa-music"></i>
              <h3>CodePen</h3>
            </div>
            <div class="socials">
              <i class="fa-solid fa-music"></i>
              <h3>Email</h3>
            </div>
            <div class="socials">
              <i class="fa-solid fa-music"></i>
              <h3>GitHub</h3>
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
.row{
  display: flex;

}
.col{
  border: 1px solid black;
  height: 100vh;
  width: 40vw;
}

.profile-img{
  border: 1px solid black;
  border-radius: 50%;
  padding: 20px;
  margin-bottom: -60px;
  z-index: 1;
}
.skills-container{
  border: 1px solid black;
  margin-top: 20%;
  margin-inline: 10px;
  height: 90vh;
}
.skill{
  border: 1px solid black;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.skills{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.info-details{
  border: 1px solid black;
  margin-top: 10px;
  margin-inline: 10px;
}
.info{
  display: flex;
  justify-content: space-between;
}
.socials{
  display: flex;
  border: 1px solid black;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  
}
.info-detail{
  border: 1px solid black;
  margin-top: 10px;
  margin-inline: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  justify-content: center;
  align-items: center;
}


</style>