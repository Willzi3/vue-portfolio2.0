<template>
   <h1>Skills</h1>
      <div v-for="skill in skills" :key="skill.id">
<router-link :to="{name: 'SkillDetails', params: {id: skill.id}}">
    <p>{{ skill.title}}</p>
</router-link>
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

<style>

</style>