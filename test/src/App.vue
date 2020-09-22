<template>
    <div class="container">
        <h2><b>Quote Added</b></h2>
        <appHeader :quoteArray="ColOfQuote"></appHeader>
        <appInput v-if="ColOfQuote.length < 10" @singleQuote="addQuote"></appInput>
        <appCoQ :quoteArray="ColOfQuote"></appCoQ>
        <p class="alert alert-primary" >Info: Click a quote to delete it!</p>
    </div>
</template>

<script>
import Header from "./components/Header";
import Input from "./components/Input";
import CollectionOfQuote from "./components/CollectionOfQuote";

export default {
    data: function() {
        return {
            ColOfQuote: [],
        }
    },
    components: {
        appHeader: Header,
        appInput: Input,
        appCoQ: CollectionOfQuote
    },
    methods: {
        addQuote(data){
            this.ColOfQuote.push(data);
            if (this.ColOfQuote.length == 10) alert('Less than 10. Delete to continue!!');
        },
    }
};
</script>

<style scoped>
    .container {
        margin-top: 20px;
    }
    p {
        text-align: center;
    }
</style>
