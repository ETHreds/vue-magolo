<template>
  <section>
  <div class="wow fadeIn animated container" style="visibility: visible; animation-name: fadeIn;">
    <div class="container">
      <div class="row">
        <!-- counter -->
        <div
          class="col-md-3 col-sm-6 bottom-margin text-center counter-section fadeInUp sm-margin-bottom-ten animated"
          data-wow-duration="300ms"
          style="visibility: visible; animation-duration: 300ms; animation-name: fadeInUp;"
        >
          <font-awesome-icon icon="fas fa-smile" size="2xl" />
          <span id="anim-number-pizza" class="counter-number"></span>
          <span class="timer counter alt-font appear" data-to="98" data-speed="7000">98</span>
          <p class="counter-title">Client Satisfaction</p>
        </div>
        <!-- end counter -->
        <!-- counter -->
        <div
          class="col-md-3 col-sm-6 bottom-margin text-center counter-section fadeInUp sm-margin-bottom-ten animated"
          data-wow-duration="600ms"
          style="visibility: visible; animation-duration: 600ms; animation-name: fadeInUp;"
        >
          <font-awesome-icon icon="fas fa-users" size="2xl" />
          <span class="timer counter alt-font appear" data-to="1500" data-speed="7000">1500</span>
          <span class="counter-title">Clients Served</span>
        </div>
        <!-- end counter -->
        <!-- counter -->
        <div
          class="col-md-3 col-sm-6 bottom-margin-small text-center counter-section fadeInUp xs-margin-bottom-ten animated"
          data-wow-duration="900ms"
          style="visibility: visible; animation-duration: 900ms; animation-name: fadeInUp;"
        >
          <font-awesome-icon icon="fas fa-chart-line" size="2xl" />
          <span class="timer counter alt-font appear" data-to="95" data-speed="7000">95</span>
          <span class="counter-title">SUCCESS RATE</span>
        </div>
        <!-- end counter -->
        <!-- counter -->
        <div
          class="col-md-3 col-sm-6 text-center counter-section fadeInUp animated"
          data-wow-duration="1200ms"
          style="visibility: visible; animation-duration: 1200ms; animation-name: fadeInUp;"
        >
          <font-awesome-icon icon="fas fa-calendar-alt" size="2xl" />
          <span class="timer counter alt-font appear" data-to="25" data-speed="7000">25</span>
          <span class="counter-title">Years of Experience</span>
        </div>
        <!-- end counter -->
      </div>
    </div>
   </div>
   


   </section>
</template>

<script>
export default {
  mounted() {
    $('.counter').each(function () {
      $(this).prop('Counter', 0).animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
    });
  },
};
</script>

<style>
.wow {
  padding-top: 0.5rem;
  margin-top: -5rem;
  background: #E3B96A;
  margin-bottom: 2rem;
}
.counter-section {
  text-align: center;
  margin: 0 auto;
}

.counter-section icon {
  display: block;
  margin: 0 0 10px;
}

.counter-section span.counter {
  font-size: 40px;
  line-height: 60px;
  display: block;
  letter-spacing: 2px;
}

.counter-title {
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.counter-icon {
  top: 25px;
  position: relative;
}

.counter-style2 .counter-title {
  letter-spacing: 0.55px;
  float: left;
}

.counter-style2 span.counter {
  letter-spacing: 0.55px;
  float: left;
  margin-right: 10px;
}

.counter-style2 i {
  float: right;
  line-height: 26px;
  margin: 0 10px 0 0;
}

.counter-subheadline span {
  float: right;
}

</style>
