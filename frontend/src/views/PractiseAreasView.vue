<template>
  <div class="home">
    <SideKick title="Practise Areas" backgroundImage="https://images.pexels.com/photos/4427498/pexels-photo-4427498.jpeg?auto=compress&cs=tinysrgb&w=400"/>
    <div class="container">
        <div class="expertise mb-4">
            <h2 class="text-center m-4">We Are Experts In: (Todo Make Biiger)</h2>
            <div class="card-container vh-100">
                <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-1">
                     <Card v-for="(area, index) in practiseAreas" :key="index" :number="area.number" :title="area.title" :description="area.description" />
                 </div>
            </div>
        </div>
        <div class="testimonials d-flex">
            <div class="review col-6">
                <h2 class="partial-underline">Latest Cases/Media</h2>
                <div class="vh-100">
                    (Get  A few High Profile Cases/ Media stories)
                </div>
            </div>
            
        </div>
        <NeedHelp/>
        <FooterVue></FooterVue>
    </div>
  </div>
</template>

<script>
import SideKick from '@/components/SideKick.vue';
import Card from '@/components/Card.vue'
import NeedHelp from '../components/NeedHelp.vue';
import FooterVue from '@/components/FooterVue.vue';
export default {
    components: { SideKick,
                Card,
                NeedHelp,
                FooterVue
             },
    data() {
        return {
            practiseAreas: [
        {
          number: ".01",
          title: "Estate Planning",
          description: "It involves creating wills, trusts, and other legal documents to protect, preserve, distribution of assets, minimize tax implications, and provide financial security.",
        },
        {
          number: ".02",
          title: "Personal Injury Law",
          description: "Our experienced team fights for justice and fair compensation for victims of accidents and injuries caused by negligence.",
        },
        {
          number: ".03",
          title: "Business Law",
          description: "From startups to established companies, we provide legal guidance for business formation, contracts, and transactions.",
        },
        {
          number: ".01",
          title: "Estate Planning",
          description: "It involves creating wills, trusts, and other legal documents to protect, preserve, distribution of assets, minimize tax implications, and provide financial security.",
        },
        {
          number: ".02",
          title: "Personal Injury Law",
          description: "Our experienced team fights for justice and fair compensation for victims of accidents and injuries caused by negligence.",
        },
        {
          number: ".03",
          title: "Business Law",
          description: "From startups to established companies, we provide legal guidance for business formation, contracts, and transactions.",
        },
    ],
        }
    },
}
</script>

<style>

</style>