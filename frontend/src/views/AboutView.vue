<template>
  <div class="home">
   
   <SideKick
      :title="pageTitle" :backgroundImage="heroBackground"
      />
      <div class="container">
      <div class="our_history">
        <h2 class="partial-underline">Our History</h2>

        <div class="history d-flex">
          <div class="col-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla dolores delectus cupiditate praesentium hic neque ex incidunt ut atque consectetur libero sit, maxime optio vel consequatur soluta laudantium aut error?</div>
          <div class="col-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem esse illum quasi quibusdam voluptatem quisquam doloribus iure nesciunt repudiandae, quaerat vero magnam excepturi possimus aliquam maiores error amet quidem itaque!</div>
        </div>
        <div class="row ">
        <div class="col-8 mt-4 mb-4 d-flex justify-content-center hi">
          <img src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" class="img-fluid">
        </div>
      </div>
      <WhyVue heading="Our Process" mb-4>
        <p style="color: black;"> Starting with an in-depth consultation, our highly skilled attorneys work collaboratively to devise efficient and cost-effective strategies. We maintain transparent communication throughout, keeping you informed at every stage. With unwavering dedication and professionalism, we advocate for your rights and best interests, ensuring a successful resolution to your case.</p>
        <div class="d-flex">
        <div class="card-body">
                    <h5 class="card-title text-muted">.01</h5>
                    <h4 class="card-subtitle mb-2 text-dark ">Consultation & Understanding</h4>
                    <p class="card-text text-dark">IAt our reputable law firm, we begin with an in-depth consultation to fully comprehend your unique legal needs and objectives. We take the time to listen and understand your situation, ensuring a tailored approach to your case.</p>
                   
                </div>
                <div class="card-body">
                    <h5 class="card-title text-muted">.02</h5>
                    <h4 class="card-subtitle mb-2  text-dark">Tailored Strategies</h4>
                    <p class="card-text text-dark">Our team of highly skilled attorneys collaborates to develop efficient and cost-effective strategies specific to your circumstances. With a focus on excellence, we work diligently to find the best legal solutions for you.</p>
                    
                  </div>
                <div class="card-body">
                    <h5 class="card-title text-muted">.03</h5>
                    <h4 class="card-subtitle mb-2  text-dark">Communication & Advocacy</h4>
                    <p class="card-text text-dark">Throughout the process, we maintain open and transparent communication, keeping you informed at every stage. With unwavering dedication and professionalism, we tirelessly advocate for your rights and best interests, ensuring a successful resolution to your case.</p>
                    
                  </div>
              </div>
      </WhyVue>

      <StatisticsSection class="m-4"/>
      <NeedHelp class="vh-100 "/>
      <div class="awards vh-50">
        <h2 class="partial-underline">Awards</h2>
        <div class="award-container">
          <h2>(To do A BUNCH OF AWards and recognition  with pics if possible )</h2>
        </div>
      </div>
      <FooterVue/>

      </div>
  </div>

  </div>
</template>

<script>
import SideKick from '@/components/SideKick.vue';
import WhyVue from '@/components/WhyVue.vue';
import StatisticsSection from '../components/StatisticsSection.vue';
import NeedHelp from '@/components/NeedHelp.vue';
import FooterVue from '@/components/FooterVue.vue';
export default {
  components : {
    SideKick,
    WhyVue,
    StatisticsSection,
    NeedHelp,
    FooterVue
  },
  data() {
    return {
      pageTitle: "About",
      heroBackground: "https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=400",
    };
  },
}
</script>

<style>
.hi {
  border: 2px red solid;
  margin: 0 auto;
}

</style>