<template>
    <div>
        <h1>
            {{ message }}, {{ userName }}
        </h1>
        <p>your array is {{ array }}.
            <br/>
            and your object is {{ object }}.</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userName: 'Ubin Park',
            message: 'Hello',
            array: [],
            object: {},
        }
    }
}
</script>
<style scoped>
.text-red {
    color: red;
}
</style>