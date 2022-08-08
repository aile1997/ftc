<script setup lang="ts">
import Purpose from "@/assets/api/purpose.js";
import { onMounted } from "vue";
// watch(
//   () => router.currentRoute.value.path,
//   (newValue, oldValue) => {
//     if (newValue === "/kyc") window.location.reload();
//     // console.log("watch", newValue);
//   }
// );
onMounted(() => {
  Purpose();
});
</script>
<template>
  <div class="about">
    <div class="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div id="loading-text-intro"><p>Loading</p></div>
    <img src="/textures/folktech.png" class="folktech" alt="" />
    <div class="main-container" style="visibility: hidden">
      <div class="first">
        <h2>Club</h2>
        <h1>FOLK TECH</h1>
        <p>
          focktechhello world! Ready to start writing on the mirror It mainly focuses on two aspects: 1. The trading views of crypto secondary market are
          updated synchronously with TradingView. At present, the TV account has 100+ fans, which are all real people, and there are many old leeks with more
          than 3-4 years of trading experience. Including but not limited to Gamefi, Socialfi, Web3 and Metaverse
        </p>
      </div>

      <div class="section second">
        <div class="second-container">
          <ul>
            <li id="aglaea" class="active">Aglaea</li>
            <li id="thalia"><a>Thalia</a></li>
            <li id="euphre">Euphre</li>
          </ul>
          <p id="content">
            She was venerated as the goddess of beauty, splendor, glory, magnificence, and adornment. She is the youngest of the Charites according to Hesiod.
            Aglaea is one of three daughters of Zeus and either the Oceanid Eurynome, or of Eunomia, the goddess of good order and lawful conduct. we have a
            beautiful family.
          </p>
        </div>
        <div id="canvas-container-details"></div>
      </div>

      <div class="third">
        <h1>Welcome In</h1>
        <p>
          Hope the family to play together to make money, look at the plate or billing can ⏰· market short term to share ideas, loss of money also timely 📍·
          thought cliff introspection, more records of their own trading road; You can share your daily life in daily life, and take an active part in dc
          construction.<br /><br />
          Juno brother for everyone's transaction all-round service, of course, we also want to jointly protect our Juno brother, let's agree: The information
          in DC is for the use of shareholders only. Commercial use and leakage are strictly prohibited Any form of soft advertising is prohibited in DC, such
          as other projects, other organizations without verification
        </p>
      </div>
      <div id="canvas-container" class="fixed"></div>
      <h4 class="footer">
        Created by Aile based on
        <a href="https://dribbble.com/shots/6767548-The-Three-Graces-Concept" target="_blank">Tom Bogner Design</a>.
        <a href="https://sketchfab.com/3d-models/3d-printable-the-three-graces-58e0ae19e2984b86883edc41bf43415a" target="_blank">Free model credits</a>
      </h4>
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  overscroll-behavior: none;
  font-family: "Nanum Myeongjo", serif;
  color: #fff;
  background: #050505;
  scroll-behavior: smooth;
  overflow: hidden;
}
body::-webkit-scrollbar {
  display: none;
}
/* .about {
  position: absolute;
  top: 100vh;
} */

.lds-roller {
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 5;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #f9f0ec;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#loading-text-intro {
  z-index: 3;
  position: absolute;
  width: 100vw;
  height: 100vh;
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 100;
  color: #f9f0ec;
  background: radial-gradient(circle at center center, #5d5d5d 0, #090909 58%);
}

/* #loading-text-intro.ended {
  transform: translateY(200%);
} */

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

/* .cursor:has(.a:hover){
    transform: translate(-50%, -50%) scale(4); opacity: 0.3;
} */

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

.dg.ac {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 2 !important; /* TODO Solve this in HTML */
}

#canvas-container {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  outline: none;
  z-index: 0;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background: #011738;
  background: radial-gradient(circle at center center, #011738 0, #070713 58%);
}

#canvas-container-details {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  outline: none;
  z-index: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  pointer-events: all;
  overflow: hidden;
}

.section {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* display: flex; */
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding-left: 5%;
  padding-right: 5%;
  z-index: 1;
  width: 65%;
  height: 100vh;
  pointer-events: none;
}

.header {
  position: absolute;
  left: -2em;
  color: #fff;
  font-size: 0.8em;
  width: 100%;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  z-index: 2;
  opacity: 0;
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

.first {
  pointer-events: none;
  font-size: 2em;
  letter-spacing: 0.5em;
  text-align: center;
  width: 100%;
  display: flex;
  height: 120vh;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  z-index: 1;
  background: linear-gradient(0deg, rgba(5, 5, 5, 1) 20%, rgba(5, 5, 5, 0) 50%);
}

.first > h2 {
  font-size: 1em;
  line-height: 0;
  font-weight: 100;
  letter-spacing: 0.25em;
  font-style: italic;
  margin: 35px;
}
.first > h1 {
  margin: 10px 0;
  font-weight: 100;

  letter-spacing: 0.4em;
}

.first > h1:after {
  content: "";
  position: absolute;
  margin-top: 105px;
  left: calc(50% - 25px);
  width: 50px;
  height: 2px;
  background: #ffffff70;
}

.first > p {
  font-size: 13px;
  letter-spacing: 0px;
  font-family: sans-serif;
  width: 700px;
  line-height: 28px;
  font-weight: lighter;
  margin-top: 50px;
  margin-bottom: 100px;
  color: #ffffffe7;
  opacity: 0;
  transition: all 3.9s ease-in-out;
}

.first > p.ended {
  opacity: 1;
}

.second {
  pointer-events: all;
  font-size: 2em;
  width: 100%;
  display: flex;
  height: 100vh;
  background: #141414;
  z-index: 1;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.second-container {
  pointer-events: all;
  width: 100%;
  display: flex;
  height: 100vh;
  margin: 0;
  padding: 0 10%;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  background: #011738;
  background: radial-gradient(circle at center center, #0117385a 0, #07071381 58%);
}

.second-container > ul {
  list-style: none;
  display: inline-flex;
  padding: 0px;
  margin: 0px 0px 30px 60px;
  font-family: "DM Serif Display", serif;
  color: #ffffff1c;
  z-index: 2;
}

.second-container > ul > li.active:after {
  content: "";
  top: 20px;
  width: 50px;
  height: 2px;
  background: #fff;
  position: relative;
  left: 0px;
  display: block;
}

.second-container > ul > li {
  padding-right: 20px;
  transition: all 0.8s ease-out;
}

.second-container > ul > li:hover {
  color: whitesmoke;
  pointer-events: all;
  cursor: pointer;
}

.second-container > ul > li:hover ~ nav.header.ended.cursor {
  transform: translate(-50%, -50%) scale(5);
  opacity: 1;
}

.second-container > ul > li.active {
  color: whitesmoke;
}

.second-container > p {
  font-size: 14px;
  font-family: sans-serif;
  line-height: 24px;
  width: 30%;
  color: whitesmoke;
  margin-left: 60px;
  height: 200px;
}

.third {
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.third > h1 {
  font-size: 15vw;
  font-weight: 100;
  letter-spacing: -6px;
  color: whitesmoke;
  margin: 40px 0;
  padding: 0;
}

.third > p {
  column-count: 2;
  column-gap: 40px;
  width: 80%;
  font-size: 13px;
  font-family: sans-serif;
  font-weight: 100;
  line-height: 28px;
  height: 180px;
  color: whitesmoke;
}

.footer {
  border: none;
  width: 100%;
  margin-bottom: 40px;
  opacity: 1;
  font-family: sans-serif;
  font-size: 7px;
  transition: all 0.8s ease-out 1.1s;
  bottom: 0;
  color: antiquewhite;
  font-weight: 100;
  opacity: 0.2;
  text-align: center;
}

.footer a {
  text-decoration: none;
  pointer-events: auto;
  color: antiquewhite;
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

.folktech {
  position: absolute;
  width: 10rem;
  height: 2.5rem;
  top: 2.5rem;
  left: 1rem;
  z-index: 99999;
}
</style>
