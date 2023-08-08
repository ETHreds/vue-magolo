<template>
  <div class="home">
    <SideKick title="Our Team" backgroundImage="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=400"/>
    <div class="container">
        <div class="lawyers">
            <h2 class="partial-underline">Our Team</h2>
            <br class="muted">
            <LawyerCard/>
        </div>
        <WhyVue heading="Frequently Asked Questions" backgroundImage="https://images.pexels.com/photos/1999352/pexels-photo-1999352.jpeg?auto=compress&cs=tinysrgb&w=400">
            <details>
    <summary>What areas of law do your attorneys specialize in?</summary>
    <p>Our attorneys specialize in various areas of law including corporate law, family law, personal injury law, real estate law, and more.</p>
  </details>
  
  <details>
    <summary>How experienced are your attorneys?</summary>
    <p>Our attorneys have a combined experience of over 50 years in handling a wide range of legal matters.</p>
  </details>
  
  <details>
    <summary>Do you offer free initial consultations?</summary>
    <p>Yes, we offer free initial consultations to discuss your legal needs and determine how we can assist you.</p>
  </details>
  
 
  <details>
    <summary>How do I schedule an appointment with one of your attorneys?</summary>
    <p>You can easily schedule an appointment by calling our office at [phone number] or using our online appointment request form.</p>
  </details>
  
  <details>
    <summary>What sets your attorneys apart from others?</summary>
    <p>Our attorneys are known for their deep expertise, personalized approach, and commitment to achieving the best outcomes for our clients.</p>
  </details>
  
        </WhyVue>
        <NeedHelp/>
        <FooterVue/>
    </div>
  </div>
</template>

<script>
import FooterVue from '../components/FooterVue.vue'
import LawyerCard from '../components/LawyerCard.vue'
import NeedHelp from '../components/NeedHelp.vue'
import SideKick from '../components/SideKick.vue'
import WhyVue from '../components/WhyVue.vue'
export default {
  components: { SideKick, LawyerCard, WhyVue, NeedHelp, FooterVue },

}
</script>

<style>

</style>