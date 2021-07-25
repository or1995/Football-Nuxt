import axios from 'axios';

export const state = () => ({
    live: null,
    leagues: null,
    topLeagues: null,
    teams: null
  })

export const getters = {
    getLive(state) {
        return state.live
    },
    getLeagues(state) {
        return state.leagues
    },
    getTopLeagues(state) {
        return state.topLeagues
    },
    getTeams(state) {
        return state.teams
    }
}

export const mutations = {
    setLive(state, payload) {
        console.log(payload);
        payload.sort((a, b) => (b.priority > a.priority) ? 1 : -1)
        state.live = payload;
    },
    setLeagues(state, payload) {
        state.leagues = payload;
    },
    setTopLeagues(state, payload) {
        payload.sort((a, b) => (b.priority > a.priority) ? 1 : -1)
        state.topLeagues = payload;
    },
    setTeams(state, payload) {
        console.log(payload);
        payload.sort((a, b) => (b.priority > a.priority) ? 1 : -1)
        state.teams = payload;
    },
}

export const actions = {
    fetchLive(context) {
        const config = {
            headers: {
                'x-rapidapi-key': 'f0c82c56c2mshd85408f26f188edp1a67f8jsne460d9207b26',
                'x-rapidapi-host': 'sportscore1.p.rapidapi.com'
            }
        }
        axios.get('https://sportscore1.p.rapidapi.com/sports/1/events/live', config)
        .then(res => {
            context.commit('setLive', res.data.data);
        })
    },
    leaguesFetch(context, page) {
        const config = {
            headers: {
                'x-rapidapi-key': 'f0c82c56c2mshd85408f26f188edp1a67f8jsne460d9207b26',
                'x-rapidapi-host': 'sportscore1.p.rapidapi.com'
            }
        }
        axios.get(`https://sportscore1.p.rapidapi.com/sports/1/leagues?page=${page}`, config)
        .then(res => {
            context.commit('setLeagues', res.data.data);
        })          
    },
    topLeaguesFetch(context) {
        const config = {
            method: 'POST',
            url: 'https://sportscore1.p.rapidapi.com/leagues/search',
            params: {
                locale: 'en',
                priority_min: '150',
                sport_id: '1',
            },
            headers: {
                'x-rapidapi-key': 'f0c82c56c2mshd85408f26f188edp1a67f8jsne460d9207b26',
                'x-rapidapi-host': 'sportscore1.p.rapidapi.com'
            }
        }
        axios.request(config)
        .then(res => {
            context.commit('setTopLeagues', res.data.data);
        })
    },
    teamsFetch(context) {
        const config = {
            headers: {
                'x-rapidapi-key': 'f0c82c56c2mshd85408f26f188edp1a67f8jsne460d9207b26',
                'x-rapidapi-host': 'sportscore1.p.rapidapi.com'
            }
        }
        axios.get('https://sportscore1.p.rapidapi.com/sports/1/teams', config)
        .then(res => {
            context.commit('setTeams', res.data.data);
        })        
    }
}