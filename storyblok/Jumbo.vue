<script setup>
import { ref, onMounted, nextTick } from "vue";
const props = defineProps({ blok: Object });

const textWrapper = ref(null);

onMounted(() => {
  nextTick(() => {
    if (typeof window !== "undefined" && textWrapper.value) {
      const content = textWrapper.value.textContent;
      textWrapper.value.innerHTML = content.replace(
        /\S+/g,
        "<span class='letter'>$&</span>"
      );

      import("animejs").then((anime) => {
        anime.default.timeline({ loop: false }).add({
          // targets: '.ml16 .letter',
          targets: ".h1",
          translateY: [10, 0],
          opacity: [0, 1],
          easing: "cubicBezier(.68,-0.24,.39,.91)",
          duration: 1150,
        });

        anime.default
          .timeline({ loop: false })
          .add({
            targets: ".h2",
            translateY: [10, 0],
            opacity: [0, 1],
            easing: "cubicBezier(.68,-0.24,.39,.91)",
            duration: 1150,
          })
          .add({
            targets: ".ml8 .circle-white",
            scale: [0, 1],
            opacity: [1, 0],
            easing: "easeInOutExpo",
            rotateZ: 360,
            duration: 1100,
          })
          .add(
            {
              targets: ".ml8 .circle-dark",
              scale: [0, 1],
              opacity: [0.5, 0],
              duration: 1500,
              easing: "easeInOutExpo",
            },
            "-=1000"
          )
          .add(
            {
              targets: ".ml8 .circle-dark-2",
              scale: [0, 5],
              opacity: [0.5, 0],
              duration: 1500,
              easing: "easeInOutExpo",
            },
            "-=1800"
          )
          .add(
            {
              targets: ".ml8 .circle-container",
              scale: [0, 1],
              opacity: [0, 1],
              duration: 1100,
              easing: "easeOutExpo",
            },
            "-=1000"
          );
      });
    }
  });
});
</script>

<template lang="pug">
div(v-editable="blok")
  .container
    .jumbo 
      .text
        .h1(ref="textWrapper" class="ml16") {{ blok.h1 }}
        .h2 {{ blok.h2 }}
        .socials(v-if="showSocials")
          .btn
            font-awesome-icon(icon="fa-brands fa-github-alt")
          .btn
            font-awesome-icon(icon="fa-brands fa-github-alt")
          .btn
            font-awesome-icon(icon="fa-brands fa-github-alt")
      .image.ml8
        span.circle.circle-dark
        span.circle.circle-dark-2
        span.circle.circle-white
        span.circle.circle-container
          span.circle.circle-dashed
          span.circle.circle-orbit
          img(:src="blok.image.filename + '/m/1600x0'"
              alt="here"
              class="logo"
              width="400"
              height="400")
          //- span.circle.circle-dark-dashed

</template>
<style lang="scss">
$grid-breakpoints-xs: 0;
$grid-breakpoints-sm: 576px;
$grid-breakpoints-md: 768px;
$grid-breakpoints-lg: 992px;
$grid-breakpoints-xl: 1200px;
$grid-breakpoints-xxl: 1400px;
.ml16 {
  overflow: hidden;
}
.circle-container {
  height: 100%;
  display: inline-block;
  border-radius: 100%;
  position: relative;
}
.ml8 .circle-white {
  border: 1px dashed #8367c757;
  border-radius: 100%;
  display: inline-block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  aspect-ratio: 1/1;
  top: -24%;
  z-index: 0;
}

.ml8 .circle-dashed {
  border: 2px dashed #4f7b86;
  border-radius: 100%;
  display: inline-block;
  opacity: 0.2;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  aspect-ratio: 1/1;
  top: 0;
  z-index: 0;
  padding: 50px;
  width: calc(100% + 10%);
  height: calc(100% + 10%);
  left: -5%;
  top: -5%;
}
.circle-orbit {
  border-radius: 100%;
  display: inline-block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  aspect-ratio: 1/1;
  top: 0;
  z-index: 0;
  padding: 50px;
  width: calc(100% + 10%);
  height: calc(100% + 10%);
  left: -5%;
  top: -5%;

  // &::after {
  //   content: " ";
  //   position: absolute;
  //   background: #fbfafd;
  //   width: 32px;
  //   height: 32px;
  // }
}

.ml8 .circle-dark {
  background-color: #8367c757;
  z-index: 1;
  display: inline-block;
  position: absolute;

  border-radius: 100%;
  display: inline-block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  aspect-ratio: 1/1;
  top: -24%;
  z-index: 0;
}

.ml8 .circle-dark-2 {
  background-color: #8367c757;
  z-index: 1;
  display: inline-block;
  position: absolute;

  border-radius: 100%;
  display: inline-block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  aspect-ratio: 1/1;
  top: -24%;
  z-index: 0;
}

.circle {
  opacity: 0;
  pointer-events: none;
}

.ml16 .letter {
  line-height: 1em;
  font-weight: 900;
  display: inline-block;
}
.jumbo {
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;

  .text {
    .h1 {
      opacity: 0;
      font-size: 32px;
      font-weight: 900;
      margin: 16px 0 8px;
    }

    .h2 {
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 24px;
      opacity: 0;
    }
  }

  .image {
    margin-bottom: 40px;
    order: -1;
    position: relative;
    img {
      max-width: 200px;
    }
  }

  .socials {
    display: flex;
    justify-content: center;
    gap: 24px;
  }

  // TODO: make this better
  img {
    border: 0;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }
}

@media screen and (min-width: $grid-breakpoints-xxl) {
  .jumbo {
    flex-direction: row;
    max-width: initial;
    text-align: left;
    padding: 140px 0;

    .text {
      width: 50%;
      .h1 {
        font-size: 40px;
      }

      .h2 {
        font-size: 20px;
      }
    }

    .image {
      width: 50%;
      order: initial;
      text-align: center;
      margin: 0;

      img {
        max-width: 400px;
      }
    }

    .socials {
      justify-content: flex-start;
    }
  }
}

.green-grad {
  background: #68ff92;
  background: linear-gradient(to top right, #68ff92 0%, #00330e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
}
</style>
