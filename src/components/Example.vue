<template>
    <selection id="main">
        <div class="conteiner">
            <h1>Webpack message: {{ message }}</h1>
        </div>
    </selection>
</template>

<style lang="scss" scoped>
    h1{
        color: greenyellow;
    }
</style>

<script>
export default {
    data() {
        return { 
            message: null,
        }
    },
    created() {
        this.message = this.$store.getters.getMessage
    }
}
</script>


