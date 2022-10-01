<template>
  <div>
    <div :key="city.code" v-for="city in cities">
        {{ city.title }}
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            cities: [
                {title : '서울', code: '1'},
                {title : '부산', code: '2'},
                {title : '대구', code: '3'},
                {title : '김해', code: '4'}
            ]
        }
    }
}
</script>

<style>

</style>