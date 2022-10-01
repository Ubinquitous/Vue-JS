<template>
  <div>
    <input type="text" name="" id="" v-bind:value="userId" readonly />
    <br />
    <input type="text" name="" id="" :value="userId" readonly />
    <br />
    <br />
    <img :src="imgSrc" alt="" style="width: 100px; height: auto;" />
    <br />
    <br />
    <input type="search" name="" id="" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
    <h1>Shout out to soft0725</h1>
    <a href="https://github.com/soft0725" target="_blank">Link</a>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";

export default class extends Vue {
    data(){
        return {
            userId: 'this is readonly mode.',
            imgSrc: 'https://avatars.githubusercontent.com/u/83104885?v=4',
            txt1: ''
        }
    }
}
</script>

<style>

</style>