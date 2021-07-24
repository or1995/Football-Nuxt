<template>
  <div class="main">
    <Header/>
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

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    padding: 0 5rem;
  }

  .container {
    width: 100%;
    margin-top: 5rem;
  }
</style>