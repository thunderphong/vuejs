<template>
    <div>
        <div class="progress">
            <div
                class="progress-bar"
                role="progressbar"
                :style="{width: quoteArray.length * 10 + '%'}"
                aria-valuenow='100'
                aria-valuemin="0"
                aria-valuemax="100"
            > {{ quoteArray.length * 10 }} / 100</div>
            
        </div>
    </div>
</template>

<script>

export default {
    props: {
        quoteArray: Array
    },
};
</script>

<style scoped>
.progress {
    margin: 20px 0px;
}
</style>
