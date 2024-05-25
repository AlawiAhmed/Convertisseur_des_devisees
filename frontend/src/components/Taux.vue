<template>
    <v-row class="taux">
          <v-col class="taux-title-box">
            <h2 class="taux-title">Les taux de change aujourd'hui</h2>
            <v-select v-model="toCurrency" :items="currencies" label="Vers la devise"></v-select>
          </v-col>
          <v-col cols="12" md="12" class="tchange">
            <v-card >
            </v-card>
            <v-table class="table-change">
              <thead>
                <tr>
                  <th class="flag-pays"><v-img src="../assets/ust.png"></v-img></th>
                  <th class="nom-pays" colspan="2">Dollar australien</th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 0.40 % <br><b>USD / AUD</b></h3></th>
                </tr>
                <tr>
                  <th class="flag-pays"><v-img src="../assets/ust.png"></v-img></th>
                  <th class="nom-pays" colspan="2">Dollar US</th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 0.40 % <br><b>USD / AUD</b></h3></th>
                </tr>
                <tr>
                  <th class="flag-pays"><v-img src="../assets/ust.png"></v-img></th>
                  <th class="nom-pays" colspan="2">Pound British </th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 0.40 % <br><b>USD / AUD</b></h3></th>
                </tr>
                <tr>
                  <th class="flag-pays"><v-img src="../assets/ust.png"></v-img></th>
                  <th class="nom-pays" colspan="2">Yuan chinois Renminbi</th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 0.40 % <br><b>USD / AUD</b></h3></th>
                </tr>
                <tr>
                  <th class="flag-pays"><v-img src="../assets/ust.png"></v-img></th>
                  <th class="nom-pays" colspan="2">Euro</th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 0.40 % <br><b>USD / AUD</b></h3></th>
                </tr>
                <tr>
                  <th class="flag-pays"><v-img src="../assets/ust.png"></v-img></th>
                  <th class="nom-pays" colspan="2">Riyal Saudi </th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 0.40 % <br><b>USD / AUD</b></h3></th>
                </tr>
                <tr>
                  <th class="flag-pays"><v-img src="../assets/ust.png"></v-img></th>
                  <th class="nom-pays" colspan="2">Dirham United Arab Emirates</th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 0.40 % <br><b>USD / AUD</b></h3></th>
                </tr>
                <tr>
                  <th class="flag-pays"><v-img src="../assets/ust.png"></v-img></th>
                  <th class="nom-pays" colspan="2">Dirham marocain</th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 0.40 % <br><b>USD / AUD</b></h3></th>
                </tr>
                <tr>
                  <th class="flag-pays"><v-img src="../assets/ust.png"></v-img></th>
                  <th class="nom-pays" colspan="2">Dirham marocain</th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 0.40 % <br><b>USD / AUD</b></h3></th>
                </tr>
                <tr>
                  <th class="flag-pays"><v-img src="../assets/ust.png"></v-img></th>
                  <th class="nom-pays" colspan="2">Dirham marocain</th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 0.40 % <br><b>USD / AUD</b></h3></th>
                </tr>
                <tr>
                  <th class="flag-pays"><v-img src="../assets/ust.png"></v-img></th>
                  <th class="nom-pays" colspan="2">Dirham marocain</th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 0.40 % <br><b>USD / AUD</b></h3></th>
                </tr>
                <tr>
                  <th class="flag-pays"><v-img src="../assets/ust.png"></v-img></th>
                  <th class="nom-pays" colspan="2">Dirham marocain</th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 0.40 % <br><b>USD / AUD</b></h3></th>
                </tr>
                <tr>
                  <th class="flag-pays"><v-img src="../assets/ust.png"></v-img></th>
                  <th class="nom-pays" colspan="2">Dirham marocain</th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 0.40 % <br><b>USD / AUD</b></h3></th>
                </tr>
                <tr>
                  <th class="flag-pays"><v-img src="../assets/ust.png"></v-img></th>
                  <th class="nom-pays" colspan="2">Dirham marocain</th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 0.40 % <br><b>USD / AUD</b></h3></th>
                </tr>
                <tr>
                  <th class="flag-pays"><v-img src="../assets/ust.png"></v-img></th>
                  <th class="nom-pays" colspan="2">Dirham marocain</th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 0.40 % <br><b>USD / AUD</b></h3></th>
                </tr>
                <tr>
                  <th class="flag-pays"><v-img src="../assets/ust.png"></v-img></th>
                  <th class="nom-pays" colspan="2">Dirham marocain</th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 0.40 % <br><b>USD / AUD</b></h3></th>
                </tr>
                <tr>
                  <th class="flag-pays"><v-img src="../assets/ust.png"></v-img></th>
                  <th class="nom-pays" colspan="2">Dirham marocain</th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 0.40 % <br><b>USD / AUD</b></h3></th>
                </tr>
                <tr>
                  <th class="flag-pays"><v-img src="../assets/ust.png"></v-img></th>
                  <th class="nom-pays" colspan="2">Dirham marocain</th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 1.5087 <br><b>USD / AUD</b></h3></th>
                  <th><h3> 0.40 % <br><b>USD / AUD</b></h3></th>
                </tr>
              </thead>
            </v-table>
          </v-col>
    </v-row>
</template>
  
  <script>
  import { defineComponent } from 'vue';
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
    },
    
  });
  
  </script>
  <style scoped>
    @media (min-width: 1282px){
      .taux {
        content: " ";
        position: absolute;
        display: flex;
        top: 760px ;
        height:  780px;
        width: 100%;
        background: #021946;
      }
      .taux-title-box{
        position: absolute;
        display: flex;
        justify-content: space-evenly;
        top: 11.5%;
        height: 52px;
        left: 3.2%;
        width: 60%;
        padding: 0px;
        background: #FFEAE3;
        border-radius: 2px;
        box-shadow: 0 1px 2px rgb(248, 249, 201);
        text-align: right;
      }
      .taux-title{
        width: 57%;
        text-align: left;
        margin-left: 1.2%;
        padding-top: 0.5%;
        font-size: 197.5%;
      }
      .taux-title-box .v-select{
        width: 10%;
        margin-top: 0cm
      }
      .flag-pays{
        width: 90px;
        padding: 0px 0px 0px 0px;
      }
      .tchange {
        position: absolute;
        display: flex;
        top: 19.5%;
        left: 3.3%;
        height: 75%;
        width: 94%;
        background: #FFEAE3;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgb(248, 249, 201);
      }
      .table-change {
        width: 100%;
      }
      
      .table-change h3{
        position: relative;
        text-align: center  ;
        font-size: 110%;
      }
      .nom-pays{
        width: 35%;
        font-size: 165%;
        font-style: unset;
        font-weight: bold;
        letter-spacing: 0.1em;
      }
      .nom-pays:hover{
        background-color:#E7ECF6;
        letter-spacing: 0.19em;
        font-size: 140%;
        font-weight: bold;
      }
      .v-img{
        width: 97%;
        border-radius: 5px;
      }
      .v-img:hover{
        width: 105%;
      }
    }
    @media (min-width: 1025px) and (max-width: 1282px){
    
      .taux {
        content: " ";
        position: absolute;
        display: flex;
        top: 760px ;
        height:  780px;
        width: 100%;
        background: #021946;
        /* transform: skew(3deg ,3deg); */
      }
      .taux-title-box{
        position: absolute;
        display: flex;
        justify-content: space-evenly;
        top: 13%;
        height: 47px;
        left: 3.2%;
        width: 70%;
        padding: 0px;
        background: #FFEAE3;
        border-radius: 2px;
        box-shadow: 0 1px 2px rgb(248, 249, 201);
        text-align: right;
      }
      .taux-title{
        width: 57%;
        text-align: left;
        margin-left: 2%;
        padding-top: 1%;
        font-size: 153%;
      }
      .flag-pays{
        width: 90px;
        padding: 0px 0px 0px 0px;
      }
      .flag-pays .v-img{
        border-radius: 2px;
      }
      .tchange {
        position: absolute;
        display: flex;
        top: 22%;
        left: 3.8%;
        height: 65%;
        width: 94%;
        background: #FFEAE3;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgb(248, 249, 201);
      }
      .table-change {
        width: 100%;
      }
      .table-change h3{
        position: relative;
        text-align: center  ;
        font-size: 90%;
      }
      .nom-pays{
        width: 40%;
        font-size: 135%;
        font-style: unset;
        font-weight: bold;
        letter-spacing: 0.1em;
      }
      .nom-pays:hover{
        background-color:#E7ECF6;
        letter-spacing: 0.19em;
        font-size: 120%;
      }
      .v-img{
        margin-left: 10%;
        width: 80%;
        justify-content: right;
        text-align: right;
        border-radius: 5px;
      }
      .v-img:hover{
        width: 90%;
      }
    }
    @media (min-width: 767px) and (max-width: 1024px){
      .taux {
        content: " ";
        position: absolute;
        display: flex;
        top: 760px ;
        height:  780px;
        width: 100%;
        background: #021946;
        /* transform: skew(3deg ,3deg); */
      }
      .taux-title-box{
        position: absolute;
        display: flex;
        justify-content: space-evenly;
        top: 13%;
        height: 47px;
        left: 3.2%;
        width: 70%;
        padding: 0px;
        background: #FFEAE3;
        border-radius: 2px;
        box-shadow: 0 1px 2px rgb(248, 249, 201);
        text-align: right;
      }
      .taux-title{
        width: 57%;
        text-align: left;
        margin-left: 2%;
        padding-top: 2%;
        font-size: 115.5%;
      }
      .tchange {
        position: absolute;
        display: flex;
        top: 22%;
        left: 3.8%;
        height: 65%;
        width: 94%;
        background: #FFEAE3;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgb(248, 249, 201);
      }
      .table-change {
        width: 100%;
      }
      .table-change h3{
        position: relative;
        text-align: center  ;
        font-size: 90%;
      }
      .nom-pays{
        width: 40%;
        font-size: 125%;
        font-style: unset;
        font-weight: bold;
        letter-spacing: 0.1em;
      }
      .nom-pays:hover{
        background-color:#E7ECF6;
        letter-spacing: 0.19em;
        font-size: 90%;
      }
      .flag-pays{
        width: 85px;
        padding: 0px 0px 0px 0px;
      }
      .v-img{
        width: 95%;
        border-radius: 3px
      }
      .v-img:hover{
        width: 105%;
      }
    
    }
    @media (min-width: 481px) and (max-width: 767px) {
      .taux {
        content: " ";
        position: absolute;
        display: flex;
        top: 655px ;
        height:  670px;
        width: 100%;
        background: #021946;
      }
      .taux-title-box{
        position: absolute;
        display: flex;
        justify-content: space-evenly;
        top: 11%;
        height: 50px;
        left: 3.6%;
        width: 94.3%;
        padding: 0px;
        background: #FFEAE3;
        border-radius: 2px;
        box-shadow: 0 1px 2px rgb(248, 249, 201);
        text-align: right;
      }
      .taux-title-box .v-select{
        width: 10%;
        height: 6px;
      }
      .taux-title{
        width: 57%;
        text-align: left;
        margin-left: 2%;
        padding-top: 2%;
        font-size: 115%;
      }
      .tchange {
        position: absolute;
        display: flex;
        top: 20%;
        left: 3.8%;
        height: 75%;
        width: 94%;
        background: #FFEAE3;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgb(248, 249, 201);
      }
      .table-change {
        width: 100%;
        
      }
    .flag-pays{
        width: 80px;
        padding: 0px 0px 0px 0px;
      }
      .table-change h3{
        position: relative;
        text-align: center  ;
        font-size: 72.7%;
        padding: 0px 0px 0px 0px;
      }
      .nom-pays{
        width: 25%;
        font-size: 105%;
        font-style: unset;
        font-weight: bold;
        /* letter-spacing: 0.1em; */
      }
      .nom-pays:hover{
        background-color:#E7ECF6;
        letter-spacing: 0.19em;
        /* font-size: 90%; */
      }
      .flag-pays{
        width: 78px;
        padding: 0px 0px 0px 0px;
      }
      .v-img{
        border-radius: 3px;
        padding: 0px 0px 0px 0px;
        width: 100%;
      }
      .v-img:hover{
        width: 100px;
      }
      @media (min-width:481px) {
        .table-devices { 
        display: flex;
        position: absolute;
        margin-top:12.5px;
        margin-left: 1.3%;
        margin-right: 0.4%;
        width: 94.7%;
        border-radius: 4px 4px 0px 0px;
        height: 280px;
      }
      .table-device { 
        display: flex;
        position: relative;
        margin: 0.05%;
        margin-top:293px;
        margin-left: 1%;
        width: 110%;
        border-radius: 0px 0px 4px 4px;
      }
      
      } 
    }
  </style>
  