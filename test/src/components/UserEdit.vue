<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p> Age: {{ age }} </p>
        <button @click="editAge"> Change Age </button>
        <p>Edit me!</p>
    </div>
</template>

<script>
    import {eventBus} from '../main';

    export default {
        props: {
            age: Number
        },
        methods: {
            editAge(){
                this.age = 90;
                eventBus.$emit('ageWasEdited', this.age)
            }
        }
    }

</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
