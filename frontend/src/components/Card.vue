<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-muted">{{ number }}</h5>
        <h4 class="card-subtitle mb-2 ">{{ title }}</h4>
        <p class="card-text">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      number: String,
      title: String,
      description: String,
    },
  };
  </script>
  
  <style scoped>
  .card-title {
    font-family: 'Rufina', serif;
    font-size: 3rem;
  }
  </style>
  