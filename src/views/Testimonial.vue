<template>
  <div id="Testimonial">
    <h1>TESTIMONIALS</h1>
    <div class="testimonials">
       <div class="testimonial" v-for="testimonial in testimonials" :key="testimonial.id">
    <div class="testimonial-image">
       <img  v-bind:src="testimonial.image">
    </div>
   <div class="testimonial-text">
     <p>{{ testimonial.fullName}}</p>
    <p>{{ testimonial.message}}</p>
   </div>
      </div>
    </div>
     
  </div>
</template>

<script>
export default {
 data(){
    return {
       testimonials: [
     {
      id: 1,
      fullName: "Jason Wandrag",
      image: "https://i.postimg.cc/wxCmMHvV/jason.jpg",
      message: "Zachary is the epitome of a curious mind. He has an ability to absorb a vast amount of information and apply concepts with a high degree of understanding. In addition to that, Zachary has quickly become a pillar of support amongst his peers, who all respect the value that he brings to the room. I have no doubt that Zachary will be a force to be reckoned with in the tech space."
     },
     {
      id: 2,
      fullName: "Sunethia Lawrence",
      image: "https://i.postimg.cc/qMFZzNKF/Sunethia-4.jpg",
      message: "Zachary is one of a kind, always willing to help and always gives his utmost best at his work. He is hardworking and always strives to do better."
     },
     {
      id: 3,
      fullName: "Cameron Tamboer",
      image: "https://i.postimg.cc/3r4G3WKN/Cameron-5.jpg",
      message: "Zachary Williams is a very competent individual, he strives higher than what he is capable of doing. His passion for his work preference is outstanding and he is a headstrong and smart working person"
     },
     {
      id: 4,
      fullName: "Chanique Mansoor",
      image: "https://i.postimg.cc/59nrW72b/Chanique-1.jpg",
      message: "Zachary is very straightforward and loves helping where he can, he tends to put others above himself and I think he will be great attribute in any working environment."
     },
     {
      id: 5,
      fullName: "Mziyanda Tobo",
      image: "https://i.postimg.cc/s2d64bw9/Mziyanda-3.jpg",
      message: "Zachary Williams is very consistent and hard-working young man. He is very advanced and that shows in his work. I would highly recommend Zachary to any team or company as he is an impressive asset and addition."
     }
     
    ]
    }
}
}
</script>

<style scoped>
#Testimonial{
  height: 92vh;
  background-image: url(../assets/mike-ko-tjod6u2RpiU-unsplash.jpg);
  background-size: cover;
}
.testimonial-image img{
  height: 200px;
  width: 200px;
  border-radius: 10px;
}
.testimonial-text{
   border: 1px solid black;
   width: 50%;
}
.testimonial{
  box-shadow: 5px 5px 5px 5px lightgrey;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 40%;
  
}

.testimonials{
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  
}
</style>>
