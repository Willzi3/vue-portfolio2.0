<template>

  <div id="Contact">
 
    <div class="container">
         <h1>CONTACT</h1>
      <div class="row">
        <div class="col">
          <!-- modify this form HTML and place wherever you want your form -->
<form class="form"
  action="https://formspree.io/f/mrgjnazl"
  method="POST">
    <input class="form-input" type="text" name="name" placeholder="Name...">
    <input class="form-input" type="text" name="number" placeholder="Number...">
    <input class="form-input" type="email" name="email" placeholder="Email...">
    <textarea class="form-input" name="message"/>
    <button type="submit">Send</button>
</form>
        </div>
        <div class="col">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13233.069675818386!2d18.4926986!3d-33.9856643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1658441707703!5m2!1sen!2sza" width="500" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1{
  font-size: 6rem;
  font-family: alfa slab one;
  color: black;
}
#Contact{
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 5px 5px lightgray;
  border-radius: 10px;
  margin: 30px;
}
.container
.row{
  display: flex;
  justify-content: center;
  gap: 20px;
}
.col{
 width: 500px;
 height: 500px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.form{
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
  
}
.form-input{
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background: black;
  color: white;
}

.form button {
  height: 50px;
  border-radius: 10px;
  background: black;
  color: white;
}
iframe{
  border-radius: 10px;
}
</style>