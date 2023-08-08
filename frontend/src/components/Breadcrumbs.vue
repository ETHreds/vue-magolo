<template>
    <nav class="breadcrumbs bg-light fixed-bottom" v-if="showBreadcrumbs">
      <div class="container">
        <ol class="breadcrumb m-0">
          <li class="breadcrumb-item" v-for="(breadcrumb, index) in breadcrumbs" :key="index">
            <router-link :to="breadcrumb.link">{{ breadcrumb.label }}</router-link>
          </li>
        </ol>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showBreadcrumbs: false,
        breadcrumbs: [],
      };
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener("scroll", this.handleScroll);
      });
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.showBreadcrumbs = window.scrollY > 100;
      },
    },
  };
  </script>
  
  <style>
  /* Add any additional styles for the Breadcrumbs component here */
  </style>
  