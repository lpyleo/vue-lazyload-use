<template>
    <div>
        <ul>
            <li v-for="img in imgsList">
                <img v-lazy="img">
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const imgsList = ref([])

imgsList.value.push(require(`../assets/imgs/1.jpg`))
imgsList.value.push(require(`../assets/imgs/2.jpg`))
imgsList.value.push(require(`../assets/imgs/3.jpg`))
imgsList.value.push(require(`../assets/imgs/4.jpeg`))
imgsList.value.push(require(`../assets/imgs/5.jpeg`))
imgsList.value.push(require(`../assets/imgs/6.jpg`))
imgsList.value.push(require(`../assets/imgs/7.jpeg`))
imgsList.value.push(require(`../assets/imgs/8.jpg`))
imgsList.value.push(require(`../assets/imgs/9.jpg`))
</script>

<style scoped>
img{
    width: 500px;
    height:400px
}
</style>