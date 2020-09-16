<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Username: {{ reverse() }} </p>
        <p> Age: {{ userAge }} </p>
        <button @click="resetName"> Reset </button>
        <button @click="resetFn"> Reset </button>
    </div>
</template>

<script>
    import {eventBus} from '../main';

    export default {
        props: {
            ten: {
                type: String,
                default: 'aaax'
            },
            resetFn: Function,
            userAge: {
                type: Number,
                default: 21
            }
        },
        created(){
            eventBus.$on('ageWasEdited', (data) => {
                this.userAge = data
            })
        },
        methods: {
            reverse(){
                return this.ten.split("").reverse().join("")
            },
            resetName(){
                this.ten = 'Nam';
                this.$emit('nameWasReset', this.ten)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
