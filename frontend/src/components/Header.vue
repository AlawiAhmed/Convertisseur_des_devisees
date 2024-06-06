<template>
  <v-row class="head">
    <v-card-title class="card-title">Convertisseur de devises <br> Vérifier les taux de change en temps
      réel</v-card-title>
    <v-col cols="12" md="12" class="box">
      <!-- Currency Converter Form -->
      <v-form class="currency-form" @submit.prevent="fetchData">
        <v-row class="table-boxs">
          <div cols="12" md="12" class="table-boxes">
            <v-col cols="12" md="12" class="table-box1">
              <h4 class="title-text">Vous envoyez exactement</h4>
            </v-col>
            <v-col cols="12" md="12" class="table-box2">
              <v-text-field v-model="amount" label="Montant à convertir" type="number"></v-text-field>
              <v-select v-model="fromCurrency" :items="currencies" label="De la devise" item-value="code"
                item-text="name">
              </v-select>
            </v-col>
            <v-col cols="12" md="12" class="text-affiche1">
              <v-icon color=#E1D0D0 left class="mr-0">fas fa-credit-card</v-icon>
              <h4> Frais de virement : <b> {{ amounts  }} {{ toCurrency }}</b></h4>
            </v-col>
            <v-col class="text-affiche3">
              <v-icon color=#E1D0D0 left class="mr-0">fas fa-money-check-dollar</v-icon>
              <h4> Montant total à convertir : <b>{{ totals }} {{ toCurrency }}</b></h4>
            </v-col>
          </div>
          <div cols="12" md="12" class="table-box">
            <v-col cols="12" md="12" class="table-box3">
              <h4 class="title-text">Récipiendaires Gets</h4>
            </v-col>
            <v-col cols="12" md="12" class="table-box4">
              <v-text-field v-model="amountes" label="Montant à convertir" type="number" disabled="true"></v-text-field>
              <v-select v-model="toCurrency" :items="currencies" label="Vers la devise"></v-select>
            </v-col>
            <v-col cols="12" md="20" class="text-affiche2">
              <v-icon color=#E1D0D0 left class="mr-0">fas fa-clock</v-icon>
              <h4> Arrivée prévue : <b>{{ lastUpdate }}</b></h4>
            </v-col>
          </div>
        </v-row>
        <v-btn class="currency-btn" type="submit">Commancez</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      data: [],
      amount: '1',
      amounts: null,
      amountes: null,
      recipientAmount: null,
      fromCurrency: 'EUR',
      toCurrency: 'USD',
      lastUpdate: "",
      rate: 1,
      totals: "",
      currencies: [
        "USD",
        "AED",
        "AFN",
        "ALL",
        "AMD",
        "ANG", 
        "AOA",
        "ARS",
        "AUD",
        "AWG", 
        "AZN", 
        "BAM", 
        "BBD", 
        "BDT", 
        "BGN", 
        "BHD", 
        "BIF", 
        "BMD", 
        "BND", 
        "BOB", 
        "BRL", 
        "BSD", 
        "BTN", 
        "BWP", 
        "BYN", 
        "BZD", 
        "CAD", 
        "CDF",
        "CHF", 
        "CLP",
        "CNY", 
        "COP",
        "CRC",
        "CUP",
        "CVE",
        "CZK",
        "DJF", 
        "DKK", 
        "DOP", 
        "DZD",
        "EGP", 
        "ERN", 
        "ETB", 
        "EUR", 
        "FJD", 
        "FKP", 
        "FOK", 
        "GBP", 
        "GEL", 
        "GGP", 
        "GHS", 
        "GIP", 
        "GMD", 
        "GNF", 
        "GTQ", 
        "GYD", 
        "HKD", 
        "HNL", 
        "HRK", 
        "HTG", 
        "HUF", 
        "IDR", 
        "ILS", 
        "IMP", 
        "INR", 
        "IQD", 
        "IRR", 
        "ISK", 
        "JEP", 
        "JMD", 
        "JOD", 
        "JPY", 
        "KES", 
        "KGS", 
        "KHR", 
        "KID", 
        "KMF", 
        "KRW", 
        "KWD", 
        "KYD", 
        "KZT", 
        "LAK", 
        "LBP", 
        "LKR",
        "LRD", 
        "LSL", 
        "LYD", 
        "MAD", 
        "MDL", 
        "MGA", 
        "MKD", 
        "MMK", 
        "MNT", 
        "MOP", 
        "MRU", 
        "MUR", 
        "MVR", 
        "MWK", 
        "MXN", 
        "MYR", 
        "MZN", 
        "NAD", 
        "NGN", 
        "NIO", 
        "NOK", 
        "NPR", 
        "NZD", 
        "OMR", 
        "PAB", 
        "PEN", 
        "PGK", 
        "PHP", 
        "PKR", 
        "PLN", 
        "PYG", 
        "QAR", 
        "RON", 
        "RSD", 
        "RUB", 
        "RWF", 
        "SAR", 
        "SBD", 
        "SCR", 
        "SDG", 
        "SEK", 
        "SGD", 
        "SHP", 
        "SLE", 
        "SLL", 
        "SOS", 
        "SRD",
        "SSP",
        "STN",
        "SYP",
        "SZL",
        "THB",
        "TJS",
        "TMT",
        "TND",
        "TOP",
        "TRY",
        "TTD",
        "TVD",
        "TWD",
        "TZS",
        "UAH",
        "UGX",
        "UYU",
        "UZS",
        "VES",
        "VND",
        "VUV",
        "WST",
        "XAF",
        "XCD",
        "XDR",
        "XOF",
        "XPF",
        "YER",
        "ZAR",
        "ZMW",
        "ZWL",],
    }
  },
  methods: {
    convert() {
      // Perform currency conversion logic here
      // This will likely involve fetching exchange rates from an API
      const rate = 1.2; // Placeholder exchange rate
      this.convertedAmount = (this.amount * rate).toFixed(2);
    },
    convertCurrency() {
      // Implement currency conversion logic
      console.log("Convert", this.amount, this.fromCurrency, "to", this.toCurrency);
    },
    transferMoney() {
      // Implement money transfer logic
      console.log("Transfer", this.transferAmount, this.sendCurrency, "to", this.receiveCurrency);
    },
    fetchData() {
      // fetch(`https://v6.exchangerate-api.com/v6/8f9a008d00c03155895ab447/latest/${this.fromCurrency}`)
      // fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=cb1675f2fb5141a9ba6d8020b0d3fb8b`)
      fetch(`https://cdn.moneyconvert.net/api/latest.json`)
        .then(res => res.json())
        .then(data =>{
          this.data = data;
          this.rate = Number(data.rates[this.fromCurrency]).toFixed(2)
          // this.rate = (this.arrt).toFixed(2)
          // this.arrts = Number(data.rates[this.toCurrency])
          // this.amount = (this.arrts).toFixed(2)
          this.amountes = (this.amount * data.rates[this.fromCurrency]).toFixed(2);
          
          // this.amountes = (this.amount * this.rate).toFixed(2);
          this.total = ((this.amount * this.rate) * 0.20).toFixed(2);
          this.totals = (Number(this.total) + Number(this.amountes)).toFixed(2);
          this.lastUpdate = new Date(data.lastupdate).toLocaleString();
          this.amounts = (this.totals - this.amountes).toFixed(2);
          // this.convertedAmount = (this.amount * this.rate).toFixed(2);
          // this.times = data.date;
        })
    },
    
  },
  mounted() {
    this.fetchData();
    
  },

});

</script>
<style scoped>
@media (min-width: 1282px) {
  .head {
    content: " ";
    display: flex;
    position: absolute;
    padding: 0.8%;
    color: #E7ECF6;
    height: 760px;
    width: 100%;
    background: #E7ECF6;
  }

  .box {
    content: " ";
    display: grid;
    position: absolute;
    margin-top: 15.8%;
    margin-left: 5.2%;
    height: 450px;
    width: 90%;
    background: #0a2157;
    border: #ffffff solid 7px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgb(123, 128, 141);
  }

  .card-title {
    position: absolute;
    padding-top: 3%;
    width: 100%;
    color: #021946;
    font-size: 3.5em;
    text-align: center;
    font-weight: bold;
  }

  .table-boxs {
    padding-left: 3.2%;
    padding-top: 3.5%;
    width: 98%;
  }

  .title-text {
    text-align: left;
    font-size: 1.8rem;
  }

  .table-boxs {
    padding-top: 2%;
    padding-left: 4%;
  }

  .table-box,
  .table-boxes {
    width: 50%;
  }

  .table-box1,
  .table-box2,
  .table-box3,
  .table-box4 {
    display: flex;
    padding: 0px;
    width: 100%;
  }

  .table-box3,
  .table-box4 {
    padding-left: 5%;
  }

  .title-text {
    text-align: left;
    padding-top: 2%;
    margin-left: 2%;
    font-size: 120%;
    font-weight: normal;
  }

  .v-icon {
    padding-top: 2%;
  }

  .text-affiche3,
  .text-affiche1,
  .text-affiche2 {
    display: flex;
    text-align: left;
    padding-top: 6%;
    font-size: 142%;
    padding: 0px 0px 0px 0px;
    margin-top: 10px;
  }

  .text-affiche2 {
    margin-left: 25px;
  }

  .text-affiche3 {
    margin-top: 20px;
  }

  .text-affiche3 h4,
  .text-affiche1 h4,
  .text-affiche2 h4 {
    padding-top: 2%;
    padding-left: 1.7%;
    font-size: 120.5%;
    font-weight: normal;
  }

  .v-text-field,
  .v-select {
    margin-top: 0.5rem;
  }

  .v-select {
    width: 60%;
  }

  .currency-form {
    margin-top: 1%;
  }

  .currency-btn {
    margin-top: 5%;
    margin-left: 80%;
    background-color: #ffffff;
    color: rgb(23, 0, 113);
    width: 16%;
    height: 12%;
    font-size: 150%;
  }

  .currency-btn:hover {
    background-color: #bfc4cd;
  }
}

@media (min-width: 1025px) and (max-width: 1282px) {
  .head {
    content: " ";
    display: flex;
    position: absolute;
    padding: 0.8%;
    color: #E7ECF6;
    height: 760px;
    width: 100%;
    background: #E7ECF6;
  }

  .box {
    content: " ";
    display: grid;
    position: absolute;
    margin-top: 18%;
    margin-left: 5.5%;
    height: 390px;
    width: 90%;
    background: #0a2157;
    border: #ffffff solid 7px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgb(123, 128, 141);
  }

  .card-title {
    /* Style the card title */
    position: absolute;
    padding-top: 6%;
    width: 100%;
    color: #021946;
    font-size: 2.6em;
    text-align: center;
    font-weight: bold;
  }

  .table-boxs {
    padding: 1.2%;
    padding-left: 4%;
    width: 98%;
  }

  .table-box {
    width: 50%;
  }

  .table-boxes {
    width: 50%;
  }

  .table-box1,
  .table-box2 {
    display: flex;
    padding: 0px;
    width: 100%;
  }

  .table-box3,
  .table-box4 {
    display: flex;
    padding: 0px;
    padding-left: 5%;
    width: 100%;
  }

  .title-text {
    text-align: left;
    padding-top: 2%;
    margin-left: 5%;
    font-size: 100%;
    font-weight: normal;
  }

  .v-icon {
    padding-top: 0.8%;
  }

  .text-affiche3,
  .text-affiche1,
  .text-affiche2 {
    display: flex;
    text-align: left;
    padding: 0px 0px 0px 0px;
    margin-left: 1%;
    font-size: 130%;
  }

  .text-affiche2 {
    margin-left: 25px;
  }

  .text-affiche3 {
    margin-top: 20px;
  }

  .text-affiche3 h4,
  .text-affiche1 h4,
  .text-affiche2 h4 {
    padding-top: 2%;
    padding-left: 1.7%;
    font-size: 101.8%;
    font-weight: normal;
  }

  .text-affiche2 h4 {
    padding-top: 1.3%
  }

  .v-text-field,
  .v-select {
    margin-bottom: 1rem;
  }

  .v-select {
    width: 60%;
  }

  .currency-form {
    margin-top: 1%;
  }

  .currency-btn {
    margin-top: 5%;
    margin-left: 3%;
    background-color: #ffffff;
    /* Green color */
    color: rgb(23, 0, 113);
    width: 16%;
    height: 12%;
    font-size: 100%;
    font-weight: bold;
  }

  .currency-btn:hover {
    background-color: #bfc4cd;
    /* Darker green on hover */
  }
}

@media (min-width: 767px) and (max-width: 1024px) {
  .head {
    content: " ";
    display: flex;
    position: absolute;
    padding: 0.8%;
    color: #E7ECF6;
    height: 760px;
    width: 100%;
    background: #E7ECF6;
  }

  .box {
    content: " ";
    display: grid;
    position: absolute;
    margin-top: 23%;
    margin-left: 5.5%;
    height: 390px;
    width: 90%;
    background: #0a2157;
    border: #ffffff solid 7px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgb(123, 128, 141);
  }

  .card-title {
    /* Style the card title */
    position: absolute;
    padding-top: 7%;
    width: 100%;
    color: #021946;
    font-size: 2.2em;
    text-align: center;
    font-weight: bold;
  }

  .table-boxs {
    /* display: flex; */
    padding-left: 3.2%;
    padding-top: 3%;
    width: 98%;
  }

  .table-box3,
  .table-box4 {
    display: flex;
    padding: 0px;
    padding-left: 5%;
    width: 100%;
  }

  .title-text {
    text-align: left;
    font-size: 0.98rem;
  }

  .text-affiche {
    text-align: left;
    padding-top: 2%;
    margin-left: 5%;
    font-size: 120%;
  }

  .v-select {
    width: 20%;
  }

  /************************************************************************************************ */
  .table-boxs {
    padding: 1.2%;
    padding-left: 4%;
  }

  .table-box {
    width: 50%;
  }

  .table-boxes {
    width: 50%;
  }

  .table-box1,
  .table-box2 {
    display: flex;
    padding: 0px;
    width: 100%;
  }

  .title-text {
    text-align: left;
    padding-top: 2%;
    margin-left: 5%;
    font-size: 100%;
    font-weight: normal;
  }

  .text-affiche3,
  .text-affiche1,
  .text-affiche2 {
    display: flex;
    text-align: left;
    padding-top: 0.2%;
    margin-left: 1%;
    font-size: 122%;
  }

  .text-affiche3 h4,
  .text-affiche1 h4,
  .text-affiche2 h4 {
    padding-top: 1%;
  }

  .v-text-field,
  .v-select {
    margin-bottom: 1rem;
  }

  .v-select {
    width: 60%;
  }


  /************************************************************************************************ */




  .card-actions {
    /* Style the card actions section */
    padding: 12%;
    color: #E7ECF6;
  }

  .converted-amount {
    /* Style the converted amount text */
    color: #E7ECF6;
    font-weight: bold;
    font-size: 1.1rem;
  }

  .currency-card {
    margin-bottom: 2%;
    box-shadow: 0 2px 4px rgb(255, 255, 255);
  }

  .currency-form {
    margin-top: 1%;
  }

  .currency-btn {
    margin-top: 5%;
    margin-left: 3%;
    background-color: #ffffff;
    /* Green color */
    color: rgb(23, 0, 113);
    width: 20%;
    height: 12%;
    font-size: 100%;
    font-weight: bold;
  }

  .currency-btn:hover {
    background-color: #bfc4cd;
    /* Darker green on hover */
  }
}

@media (min-width: 481px) and (max-width: 767px) {


  .head {
    content: " ";
    display: flex;
    position: absolute;
    padding: 0.8%;
    color: #E7ECF6;
    height: 650px;
    width: 100%;
    background: #E7ECF6;
  }

  .box {
    content: " ";
    display: block;
    position: absolute;
    margin-top: 25%;
    margin-left: 5.5%;
    height: 430px;
    width: 90%;
    background: #0a2157;
    border: #ffffff solid 7px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgb(123, 128, 141);
  }

  .card-title {
    /* Style the card title */
    position: absolute;
    padding-top: 12%;
    width: 100%;
    color: #021946;
    font-size: 1.3em;
    text-align: center;
    font-weight: bold;
  }

  .table-boxs {
    display: flex;
    padding: 1.2%;
    padding-left: 4%;
  }

  .table-box {
    position: absolute;
    width: 93%;
    margin-top: 96px;
    padding: 0px 0px 0px 0px;
  }

  .table-boxes {
    position: absolute;
    width: 93%;
    margin-top: 1px;
    padding: 0px 0px 0px 0px;
  }

  .table-box1,
  .table-box2 {
    display: flex;
    padding: 0px;
    width: 100%;
  }

  .table-box3,
  .table-box4 {
    display: flex;
    padding: 0px 0px 0px 0px;
    width: 100%;
  }

  .table-box4 {
    height: 70px;
  }

  .title-text {
    text-align: left;
    padding-top: 2%;
    margin-left: 5%;
    font-size: 100%;
    font-weight: normal;
  }

  .text-affiche3,
  .text-affiche1,
  .text-affiche2 {
    display: flex;
    text-align: left;
    font-size: 122%;
    padding: 0px 0px 0px 0px;
  }

  .text-affiche1 {
    width: 230%;
    margin-top: 120px;
  }

  .text-affiche2 {
    width: 230%;
  }

  .text-affiche3 {
    width: 230%;
    margin-top: 10px;
  }

  .text-affiche3 h4,
  .text-affiche1 h4,
  .text-affiche2 h4 {
    padding-top: 2%;
    padding-left: 1.7%;
    font-size: 101%;
    font-weight: normal;

  }

  .v-icon {
    padding-top: 1.2%;
  }

  .v-text-field,
  .v-select {
    margin-bottom: 1rem;
  }

  .v-select {
    width: 60%;
  }

  .converted-amount {
    /* Style the converted amount text */
    color: #E7ECF6;
    font-weight: bold;
    font-size: 1.1rem;
  }

  .currency-card {
    margin-bottom: 2%;
    box-shadow: 0 2px 4px rgb(255, 255, 255);
  }

  .currency-form {
    margin-top: 1%;
  }

  .currency-btn {
    margin-top: 355px;
    margin-left: 62%;
    background-color: #ffffff;
    /* Green color */
    color: rgb(23, 0, 113);
    width: 38%;
    height: 35px;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  .currency-btn:hover {
    background-color: #bfc4cd;
    /* Darker green on hover */
  }
}
</style>