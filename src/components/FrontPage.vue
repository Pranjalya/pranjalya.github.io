<template>
  <header class="header parallax position">
    <div class="container-page">
      <AppMenu />
    </div>

    <div class="name-block">
      <div class="title-text">
        <AnimateWhenVisible name="fadeDown" :duration="2"
          ><h1>{{ user.name }}</h1></AnimateWhenVisible
        >
        <AnimateWhenVisible name="fadeUp" :duration="2"
          ><p>{{ user.description }}</p></AnimateWhenVisible
        >
      </div>
    </div>
  </header>
</template>

<script>
import AppMenu from "./AppMenu";

export default {
  name: "FrontPage",
  props: ["user"],
  components: {
    AppMenu
  }
};
</script>

<style scope lang="scss">
@import "@/styles/variables.scss";

$text-nav-bar: map-get($colors, light) !default;

.header {
  padding: 20px;
  background-color: map-get($colors, dark);
}

.parallax {
  background-image: url("../assets/img/120882.webp");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.logo {
  float: left;
  margin: 10px 30px;

  .img-logo {
    width: 60px;
  }
}

.name-block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  margin: 0 auto;
  z-index: 400;

  .title-text {
    width: 250px;
  }

  h1 {
    font-size: 2.3rem;
    padding: 2px 10px;
    text-align: center;
    text-transform: uppercase;
    border: 2px solid $text-nav-bar;
    color: $text-nav-bar;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    margin: 5px auto;
    color: $text-nav-bar;
  }
}

@media (min-width: #{map-get($breakpoints, small)}) {
  .name-block {
    .title-text {
      width: 55%;
    }

    h1 {
      font-size: 2.8rem;
      padding: 4% 8%;
    }

    p {
      font-size: 2rem;
    }
  }
}

@media (min-width: #{map-get($breakpoints, medium)}) {
  .name-block {
    .title-text {
      width: 550px;
    }

    h1 {
      font-size: 4rem;
      padding: 4% 10%;
    }

    p {
      font-size: 2.5rem;
    }
  }
}

@media only screen and (max-device-width: 1024px) {
  .parallax {
    background-attachment: scroll;
  }
}
</style>
