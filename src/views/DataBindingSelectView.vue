<template>
  <div>
    <select name="" id="" v-model="selectedCity">
        <option value="055">김해</option>
        <option value="02">서울</option>
        <option value="051">부산</option>
        <option value="064">제주</option>
    </select>
    <h1>{{ selectedCity }}</h1>

    <HelloWorld msg="Welcome to My Select View"/>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Options({
    components: {
        HelloWorld
    }
})

export default class HomeView extends Vue {
    data(){
        return {
            selectedCity: '055'
        }
    }
    methods(){
    }
}
</script>

<style>

</style>