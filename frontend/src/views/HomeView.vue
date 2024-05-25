<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid>
      <Test/>
      <Header />
      <Taux />
      <Devices />
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

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      amount: null,
      recipientAmount: null,
      fromCurrency: null,
      toCurrency: null,
      currencies: ["USD", "EUR", "GBP", "JPY"], // Example currencies
    }
  },
  methods: {
    // convert() {
    //   // Perform currency conversion logic here
    //   // This will likely involve fetching exchange rates from an API
    //   const rate = 1.2; // Placeholder exchange rate
    //   this.convertedAmount = (this.amount * rate).toFixed(2);
    // },
    convertCurrency() {
      // Implement currency conversion logic
      console.log("Convert", this.amount, this.fromCurrency, "to", this.toCurrency);
    },
    transferMoney() {
      // Implement money transfer logic
      console.log("Transfer", this.transferAmount, this.sendCurrency, "to", this.receiveCurrency);
    }
  },
  components: {
    NavBar,Header,Taux,Devices
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
