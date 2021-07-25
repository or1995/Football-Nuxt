<template>
  <header>
    <nuxt-link to="/" class="logo">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.775 17c1.164-3.451 6.225-6.519 6.225-17h-16c0 10.481 5.061 13.549 6.225 17h3.55zm-5.192-15c.012 4.066.877 8.291 3.058 11.952-2.723-3.055-4.786-6.732-5.023-11.952h1.965zm8.417 20.449v1.551h-10v-1.551c2.552 0 3.298-2.061 3.411-3.449h3.179c.112 1.389.785 3.449 3.41 3.449z"/></svg>
      </div>
      <h1>FBScores</h1>
    </nuxt-link>
    <div class="search">
      <button @click="() => {console.log('hi')}">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"/></svg>
      </button>
      <input type="text" placeholder="Search"/>
    </div>
    <ul class="links">
      <li>
        <nuxt-link class="link" to="/live">Live</nuxt-link>
      </li>
      <li class="splitter"></li>
      <li>
        <nuxt-link class="link" to="/">Matches</nuxt-link>
      </li>
      <li class="splitter"></li>
      <li>
        <nuxt-link class="link" to="/">Teams</nuxt-link>
      </li>
      <li class="splitter"></li>
      <li>
        <nuxt-link class="link" to="/leagues">Leagues</nuxt-link>
      </li>
      <li class="splitter"></li>
      <li>
        <nuxt-link class="link" to="/">Cups</nuxt-link>
      </li>
      <li></li>
    </ul>
  </header>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  header {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    background-color: var(--primary-color);
    box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.15);
    z-index: 100000;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
  }

  .logo div svg {
    fill: #fff;
    height: 2rem;
    width: 2rem;
  }

  .logo div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: .2rem;
    transform: rotate(-10deg);
  }

  .logo h1 {
    color: #fff;
    font-weight: 400;
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search input {
    border: none;
    background-color: var(--primary-light-color);
    outline: none;
    height: 2.5rem;
    width: 20rem;
    padding: 0 2.5rem;
    border-radius: .2rem;
    font-size: 1.2rem;
    color: var(--very-light-color);
  }

  .search input::placeholder {
    color: #fff;
  }

  .search button {
    z-index: 100000;
    margin-right: -2rem;
    background-color: transparent;
    border: none;
    outline: none;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }

  .search button svg {
    fill: #fff;
    height: 1.3rem;
    width: 1.3rem;
  }

  .links {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .splitter {
    height: 1.5rem;
    width: 2px;
    background-color: var(--champ);
  }

  .link {
    font-size: 1.6rem;
    text-decoration: none;
    color: #fff;
  }

  .link:hover {
    color: var(--champ);
  }
</style>