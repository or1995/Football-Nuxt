<template>
  <div class="main">
    <Header/>
    <div class="watermark">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.775 17c1.164-3.451 6.225-6.519 6.225-17h-16c0 10.481 5.061 13.549 6.225 17h3.55zm-5.192-15c.012 4.066.877 8.291 3.058 11.952-2.723-3.055-4.786-6.732-5.023-11.952h1.965zm8.417 20.449v1.551h-10v-1.551c2.552 0 3.298-2.061 3.411-3.449h3.179c.112 1.389.785 3.449 3.41 3.449z"/></svg>
    </div>
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
export default {
  components: {
    Header
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700;800;900&display=swap');
  :root {
    --primary-color: #DB2B39;
    --primary-light-color: #da4a56;
    --secondary-color: #F3A712;
    --blue: #29335C;
    --blue-two: #242e57;
    --champ: #F0CEA0;
    --very-light-color: #E1EFE6;
    --light-color: #dfe0e0;
    --dark-color: #000411;
    --primary-font: 'Catamaran', sans-serif;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: var(--primary-font);
  }

  body {
    overflow-x: hidden;
    background-color: var(--blue);
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 10rem;
  }

  .container {
    width: 100%;
    margin-top: 6rem;
    z-index: 100;
  }

  .watermark {
    position: fixed;
    bottom: -10vh;
    right: -10vw;
  }

  .watermark svg {
    height: 95vh;
    z-index: 1;
    transform: rotate(-10deg);
    fill: var(--blue-two);
  }
</style>