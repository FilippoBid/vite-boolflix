<script>
import{store,getExternalData} from "../store";

export default {

  data() {
    return {
        store,
     
    }
  },
  methods:{
    getExternalData,
    updateSearch(){

    }

  }
}
</script>


<template>
  <button @click="getExternalData()" class="btn btn-danger rounded-5 ">cerca</button>
  <input v-model="store.textInput" type="search" placeholder="cerca film">
</template>



<style>

</style>