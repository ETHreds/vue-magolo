<template>
  <div class="container">
    <div class="lawyer-heading">
      <h2 class="partial-underline">  Our Team</h2>
      <p class="col-8">Our team is committed to upholding the highest standards of legal expertise, ethics, and client care. As a full-service law firm, we offer a comprehensive range of legal solutions to individuals, businesses, and organizations.</p>
    </div>
    <LawyerCard
    />
  </div>
</template>

<script>
import LawyerCard from '@/components/LawyerCard'; // Import the component path accordingly

export default {
  components: {
    LawyerCard,
  },
};
</script>
