<!-- <template>
   <section class="why-us hero">
    <div class="container">
      <div class="d-flex">
      <div class="heading-left border-right-gold">
        <h2 class="partial-underline">Why Choose Us</h2>
      </div>
      <div class="why-quiz">
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
      </div>
    </div>
    </div>
  </section>

</template>

<script>
export default {

}
</script> -->

<template>
  <section :style="heroStyle" class="why-us hero">
    <div class="container">
      <div class="d-flex">
        <div class="heading-left border-right-gold">
          <h2 class="partial-underline">{{ heading }}</h2>
        </div>
        <div class="why-quiz">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
      default: null,
    },
  },
  computed: {
    heroStyle() {
      return {
        backgroundImage: this.backgroundImage ? `url('${this.backgroundImage}')` : 'none',
      };
    },
  },
};
</script>

<style>
/* Your existing styles */
</style>


<style>
.why-us{
  height: 100vh;
  background-image: url('https://images.pexels.com/photos/6077123/pexels-photo-6077123.jpeg?auto=compress&cs=tinysrgb&w=400');
}

.why-us .container {
  height: 100%;
}
.d-flex {
  display: flex;
  padding: 2rem 0;
}

.heading-left {
  flex: 1;
  border-right: 1px solid #E3B96A;
  padding: 10px;
}

.why-quiz {
  flex: 3;
  padding: 10px;
  color: white;

}

details {
  border-bottom: 1px solid #e3b96a2f;
  margin-top: 1.5rem;
  padding-bottom: 0.5rem;
}

summary {
  cursor: pointer;
  font-weight: bold;
  color: #E3B96A;
  text-shadow:
        -1px -1px 0 black,
        1px -1px 0 black,  
        -1px 1px 0 black,  
        1px 1px 0 black;   
}

details p {
margin: 0;
padding: 0;
}

</style>