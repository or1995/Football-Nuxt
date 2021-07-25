<template>
  <div class="scoreboard">
      <div class="time">{{time}}</div>
      <div class="home">{{home}}</div>
      <div class="score">
          <div class="homescore">{{homescore}}</div>
          <div class="awayscore">{{awayscore}}</div>
      </div>
      <div class="away">{{away}}</div>
  </div>
</template>

<script>
export default {
    props: ['home','away','time','tor', 'homescore', 'awayscore']
}
</script>

<style scoped>
    .scoreboard {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--primary-color);
        margin-top: 1rem;
        width: 50rem;
        height: 3rem;
        color: #fff;
        border-radius: 4px;
        box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.15);
    }

    .time {
        width: 15%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--champ);
        color: var(--blue);
        font-size: 1.5rem;
        font-weight: 400;
        text-transform: uppercase;
    }

    .home {
        width: 35%;
        font-size: 1.2rem;
        font-weight: 400;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .score {
        display: flex;
        background-color: var(--light-color);
        width: 15%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: var(--blue);
    }

    .homescore {
        font-size: 1.7rem;
        font-weight: 500;
    }

    .awayscore {
        font-size: 1.7rem;
        font-weight: 500;
    }

    .away {
        width: 35%;
        font-size: 1.2rem;
        font-weight: 400;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>