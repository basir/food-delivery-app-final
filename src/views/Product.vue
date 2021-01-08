<template>
  <div class="about">
    <h1> {{state.product.name}}</h1>
    <p v-if="state.product">
      {{state.product.description}}
    </p>
  </div> 
</template> 

<script>
import { computed, onMounted, reactive } from 'vue';
import {useRoute} from 'vue-router'
import {useStore} from 'vuex';
import Axios from 'axios'
const Product = {
setup(){
  const state = reactive({product: {}})
  const store = useStore();
  const route = useRoute();
  const productId = computed(()=> route.params.productId);
  const user = computed(() => store.state.User.user);
  const setUserHandler = () => {
    store.dispatch('User/setUser', {name:'Basir'} );
  }
  onMounted(async() => {
      console.log('mounted!')
      const { data } = await Axios.get(`/api/products/${productId.value}`);
      state.product = data;
      
    })
  return {
    state,
    user,setUserHandler, productId
  }
}
}
export default Product;
</script>

<style>

</style>