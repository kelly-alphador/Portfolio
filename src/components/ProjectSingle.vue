<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  reverse: {
    type: Boolean,
    required: false
  }
})

let currentImageIndex = ref(0);
let carouselInterval = ref(null);

onMounted(() => {
  startCarousel();
})

onUnmounted(() => {
  if (carouselInterval.value) {
    clearInterval(carouselInterval.value);
  }
})

const getProjectTags = () => props.project.tags.split(';');
const getProjectTasks = () => props.project.tasks.split(';');
const getProjectImages = () => {
  return Array.isArray(props.project.image)
    ? props.project.image
    : props.project.image.split(';');
};

const nextImage = () => {
  const images = getProjectImages();
  if (images.length > 1) {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
  }
}

const prevImage = () => {
  const images = getProjectImages();
  if (images.length > 1) {
    currentImageIndex.value = currentImageIndex.value === 0
      ? images.length - 1
      : currentImageIndex.value - 1;
  }
}

const goToImage = (index) => {
  const images = getProjectImages();
  if (index >= 0 && index < images.length) {
    currentImageIndex.value = index;
  }
}

const startCarousel = () => {
  const images = getProjectImages();
  if (images.length > 1) {
    carouselInterval.value = setInterval(nextImage, 4000);
  }
}

const stopCarousel = () => {
  if (carouselInterval.value) {
    clearInterval(carouselInterval.value);
    carouselInterval.value = null;
  }
}

const resumeCarousel = () => {
  if (!carouselInterval.value) {
    startCarousel();
  }
}
</script>

<template>
  <div class="project">
    <!-- Left section avec AOS -->
    <div class="left" :class="reverse ? 'reverse' : ''" data-aos="zoom-in" data-aos-duration="1000">
      <h3 class="text-highlight-1">{{ project.name }}</h3>

      <div class="carousel-container" @mouseenter="stopCarousel" @mouseleave="resumeCarousel">
        <div class="carousel">
          <div class="carousel-track">
            <div class="carousel-images" :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
              <div v-for="(image, index) in getProjectImages()" :key="index" class="carousel-image">
                <a :href="`/src/assets/${image}`" target="_blank">
                  <img :src="`/src/assets/${image}`" :alt="`${project.name} - Image ${index + 1}`">
                </a>
              </div>
            </div>
          </div>

          <!-- Boutons -->
          <button v-if="getProjectImages().length > 1" @click="prevImage" class="carousel-btn carousel-btn-prev">&#8249;</button>
          <button v-if="getProjectImages().length > 1" @click="nextImage" class="carousel-btn carousel-btn-next">&#8250;</button>

          <!-- Indicateurs -->
          <div v-if="getProjectImages().length > 1" class="carousel-indicators">
            <button 
              v-for="(image, index) in getProjectImages()" 
              :key="index"
              @click="goToImage(index)"
              :class="['indicator', { active: index === currentImageIndex }]"
            ></button>
          </div>
        </div>
      </div>
    </div>

    <!-- Right section avec AOS aussi -->
    <div class="right" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
      <p class="tag" v-for="tag in getProjectTags()" :key="tag">{{ tag }}</p>
      <p class="description">{{ project.description }}</p>
      <p class="tasks">
        <span v-for="(task, index) in getProjectTasks()" :key="index">
          <span class="text-highlight-2">✓</span> {{ task }}<br/>
        </span>
      </p>
    </div>
  </div>
</template>


<style scoped>
    .project {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 50px;
        margin-top: 35px;
    }

    .project .left h3 {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 10px;
    }

    .project .left img {
        width: 100%;
    }

    .project .right {
        padding-top: 40px;
    }

    .project .right .tag {
        display: block;
        float: left;
        background-color: #81aaff;
        padding: 8px 16px;
        margin-right: 12px;
        border-radius: 5px;
        font-weight: bold;
    }

    .project .right .description {
        clear: both;
        margin-top: 50px;
        font-size: 17px;
    }

    .project .right .tasks {
        margin-top: 20px;
        font-size: 17px;
    }

    .reverse {
        order: 1;
    }

   /* .fade-in {
        opacity: 0;
        transition: 0.3s all ease-out;
        transform: scale(0.8);
        display: inline-block;
    }*/

    /* Styles du carousel */
    .carousel-container {
        position: relative;
        width: 100%;
    }

    .carousel {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 100%;
    }

    .carousel-track {
        width: 100%;
        overflow: hidden;
    }

    .carousel-images {
        display: flex;
        transition: transform 0.5s ease-in-out;
        width: 100%;
    }

    .carousel-image {
        width: 100%;
        flex: 0 0 100%;
        position: relative;
    }

    .carousel-image a {
        display: block;
        width: 100%;
    }

    .carousel-image img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
    }

    .carousel-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
        border-radius: 4px;
        transition: background 0.3s ease;
        z-index: 10;
    }

    .carousel-btn:hover {
        background: rgba(0, 0, 0, 0.8);
    }

    .carousel-btn-prev {
        left: 10px;
    }

    .carousel-btn-next {
        right: 10px;
    }

    .carousel-indicators {
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
        z-index: 10;
    }

    .indicator {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.5);
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .indicator.active {
        background: white;
        border-color: white;
    }

    .indicator:hover {
        border-color: white;
        background: rgba(255, 255, 255, 0.7);
    }

    @media screen and (max-width: 905px) {
        .project {
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(1, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 20px;
        }
        .project .right {
            padding-top: 0px;
        }
        .reverse {
            order: 0;
        }
    }

    @media screen and (max-width: 450px) {
        .project .right .tag {
            margin-bottom: 10px;
        }
        
        .carousel-btn {
            padding: 8px 12px;
            font-size: 16px;
        }
        
        .carousel-indicators {
            bottom: 10px;
        }
        
        .indicator {
            width: 10px;
            height: 10px;
        }
    }
</style>