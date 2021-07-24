<template>
  <p>{{live}}</p>
</template>

<script>
export default {
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

</style>