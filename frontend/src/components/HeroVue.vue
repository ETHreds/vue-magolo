<template>
    <div class="hero">
      <NavBar/>
      <div class="header-container d-flex align-items-end">
        <div class="container content-container">
            <div class="row">
                <div class="col-lg-8 col-12">
                    <div class="head">
                    <h5 class="welcome">Welcome to J.O Magolo & Advocates</h5>
                        <div class="line-container">
                            <h1 class="heading underline">Your Trusted Legal Advisors</h1>
                        </div>
                    </div>

                    <div class="next">
                        <p>At J.O Magolo & Advocates, we are dedicated to providing top-notch legal services tailored to your needs. Our experienced team of attorneys is committed to achieving the best outcomes for our clients in a wide range of legal matters.</p>
                        <router-link to="/about" class="btn btn-info btn-outline-gold">Read More</router-link>
                 </div>
            </div>
        </div>
        </div>

      </div>  
    </div>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
    components: { NavBar }
}
</script>

<style>
.hero {
background-image: url('https://images.pexels.com/photos/8112193/pexels-photo-8112193.jpeg?auto=compress&cs=tinysrgb&w=400');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
width: 100%;
background-attachment: fixed;
color: #E3B96A;
padding-bottom: 3rem;
}
.welcome {
 font-size: 22px;
 font-weight: 600;
 margin-bottom: 0px;
 
}
.heading {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.2;
    position: relative;
    display: inline-block;
    margin: 0; 
    padding: 0;
    margin-bottom: 4.5rem;
}
.underline::after {
  content: "";
  position: absolute;
  bottom: -.6rem;
  left: 2rem;
  height: 2px;
  width: 30%;
  background-color:#e79b0c;
  margin: -2rem;  
}
.head {
    height: calc(100dvh - 3rem);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.next p {
    color: white;
}
</style>