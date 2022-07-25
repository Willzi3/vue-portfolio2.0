<template>
  <footer>
    <p>Zachary Williams -All Right Reserved</p>
    <div class="icons">
      <a href="https://github.com/Willzi3"><i class="fa-brands fa-github"></i></a>
      <a href="https://codepen.io/Willzi3"><i class="fa-brands fa-codepen"></i></a>
      <a href="https://www.linkedin.com/in/zachary-williams-b3388a237/"><i class="fa-brands fa-linkedin"></i></a>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
footer{
    background-color: black;
    color: white;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.icons {
  display: flex;
  gap: 10px;
  font-size: 2rem;
}
.icons a {
  text-decoration: none;
  color: white;
}
</style>