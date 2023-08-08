<template>
  <div class="home">
    <HeroVue/>
    <AboutVue/>
    <PractiseAreas/>
    <WhyVue heading="Why Choose Us" :backgroundImage="backgroundImage1">
      <details>
        <summary>How do I choose the right attorney for my case?</summary>
        <p>Choosing the right attorney is crucial to the success of your case. We recommend considering their experience, expertise, and track record of success in similar cases.</p>
    </details>

    <details>
        <summary>What areas of law does your firm specialize in?</summary>
        <p>Our law firm specializes in a wide range of practice areas, including personal injury, family law, criminal defense, and business law.</p>
    </details>

    <details>
        <summary>How long does a legal case typically take?</summary>
        <p>The duration of a legal case can vary depending on its complexity and the specific circumstances involved. Some cases may be resolved quickly, while others may take several months or even years.</p>
    </details>

    <details>
        <summary>What are the potential costs associated with hiring a lawyer?</summary>
        <p>The costs of hiring a lawyer can vary depending on the type of case and the lawyer's fee structure. We offer a free initial consultation to discuss your case and provide transparency about the potential costs involved.</p>
    </details>

    <details>
        <summary>Can I pursue a personal injury claim if I was partially at fault for the accident?</summary>
        <p>In many personal injury cases, the fault may be shared between multiple parties. Depending on the laws in your jurisdiction, you may still be eligible to pursue a personal injury claim even if you were partially at fault.</p>
    </details>
    </WhyVue>
    <StatisticsSectionVue/>
    <ClientReview/>
    <TeamVue/>
    <NeedHelp/>
    <FooterVue/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroVue from '@/components/HeroVue.vue';
import AboutVue from '@/components/AboutVue.vue';
import PractiseAreas from '@/components/PractiseAreas.vue';
import StatisticsSectionVue from '@/components/StatisticsSection.vue';
import ClientReview from '@/components/ClientReview.vue';
import TeamVue from '../components/TeamVue.vue';
import WhyVue from '../components/WhyVue.vue';
import NeedHelp from '../components/NeedHelp.vue';
import FooterVue from '../components/FooterVue.vue';

export default {
  name: 'HomeView',
  components: {
    StatisticsSectionVue,
    TeamVue,
    HeroVue,
    AboutVue,
    PractiseAreas,
    WhyVue,
    ClientReview,
    NeedHelp,
    FooterVue
},
 data() {
  return {
    backgroundImage1: 'https://images.pexels.com/photos/6077123/pexels-photo-6077123.jpeg?auto=compress&cs=tinysrgb&w=400',
  }
 }
}
</script>

<style>

.home {
  background: #e2b86925;

}


/* Button */
.btn-outline-gold {
  color: #E3B96A; 
  border-color: #E3B96A; 
  background-color: transparent;
}


/* End Button  */



</style>
