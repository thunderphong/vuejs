<template>
    <div class="card mr-4 btn btn-outline-secondary btn-lg" type="button" @click="deleteQ">
        <slot name="quoteSentence"></slot>
    </div>
</template>

<script>
export default {
    methods: {
        deleteQ(){
            this.$emit('deleteMe', undefined)
        }
    }
};
</script>

<style scoped>
    * {
        font-family:'Arizonia', 'Arial Narrow', Arial, sans-serif;
        font-size: 40px
    }
</style>
