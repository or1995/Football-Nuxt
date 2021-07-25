<template>
    <div class="live">
        <div class="livetitle">
            <h2>LIVE MATCHES</h2>
        </div>
        <div class="scores">
            <score-board v-for="event in live" :key="event.id" :home="event.home_team.name" :away="event.away_team.name" :homescore="event.home_score.current" :awayscore="event.away_score.current" :time="event.status_more"/>
        </div>
    </div>
</template>

<script>
import ScoreBoard from '../components/ScoreBoard.vue';
export default {
    components: {
        ScoreBoard
    },
    created() {
        this.$store.dispatch('fetchLive');
    },
    computed: {
        live() {
            return this.$store.getters.getLive
        }
    }
}
</script>

<style>
    .live {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .livetitle {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .livetitle div {
        height: 4px;
        background-color: var(--blue);
    }

    .livetitle h2{
        font-size: 2rem;
        font-weight: 500;
        color: #fff;
        text-shadow: 0px 1px 3px rgba(0,0,0,0.2);
    }
</style>