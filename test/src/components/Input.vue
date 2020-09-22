<template>
    <div class="form-group text-center">
        <textarea name="input" class="form-control" cols="20" rows="8" v-model="quote"></textarea>
        <button class="btn btn-primary" @click.prevent="handleQuote">Add Quote</button>
    </div>
</template>

<script>

export default {
    data: function(){
        return {
            quote: '',
        }
    },
    methods: {
        handleQuote() {
            this.$emit('singleQuote', this.quote);
            this.quote = ''
        }
    }
};
</script>

<style scoped>
    button {
        margin-top: 10px;
    }
</style>
