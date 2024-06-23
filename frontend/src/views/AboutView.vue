<template>
  <v-app>
    <NavBar />
      <v-container fluid>
      <Test/>
      <Dchange />
    </v-container>
    
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '@/components/NavBar.vue';
import Dchange from '@/components/Dchange.vue';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  components: {
    NavBar,Dchange
  },
  
});
</script>
<style scoped>
@media (min-width: 1282px){
  .v-container {
    padding: 1.8% 0;
  }
}
@media (min-width: 1025px) and (max-width: 1282px){
.v-container {
    padding: 1.8% 0;
  }
}
@media (min-width: 767px) and (max-width: 1024px){
  .v-container {
    padding: 1.8% 0;
  }
}
@media (min-width: 481px) and (max-width: 767px) {
.v-container {
    padding: 1.8% 0;
  }
}
</style>
