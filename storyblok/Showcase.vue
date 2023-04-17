<template lang="pug">
main
  .showcase
    .container
      .heading Showcase
      h2.title {{ blok.title }}
      //- img(src='https://placehold.co/600x400'
      //-       alt="here")
      //- .stepper &lt;- add comp here -&lt;
      .case
        img(:src="blok.image_test.filename + '/m/1600x0'"
              alt="here"
              class="case__image")
        .case__text-cont
          .case__controls
            button.case__btn(@click='prev') Prev
            input(type='number' min='0' max='9' v-model='currentSlide')
            button.case__btn(@click='next') Next
          .case__title Super awesome app 
          .case__cate
            .bar 
            | App UI Concept
          .case__desc jalksjd alksjd qoiupsjdhfawer spfd woearijasldjf hwpoi4r sdjf wrewe sj ;awi sdifhaoweri woejovj woejrw
      .carouserl
//- carousel( :transition='500' ref='carousel' v-model='currentSlide')
//-   slide(v-for='slide in 10' :key='slide')
//-     .carousel__item {{ slide - 1 }}
//-   |     ...


</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data: () => ({
    currentSlide: 0,
  }),
  methods: {
    next() {
      this.$refs.carousel.next()
    },
    prev() {
      this.$refs.carousel.prev()
    }
  }
})
</script>

<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: hotpink;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>


<script setup>
  defineProps({ blok: Object})
</script>

<style lang="scss">
$grid-breakpoints-xs: 0;
$grid-breakpoints-sm: 576px;
$grid-breakpoints-md: 768px;
$grid-breakpoints-lg: 992px;
$grid-breakpoints-xl: 1200px;
$grid-breakpoints-xxl: 1400px;

.showcase {
  background-color: rgba(grey, .05);
  margin: 0 auto;
  padding: 24px 0;
  border-radius: 24px;

  .title {
    font-size: 24px;
    font-weight: 300;
  }
}
.case {
  &__btn {
    border: 1px black solid;
    border-radius: 4px;
    padding: 12px;

  }

  &__title {
    font-size: 24px;
    font-weight: 400;
  }
  &__cate {
    display: flex;
    font-size: 12px;
    opacity: .75;
    align-items: center;

    .bar {
      width: 24px;
      height: 2px;
      background-color: red;
      border-radius: 8px;
      margin-right: 8px;
    }
  }
  &__desc {
    font-size: 16px;
    opacity: .75;
    font-weight: 300;
  }
}

@media screen and (min-width: $grid-breakpoints-lg) {
  .case {
    display: flex;

    &__image {
      order: 1;
        max-width: 50%;
    }

    &__title {
      font-size: 32px;
    }
    &__cate {
      font-size: 14px;

      .bar {

      }
    }
    &__desc {
      font-size: 18px;
    }
  }
}


</style>