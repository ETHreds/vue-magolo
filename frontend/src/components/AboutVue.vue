<template>
    <div class="about-section">
        <div class="container">
            <div class="row">
              <div class="col-lg-6 d-flex align-items-center">
                 <div class="left-content">
                    <h2 class="partial-underline">About The Firm</h2>
                    <p>At J.O Magolo & Advocates, we stand by our core values of Experience, Prudence, and Competence. With decades of legal expertise, a prudent approach to each case, and a team of competent attorneys, we are dedicated to providing you with the highest level of professional legal services.</p>
                    <p class="sign">Jared O. Magolo, CEO and Founder</p>
                 </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center position-relative">
                <div class="right-content text-center">
                    <img src="https://images.pexels.com/photos/5778473/pexels-photo-5778473.jpeg?auto=compress&cs=tinysrgb&w=400"  class="img-fluid" alt="Responsive Image">
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
.about-section {
    height: 100dvh;
}
.partial-underline {
  font-size: 2.5rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
}

.partial-underline::after {
  content: "";
  position: absolute;
  bottom: -.8rem; 
  left: 0;
  height: 2px;
  width: 30%; 
  background-color: #e79b0c;
}

.right-content {
  margin-top: -8rem; /* Adjust the negative margin to control the overlap amount */
}
.sign{
    color: grey;
    font-style: italic;
}

</style>