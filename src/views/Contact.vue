<template>
  <div id="Contact">
    <h1>CONTACT</h1>
    <div class="container">
     <div class="row">
      <div class="col">
        <div class="form">
    <form action="https://formspree.io/f/mpzbvyrb" method="POST">
    <input class="input" type="text" name="name" placeholder="name..." required>
    <input class="input" type="email" name="email" placeholder="email..." required>
    <textarea class="input" name="message" placeholder="message" required></textarea>
    <button type="submit">Send</button>
    </form>
        </div>
      </div>
      <div class="col">
        <div class="location">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13233.069675818386!2d18.4926986!3d-33.9856643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1658535879974!5m2!1sen!2sza" width="400" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
     </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#Contact{
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
  background: white;
  border-radius: 10px;
  height: 70vh;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1{
  font-size: 4rem;
  color: white;
  font-family: 'alfa slab one';
  letter-spacing: 1px;
}
.row{
  display: flex;
  gap: 10px;
}
.col{
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  background: black;
  border-radius: 10px;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

}
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.input{
  width: 300px;
  height: 40px;
  border-radius: 10px;
  
}

form button{
  width: 300px;
  height: 40px;
  border-radius: 10px;
}
@media (min-width: 300px) and (max-width: 1026px) {
.col{
  width: 350px;
}
iframe{
  width: 350px;
}
}
@media (min-width: 300px) and (max-width: 910px) {
  /* .container{
    width: 50vw;
    height: 55vh;
  } */
.row{
  display: flex;
  flex-direction: column;
}
.col{
  height: 250px;
}
iframe{
  height: 250px;
}
}
@media (min-width: 250px) and (max-width: 706px) {
  h1{
    font-size: 3rem;
  }
  .container{
   height: 75vh;
  }

form button{
  width: 180px;
  height: 25px;
  border-radius: 3px;
}
}
@media (min-width: 300px) and (max-width: 444px) {
.col{
  width: 200px;
} 
iframe{
  width: 200px;
} 
.input{
  width: 180px;
  height: 25px;
  border-radius: 3px;
}
}
@media (min-width: 200px) and (max-width: 300px) {
  h1{
    font-size: 2rem;
  }
.col{
  width: 100px;
} 
iframe{
  width: 100px;
} 
.input{
  width: 80px;
  height: 25px;
  border-radius: 3px;
}
form button{
  width: 80px;
  height: 25px;
  border-radius: 3px;
}
}

</style>