<template>
    <div>
        <div
            v-for="index in quoteArray.length"
            :key="index"
            class="d-inline-flex my-2"
        >
            <app-quote @deleteMe="quoteArray.splice(index-1,1) ">
                <div slot="quoteSentence" class="card-body pl-3">
                    {{ quoteArray[index - 1] }}
                </div>
            </app-quote>
        </div>
    </div>
</template>

<script>
import Quote from "./Quote";

export default {
    components: {
        appQuote: Quote,
    },
    props: {
        quoteArray: Array,
    },
};
</script>

<style scoped></style>
