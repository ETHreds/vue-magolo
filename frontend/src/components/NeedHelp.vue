<template>
  <section class="need-help">
    <div class="container d-flex flex-column justify-content-betweeen">
      <div class="mb-5">
        <h2>Do you need help ?</h2>
        <p>Our experienced team of legal professionals is here to provide you with exceptional legal support tailored to your unique needs. With a proven track record of success and a client-focused approach, we are committed to delivering the best possible outcome for your legal matters. Contact us today for expert assistance and peace of mind.</p>
      </div >
      <div class="contacts mt-5">
        <div class="contact">
          <h4>Email Us </h4>
          <p>Lorem, ipsum.</p>
        </div>
        <div class="contact">
          <h4>Call Us Now</h4>
          <p>Lorem, ipsum.</p>
        </div>
        <div class="contact">
          <h4>Location</h4>
          <p>Lorem ipsum dolor sit.</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.need-help{
    margin: 3rem 0;
    text-align: center;
    height: 100vdh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.need-help h2 {
    font-size: 3.5rem;
    font-weight: 600;
 
}
.contacts {
    display: flex;
}
.contact {
    width: 33.3%;
}

</style>