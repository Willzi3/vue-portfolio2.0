<template>
<div id="Landing">
 <h1>Zachary Williams</h1>
 <p>Aspiring Full-Stack Developer</p>
 <i class="fa-solid fa-chevrons-down"></i>
</div>

</template>

<script>
export default {
  
}
</script>
<style scoped>
#Landing{
  height: 93vh;
  background-image: url(../assets/josh-rose-trYl7JYATH0-unsplash.jpg);
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#Landing h1{
  font-size: 6rem;
  color: white;
  font-family: "alfa slab one";
  letter-spacing: 2px;
}
#Landing p{
  font-size: 2rem;
  color: white;
  font-family: "alfa slab one";
  letter-spacing: 2px;
}
i{
  font-size: 5rem;
  color: white;
}

</style>
