<template>
  <div id="About">
     <div class="container">
        <div class="row">
            <div class="col">
                <img class="image" src="../assets/Zachary1.jpg" alt="">
            </div>
            <div class="col">
              <div class="about-text">
                <h2>ABOUT ME</h2>
                <p>I like to describe myself as focused and dedicated. If I do something, I do it to the best of my abilities. If I do not know the answer to something, I won't just sit back and have the answer handed to me. I will make sure to find the answer.</p>
                <div class="about-details">
                  <div class="details">
                    <h3>Full Name:</h3>
                    <h3>Zachary Williams</h3>
                  </div>
                  <div class="details">
                    <h3>Date Of Birth</h3>
                    <h3>2000/09/26</h3>
                  </div>
                  <div class="details">
                    <h3>Address</h3>
                    <h3>Melkbosstrand</h3>
                  </div>
                  <div class="details">
                    <h3>Drivers</h3>
                    <h3>None</h3>
                  </div>
                  <div class="details">
                    <h3>Criminal</h3>
                    <h3>Record</h3>
                  </div>
                </div>
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
#About{
  height: 100vh;
  background-image: url(../assets/andrew-kliatskyi-jpu0gMXT9to-unsplash.jpg);
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image{
  width: 350px;
  height: 365px;
  border-radius: 10px;
  border: 10px solid black;
}

.container{
  height: 90vh;
  width: 80vw;
  background: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
  gap: 10px;
}

.row .col {
  width: 450px;
}

h2{
  font-size: 3.5rem;
  font-family: 'Alfa Slab One';
  color: black;
}

.about-text p {
  margin-inline: 8%;
  font-size: 18px;
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
}
.about-details{
  margin-inline: 8%;
  margin-bottom: 10px;
}
.details{
  display: flex;
  justify-content: space-between;
  color: black;
}
.about-text{
  border: 10px solid black;
  border-radius: 10px;
}
@media (max-width: 1140px) {
  h2{
    font-size: 2rem;
  }
  .row{
    display: flex;
    flex-direction: column;
  }
  img.image{
    width: 350px;
    height: 300px;
  }
  .about-text{
    width: 350px;
  }
  .col{
    display: flex;
    justify-content: center;
  }
}
@media (max-width: 450px) {
  h2{
    font-size: 1.5rem;
  }
  img.image{
    width: 300px;
    height: 300px;
  }
  .about-text{
    width: 300px;
  }
  .col{
    display: flex;
    justify-content: center;
  }
  .about-text p{
    font-size: 14px;
  }
  h3{
    font-size: 14px;
  }
}
@media (max-width: 379px) {
  h2{
    font-size: 2rem;
  }
  .row{
    display: flex;
    flex-direction: column;
  }
  img.image{
    width: 250px;
    height: 200px;
  }
  .about-text{
    width: 250px;
  }
  .col{
    display: flex;
    justify-content: center;
  }
}
@media (max-width: 320px) {
  h2{
    font-size: 1.5rem;
  }
  .row{
    display: flex;
    flex-direction: column;
  }
  img.image{
    width: 200px;
    height: 200px;
  }
  .about-text{
    width: 200px;
    
  }
  .col{
    display: flex;
    justify-content: center;
  }
  .about-text p{
    font-size: 12px;
  }
  h3{
    font-size: 12px;
  }
}

</style>