<template>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="(lawyer, index) in lawyers" :key="lawyer.id">
          <div
            class="lawcard-container"
            @mouseover="isFlipped[index] = true"
            @mouseleave="isFlipped[index] = false"
          >
            <div class="lawcard" :class="{'flipped': isFlipped[index]}">
              <div class="front">
                <div class="lawyer-info">
                  <h3>{{ lawyer.name }}</h3>
                  <p>{{ lawyer.position }}</p>
                </div>
                <div class="image-container">
                  <img :src="lawyer.picture" alt="Lawyer Picture">
                </div>
              </div>
              <div class="back">
                <div class="lawyer-info">
                  <h3>{{ lawyer.name }}</h3>
                  <p>{{ lawyer.qualifications }}</p>
                  <p>{{ lawyer.speciality }}</p>
                  <div class="contact-icons">
                    <a :href="'tel:' + lawyer.phone"><i class="fas fa-phone"></i></a>
                    <a :href="'mailto:' + lawyer.email"><i class="fas fa-envelope"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isFlipped: [], 
        lawyers: [
          {
            id: 1,
            name: "John Doe",
            position: "Senior Attorney",
            picture: "https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
            qualifications: "LLM, JD",
            speciality: "Corporate Law",
            phone: "123-456-7890",
            email: "johndoe@example.com",
          },
          {
            id: 2,
            name: "Jane Smith",
            position: "Associate Attorney",
            picture: "https://images.pexels.com/photos/4427622/pexels-photo-4427622.jpeg?auto=compress&cs=tinysrgb&w=400",
            qualifications: "LLB, LLM",
            speciality: "Intellectual Property Law",
            phone: "987-654-3210",
            email: "janesmith@example.com",
          },
          {
            id: 3,
            name: "Natalie Rose",
            position: "Associate Attorney",
            picture: "https://images.pexels.com/photos/4427610/pexels-photo-4427610.jpeg?auto=compress&cs=tinysrgb&w=400",
            qualifications: "LLB, LLM",
            speciality: "Intellectual Property Law",
            phone: "987-654-3210",
            email: "janesmith@example.com",
          },
          //
          {
            id: 4,
            name: "James Bond",
            position: "Associate Attorney",
            picture: "https://images.pexels.com/photos/5668774/pexels-photo-5668774.jpeg?auto=compress&cs=tinysrgb&w=400",
            qualifications: "LLB, LLM",
            speciality: "Intellectual Property Law",
            phone: "987-654-3210",
            email: "janesmith@example.com",
          },
          //
          // Add more lawyers here...
        ],
      };
    },
    created() {
      // Initialize the isFlipped array with false for each card
      this.isFlipped = this.lawyers.map(() => false);
    },
  };
  </script>
  
  <style>
  .container {
    padding-top: 20px;
  }
  
  .lawcard-container {
    display: inline-block;
    perspective: 1000px;
    margin: 10px;
  }
  
  .lawcard {
    width: 250px;
    height: 400px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }
  
  .front,
  .back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
  }
  
  .front {
    z-index: 2;
    transform: rotateY(0deg);
    overflow: hidden;
  }
  
  .back {
    transform: rotateY(180deg);
    padding: 10px;
  }
  
  .flipped {
    transform: rotateY(180deg);
  }
  
  .lawyer-info {
    text-align: center;
  }
  
  h3 {
    margin: 0;
  }
  
  .image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  
  .contact-icons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .contact-icons a {
    margin: 0 5px;
    color: #007bff;
    font-size: 24px;
  }
  </style>
  