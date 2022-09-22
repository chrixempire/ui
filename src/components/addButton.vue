<template>
    <button @click="onclick" :style="{background : color}" :class="btn">{{text}}</button>

</template>

<script>
export default {
    name:"addButton",
    props:{
        text: String,
        color: String,
    },
    methods:{
        onclick(){
            console.log('click')
            this.$emit('btnClick')
        }
    }
}
</script>

<style scoped>

</style>