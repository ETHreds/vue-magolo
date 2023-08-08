<template>
    <div class="sidehero" :style="`background-image: url(${backgroundImage})`">
      <NavBar />
      <div class="container">
      <div class="sidehero-content">
        <h1 class="partial-underline">{{ title }}</h1>
        <slot></slot>
      </div>
      <Breadcrumbs />
    </div>
    </div>
    
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue";
  import Breadcrumbs from "@/components/Breadcrumbs.vue";
  
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      backgroundImage: {
        type: String,
        required: true,
      },
    },
    components: {
      NavBar,
      Breadcrumbs,
    },
  };
  </script>
  
  <style>
  .sidehero {
    position: relative;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
  }
  
  .sidehero-content {
    position: absolute;
    top: 50%;
    color: #fff;
  }
  

  /* Add any additional styles for the Hero component here */
  </style>
  