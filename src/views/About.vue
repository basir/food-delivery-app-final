<template>
  <div class="about">
    <h1>About {{user.name}}</h1>
  </div>
  <button @click="setUserHandler">Set name</button>
</template> 

<script>
import { computed } from 'vue';
import {useStore} from 'vuex';
export default {
setup(){
  const store = useStore();
  const user = computed(() => store.state.User.user);
  const setUserHandler = () => {
    store.dispatch('User/setUser', {name:'Basir'} );
  }
  return {
    user,setUserHandler
  }
}
}
</script>

<style>

</style>