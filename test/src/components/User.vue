<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p> {{ name }} </p>
        <p> {{ userAge }} </p>
        <button @click="changeName"> Change name </button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6"> <app-user-detail 
                :ten="name" @nameWasReset="name = $event" :resetFn="resetName">
                </app-user-detail></div>
            <div class="col-xs-12 col-sm-6"> <app-user-edit :age="userAge" ></app-user-edit></div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
            return {
                name: 'Nam',
                userAge: '21'
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
            changeName(){
                this.name = 'Phuong'
            },
            resetName(){
                this.name = 'Nam'
            }
        }
    }
</script>

<style>
    div {
        background-color: lightblue;
    }
</style>
