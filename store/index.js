import axios from 'axios';

export const state = () => ({
    live: null
  })

export const getters = {
    getLive(state) {
        return state.live
    }
}

export const mutations = {
    setLive(state, payload) {
        state.live = payload;
    }
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
    }
}