<template>
    <div class="container">
        <h1 v-purple>{{ msg }}</h1>
        <h1 v-color="'blue'">{{ msg }}</h1>
        <h1 v-if="show" v-switching-colors:slow.underline.uppercase="colors">{{ msg }}</h1>
        <hr/>
        <div v-if="show" class="largeBox" v-click-outside="onClickOutside">
            Click outside the box and then inside to see the difference
            <div class="mediumBox"></div>
        </div>
        <button class="btn btn-primary" @click="show = !show">Toggle the box</button>
        <hello/>
    </div>
</template>

<script>
import Hello from './components/Hello.vue'
    export default {
        data() {
            return {
                msg: 'Vue.js Custom Directives',
                colors: ['red', 'green', 'orange', 'lightblue'],
                show: true
            }
        },
        components: {
            Hello
        },
        methods: {
            onClickOutside() {
                alert('You clicked outside.')
            }
        }
    }
</script>

<style>
    .largeBox {
        width: 200px;
        height: 100px;
        border: 2px solid aqua;
        border-radius: 5px;
    }
    .mediumBox {
        width: 100px;
        height: 50px;
        border: 2px solid royalblue;
        border-radius: 5px;
    }
</style>
