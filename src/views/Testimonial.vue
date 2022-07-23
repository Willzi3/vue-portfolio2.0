<template>
  <div id="Testimonial">
    <h1>TESTIMONIALS</h1>
    <div class="container">
      <div class="row">
         <!-- <marquee> -->
        <div class="card" v-for="testimonial in testimonials" :key="testimonial.id" :testimonial="testimonial">
           <img class="image" v-bind:src="testimonial.image"/>
           <h2>{{ testimonial.fullName }}</h2>
            <p>{{ testimonial.message }}</p>
        </div>
      <!-- </marquee> -->
      </div>
     
    
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    testimonials: [
      {
        id: 1,
        fullName: "Jason Wandrag",
        image: "https://i.postimg.cc/mZVYRY84/jason.jpg",
        message:"Zachary is the epitome of a curious mind. He has an ability to absorb a vast amount of information and apply concepts with a high degree of understanding."
      },
       {
        id: 2,
        fullName: "Sunethia Lawrence",
        image: "https://i.postimg.cc/NFNm4t5F/Sunethia-4.jpg",
        message:"Zachary is one of a kind, always willing to help and always gives his utmost best at his work. He is hardworking and always strives to do better."
      },
       {
        id: 3,
        fullName: "Cameron Tamboer",
        image: "https://i.postimg.cc/ZqrNQpC1/Cameron-5.jpg",
        message:"Zachary Williams is a very competent individual, he strives higher than what he is capable of doing. His passion for his work preference is outstanding and he is a headstrong and smart working person"
      },
       {
        id: 4,
        fullName: "Chanique Mansoor",
        image: "https://i.postimg.cc/6QsRzY5r/Chanique-1.jpg",
        message:"Zachary is very straightforward and loves helping where he can, he tends to put others above himself and I think he will be great attribute in any working environment."
      },
       {
        id: 5,
        fullName: "Mziyanda Tobo",
        image: "https://i.postimg.cc/zB8hYvh3/Mziyanda-3.jpg",
        message:"Zachary Williams is very consistent and hard-working young man. He is very advanced and that shows in his work. I would highly recommend Zachary to any team or company."
      },
       {
        id: 6,
        fullName: "Yaseen Davids",
        image: "https://i.postimg.cc/c4RQ1w4h/Yasseen.jpg",
        message:"Zachary is a person that is driven by success and he always puts in the hardwork"
      },
    ]
  }
}
}
</script>

<style>
#Testimonial{
    height: 93vh;
    background-image: url(../assets/andrew-kliatskyi-jpu0gMXT9to-unsplash.jpg);
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   
}
.container{
  height: 70vh;
  width: 70vw;
  background:  rgb(33 37 41);;
   border-radius: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
}
h1{
  font-size: 4rem;
  color: white;
  font-family: "alfa slab one";
  letter-spacing: 1px;
}
h2{
  color: white;
}
p{
  color: white;
}

.image{
  width: 150px;
  height: 150px;
}
.card{
  border: 1px solid white;
  width: 300px;
  height: 300px;
}
.row{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

</style>