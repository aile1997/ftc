<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import router from "@/router/index";
import { watch } from "vue";
const introFun = () => {
  router.push({
    path: "/",
  });
  // setTimeout(() => {
  //   window.location.reload();
  // }, 300);
  // window.location.reload();
};

const kycFun = () => {
  router.push({
    path: "/kyc",
  });
  // setTimeout(() => {
  //   window.location.reload();
  // }, 300);
  // window.location.reload();
};
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="header">
        <a class="active a" @click="introFun"><span>INTRO </span></a
        ><a class="a" @click="kycFun"><span>KYC</span></a
        ><a class="a"><span>TOOL</span></a
        ><a class="a"><span>COURSE</span></a
        ><a class="a"><span>OTHER</span></a>
        <div class="cursor"></div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  width: 100%;
  padding: 1rem;
  position: fixed;
  z-index: 2;
}

span {
  display: inline-block;
  pointer-events: none;
  transition: transform 0.1s linear;
}

.cursor {
  pointer-events: none;
  position: fixed;
  top: 10px;
  left: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  transition: transform 0.8s ease, opacity 0.6s ease;
  z-index: 2;
}

.a {
  display: inline-block;
  color: #fff;
  padding: 1rem;
  margin-right: 4rem;
  letter-spacing: 0.4em;
  font-size: 0.9em;
  transition: all 0.3s ease, color 0.3s ease;
}

nav.header .a:hover {
  cursor: pointer;
  color: rgb(175, 175, 175);
  transform: scale(1.1);
}

nav.header .a:hover ~ .cursor {
  transform: translate(-50%, -50%) scale(5);
  opacity: 0.1;
}

.header {
  position: absolute;

  color: #fff;

  width: 100%;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  z-index: 2;

  transition: all 1.2s ease-in-out;
  padding: 0;
  margin: 0;
}
.header.ended {
  top: 2em;
  opacity: 0.9;
}

.header > span {
  padding: 0 3.25em;
  letter-spacing: 0.4em;
  position: relative;
}

.header > span.active:after,
.first {
  position: absolute;
  left: 50%;
  -webkit-transform: translate3d(-50%, 0, 0);
  transform: translate3d(-50%, 0, 0);
}

.header > span.active:after {
  content: "";
  bottom: -10px;
  width: 20px;
  height: 2px;
  background: #fff;
}

@media only screen and (max-width: 660px) {
  .a {
    padding: 10px;
    margin-right: 0rem;
    letter-spacing: 0.3em;
  }

  .footer {
    margin-bottom: 20px;
  }
  .header > span {
    padding: 0 1em;
  }

  .header {
    font-size: 0.6em;
  }

  .main-section .product-display h3 {
    width: 260px;
    font-size: 42px;
    margin-left: 30px;
    line-height: 45px;
  }

  .first > h1 {
    margin: 10px 0;
    font-weight: 100;
    letter-spacing: 0.2em;
    font-size: 13vw;
  }

  .first > p {
    width: 85%;
    line-height: 22px;
  }

  .second-container {
    padding: 0;
    justify-content: flex-end;
  }

  .second-container > ul {
    margin: 0px 0px 30px 30px;
    width: 80%;
  }

  .second-container > ul > li {
    padding-right: 20px;
    transition: all 0.8s ease-out;
    font-size: 20px;
  }

  .second-container > p {
    width: 85%;
    margin-left: 30px;
    line-height: 21px;
    margin-bottom: 40px;
  }

  .third > p {
    column-count: 1;
  }
}
</style>
