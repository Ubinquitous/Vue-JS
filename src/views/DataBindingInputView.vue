<template>
  <div>
    <input type="text" v-model="userId" id="userIdInput"/>
    <button @click="function1">alert</button>
    <button @click="function2">change</button>
    <h1>{{ userId }} | {{ num1 }} | {{ num2 }}</h1>
    <h1>{{ result }}</h1>
    <button @click="plusFunc1">(1)+</button>
    <button @click="minusFunc1">(1)-</button>
    <br/>
    <button @click="plusFunc2">(2)+</button>
    <button @click="minusFunc2">(2)-</button>
    <br/>
    <button @click="deleteFunc">x</button>
    <button @click="resultFunc">o</button>
  </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            userId: 'ubin329',
            num1: localStorage.getItem('number1') === null ? 0 : localStorage.getItem('number1'),
            num2: localStorage.getItem('number2') === null ? 0 : localStorage.getItem('number2'),
            result: 0,
        }
    },
    methods: {
        function1(){
            alert(`Your input value is ${this.userId}.`)
        },
        function2(){
          this.userId = "Ubin"  
        },

        plusFunc1(){
            localStorage.setItem('number1', this.num1+1);
            this.num1++;
        },
        minusFunc1(){
            localStorage.setItem('number1', this.num1-1);
            this.num1--;
        },
        deleteFunc(){
            localStorage.removeItem('number1');
            localStorage.removeItem('number2');
            this.num1 = 0;
            this.num2 = 0;
        },

        plusFunc2(){
            localStorage.setItem('number2', this.num2+1);
            this.num2++;
        },
        minusFunc2(){
            localStorage.setItem('number2', this.num2-1);
            this.num2--;
        },

        resultFunc(){
            if(localStorage.getItem('number1') === null || localStorage.getItem('number2') === null){
                alert(`num에 값이 없습니다!`);
                this.result = 0;
            } else {
                this.result = parseInt(localStorage.getItem('number1')) + parseInt(localStorage.getItem('number2'));
            }
        }
    }
}
</script>

<style>
#userIdInput {
    outline: none;
    background-color: none;
    border:none;
    border-bottom: 3px solid #000;
    width:200px;
    text-align: center;
}
</style>