<template>
<div class="leaguescontainer">
    <div class="toptitle">
        <h2>TOP LEAGUES</h2>
    </div>
    <div class="topleagues">
        <nuxt-link v-for="league in topLeagues" :key="league.id" :to="'/' + league.slug" class="leaguelink">
            <div class="league">
                <img :src="league.logo"/>
                <h3>{{league.name}}</h3>
            </div>
        </nuxt-link>
    </div>
    <div class="toptitle">
        <h2>ALL LEAGUES</h2>
    </div>
    <div class="leagues">
        <nuxt-link v-for="league in leagues" :key="league.id" :to="'/' + league.slug" class="leaguelink">
            <div class="league">
                <img :src="league.logo"/>
                <h3>{{league.name}}</h3>
            </div>
        </nuxt-link>
    </div>
    <div class="pagination">
        <button class="pagbutton rev" @click="first" :disabled="page === 1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"/></svg>
        </button>
        <button class="pagbutton" @click="prev" :disabled="page === 1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
        </button>
        <div class="page">{{page}}</div>
        <button class="pagbutton rev" @click="next" :disabled="page === 27">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
        </button>
        <button class="pagbutton" @click="last"  :disabled="page === 27">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"/></svg>
        </button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            page: 1
        }
    },
    created() {
        this.$store.dispatch('topLeaguesFetch');
        this.$store.dispatch('leaguesFetch', this.page);
    },
    computed: {
        topLeagues() {
            return this.$store.getters.getTopLeagues;
        },
        leagues() {
            return this.$store.getters.getLeagues;
        }
    },
    methods: {
        next() {
            if(this.page !== 27) {
                this.page++;
                this.$store.dispatch('leaguesFetch', this.page);
            }
        },
        prev() {
            if(this.page !== 1) {
                this.page--;
                this.$store.dispatch('leaguesFetch', this.page);
            }            
        },
        first() {
            this.page = 1;
            this.$store.dispatch('leaguesFetch', this.page);
        },
        last() {
            this.page = 27;
            this.$store.dispatch('leaguesFetch', this.page);            
        }
    }
}
</script>

<style>
    .toptitle {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .toptitle div {
        height: 4px;
        background-color: var(--blue);
    }

    .toptitle h2{
        font-size: 2rem;
        font-weight: 500;
        color: #fff;
        text-shadow: 0px 1px 3px rgba(0,0,0,0.2);
    }

    .topleagues {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1.2rem;
        margin-bottom: 4rem;
    }

    .leagues {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1.2rem;
    }

    .leaguelink {
        text-decoration: none;
        opacity: .9;
    }

    .leaguelink:hover {
        opacity: 1;
    }

    .league {
        background-color: var(--blue-light);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 14rem;
        border-radius: 4px;
        /*box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.15);*/
        padding: 1rem;
        border-bottom: 3px solid var(--champ);
    }

    .league:hover {
        background-color: var(--blue-lighter);
    }

    .league img {
        height: 7rem;
        width: auto;
        margin-bottom: .5rem;
    }

    .league h3 {
        font-size: 1.1rem;
        font-weight: 400;
        color: #fff;
        outline: none;
        text-decoration: none;
    }

    .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        margin-top: 1rem;
    }

    .pagination button {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 2px;
        outline: none;
        border: none;
        margin: 1rem 0;
        background-color: var(--primary-color);
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pagination button:disabled {
        background-color: var(--blue-light);
        cursor: default;
    }

    .pagination button svg {
        height: .8rem;
        fill: #fff;
    }

    .rev {
        transform-origin: center;
        transform: rotate(180deg)
    }

    .page {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 2px;
        outline: none;
        border: none;
        margin: 1rem 0;
        background-color: #fff;
        color: var(--primary-color);
        font-weight: 600;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>