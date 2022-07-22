<template>
  <section id="Resume">
        <div class="container bg-dark text-light shadow mb-5 p-5" data-aos="flip-up">
          <div class="title text-center">
            <h1>RESUME</h1>
          </div>
            <div class="timelines">
              <div class="row">
                <div class="col-md-6">
                  <div class="timeline education">
                    <h2 class="timeline-title">Education</h2>
                    <div class="timeline-items">
                           <div class="timeline-item">
                             <h3>Matric</h3>
                             <time datetime="2017/2019">2019</time>
                             <div class="location">Matriculated at Melkbosstrand High School.</div>
                           </div>
                           <div class="timeline-item">
                             <h3>Studies</h3>
                             <time datetime="2020">2020</time>
                             <div class="location">Started my studies at Code Space in February 2020, until National lockdown in March 2020. I further attended the online classes.</div>
                           </div>
                           <div class="timeline-item">
                             <h3>Self-Studies</h3>
                             <time datetime="2020">2021</time>
                             <div class="location">In the year 2021,I completed short online courses,until my admission to Life Choices Academy in March 2022.</div>
                           </div>
                           <div class="timeline-item">
                             <h3>Present</h3>
                             <time datetime="2020">2022</time>
                             <div class="location">Furthering my studies through Life Choices Academy.</div>
                           </div>
                         </div>
                       </div>
                </div>
                <div class="col-md-6">
                  <div class="timeline experience">
                    <h2 class="timeline-title">Experience</h2>
                    <div class="timeline-items">
                      <div class="timeline-item">
                        <h3>Delivery Driver</h3>
                        <time datetime="2018/2019">2018-2019</time>
                        <div class="location">I worked as a delivery driver for Debonairs, Fish Away as well as Steers.</div>
                      </div>
                      <div class="timeline-item">
                        <h3>Self-Employed</h3>
                        <time datetime="2019/2020">2019-2020</time>
                        <div class="location">As someone who is constantly online, i found a way to use that time in order to make some income. Sold computer hardware online.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
                
                     
                    </div>
      </section>
</template>

<style scoped>
#Resume{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
   background-image: url(../assets/mike-ko-tjod6u2RpiU-unsplash.jpg);
  background-size: cover;
}
.row{
  display: flex;
  gap: 20px;
}
.timeline-item{
  border: 1px solid black;
  border-radius: 10px;
  width: 500px;
  background: white;
  color: black;
  margin: 10px;
}
h1{
  font-size: 4rem;
  color: white;
}

h2{
  color: white;
}




</style>