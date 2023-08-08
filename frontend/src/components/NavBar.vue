<template>
  <nav class="navbar navbar-expand-lg ">
    <div class="container">
      <router-link class="navbar-brand" to="/" style="color: white;">LOGO</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/practise">Practise Areas</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/attorneys">Attorneys</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/contact-us">Contact</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <button class="btn btn-info">Free Evaluation</button>
            </a>
          </li> 
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
