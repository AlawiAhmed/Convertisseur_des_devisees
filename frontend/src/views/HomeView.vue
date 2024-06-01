<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid>
      <Test/>
      <Header />
      <Taux />
      <Devices />
      <Tchange />
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '@/components/NavBar.vue';
import Header from '@/components/Header.vue';
import Taux from '@/components/Taux.vue';
import Devices from '@/components/Devices.vue';
import Tchange from '@/components/Tchange.vue';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  components: {
    NavBar,Header,Taux,Devices,Tchange
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
