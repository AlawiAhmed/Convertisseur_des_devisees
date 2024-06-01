<template>
    
    <v-row class="devices">
      <v-col class="devices-title-box">
        <h2 class="devices-title">Profils de devises</h2>
      </v-col>
      <v-col cols="12" md="12" class="border-devices">
        <v-table class="table-devices">
          <thead class="thead-devices">
            <!-- <tr>
              <th><v-img src="../assets/ust.png"></v-img></th>
              <th class="nom-pays" colspan="2">AUD - Dollar australien</th>
            </tr>
            <tr>
              <th>image</th>
              <th class="nom-pays" colspan="2">USD - Dollar US</th>
            </tr>
            <tr>
              <th>image</th>
              <th class="nom-pays" colspan="2">GBP - Pound British</th>
            </tr>
            <tr>
              <th>image</th>
              <th class="nom-pays" colspan="2">MYR - Ringgit de Malaisie </th>
            </tr>
            <tr>
              <th>image</th>
              <th class="nom-pays" colspan="2">SAR - Riyal Saudi </th>
            </tr>
            <tr>
              <th>image</th>
              <th class="nom-pays" colspan="2">EUR - Euro</th>
            </tr>
            <tr>
              <th>image</th>
              <th class="nom-pays" colspan="2">CNY - Yuan chinois Renminbi</th>
            </tr>
            <tr>
              <th>image</th>
              <th class="nom-pays" colspan="2">BRL - Réal Brésilien</th>
            </tr>
            <tr>
              <th>image</th>
              <th class="nom-pays" colspan="2">EGP - Jenihea Egyptienne</th>
            </tr>
            <tr>
              <th><v-img src="../assets/ust.png"></v-img></th>
              <th class="nom-pays" colspan="2">TND - Dinar Tunisien</th>
            </tr>
            <tr>
              <th><v-img src="../assets/ust.png"></v-img></th>
              <th class="nom-pays" colspan="2">TND - Dinar Tunisien</th>
            </tr>
            <tr>
              <th><v-img src="../assets/ust.png"></v-img></th>
              <th class="nom-pays" colspan="2">TND - Dinar Tunisien</th>
            </tr>
            <tr>
              <th><v-img src="../assets/ust.png"></v-img></th>
              <th class="nom-pays" colspan="2">TND - Dinar Tunisien</th>
            </tr>
            <tr>
              <th><v-img src="../assets/ust.png"></v-img></th>
              <th class="nom-pays" colspan="2">TND - Dinar Tunisien</th>
            </tr>
            <tr>
              <th><v-img src="../assets/ust.png"></v-img></th>
              <th class="nom-pays" colspan="2">TND - Dinar Tunisien</th>
            </tr>
            <tr>
              <th><v-img src="../assets/ust.png"></v-img></th>
              <th class="nom-pays" colspan="2">TND - Dinar Tunisien</th>
            </tr>
            <tr>
              <th><v-img src="../assets/ust.png"></v-img></th>
              <th class="nom-pays" colspan="2">TND - Dinar Tunisien</th>
            </tr>
            <tr>
              <th><v-img src="../assets/ust.png"></v-img></th>
              <th class="nom-pays" colspan="2">TND - Dinar Tunisien</th>
            </tr> -->
            <tr v-for="currency in currenciese" :key="currency.code">
                  <th>
                    <v-img :src="getFlagUrl(currency.code)" :alt="currency.code" width="54"></v-img>
                  </th>
                  <th  class="nom-pays" colspan="2">{{ currency.name }}</th>
            </tr>
          </thead>
        </v-table>
        <v-table class="table-device">
          <thead>
            <!-- <tr>
              <th><v-img src="../assets/ust.png"></v-img></th>
              <th class="nom-pays" colspan="2">Dollar australien</th>
            </tr>-->
            <tr v-for="currency in currencies" :key="currency.code">
                  <th>
                    <v-img :src="getFlagUrl(currency.code)" :alt="currency.code" width="54"></v-img>
                  </th>
                  <th  class="nom-pays" colspan="2">{{ currency.name }}</th>
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
    currencies: [{ code: "MNT", name: "Mongolian Tögrög" },
        { code: "MOP", name: "Macanese Pataca" },
        { code: "MRU", name: "Mauritanian Ouguiya" },
        { code: "MUR", name: "Mauritian Rupee" },
        { code: "MVR", name: "Maldivian Rufiyaa" },
        { code: "MWK", name: "Malawian Kwacha" },
        { code: "MXN", name: "Mexican Peso" },
        { code: "MYR", name: "Malaysian Ringgit" },
        { code: "MZN", name: "Mozambican Metical" },
        { code: "NAD", name: "Namibian Dollar" },
        { code: "NGN", name: "Nigerian Naira" },
        { code: "NIO", name: "Nicaraguan Córdoba" },
        { code: "NOK", name: "Norwegian Krone" },
        { code: "NPR", name: "Nepalese Rupee" },
        { code: "NZD", name: "New Zealand Dollar" },
        { code: "OMR", name: "Omani Rial" },
        { code: "PAB", name: "Panamanian Balboa" },
        { code: "PEN", name: "Peruvian Sol" },
        { code: "PGK", name: "Papua New Guinean Kina" },
        { code: "PHP", name: "Philippine Peso" },
        { code: "PKR", name: "Pakistani Rupee" },
        { code: "PLN", name: "Polish Złoty" },
        { code: "PYG", name: "Paraguayan Guaraní" },
        { code: "QAR", name: "Qatari Riyal" },
        { code: "RON", name: "Romanian Leu" },
        { code: "RSD", name: "Serbian Dinar" },
        { code: "RUB", name: "Russian Ruble" },
        { code: "RWF", name: "Rwandan Franc" },
        { code: "SAR", name: "Saudi Riyal" },
        { code: "SBD", name: "Solomon Islands Dollar" },
        { code: "SCR", name: "Seychellois Rupee" },
        { code: "SDG", name: "Sudanese Pound" },
        { code: "SEK", name: "Swedish Krona" },
        { code: "SGD", name: "Singapore Dollar" },
        { code: "SHP", name: "Saint Helena Pound" },
        { code: "SLE", name: "Sierra Leonean Leone" },
        { code: "SLL", name: "Sierra Leonean Leone" },
        { code: "SOS", name: "Somali Shilling" },
        { code: "SRD", name: "Surinamese Dollar" },
        { code: "SSP", name: "South Sudanese Pound" },
        { code: "STN", name: "São Tomé and Príncipe Dobra" },
        { code: "SYP", name: "Syrian Pound" },
        { code: "SZL", name: "Eswatini Lilangeni" },
        { code: "THB", name: "Thai Baht" },
        { code: "TJS", name: "Tajikistani Somoni" },
        { code: "TMT", name: "Turkmenistani Manat" },
        { code: "TND", name: "Tunisian Dinar" },
        { code: "TOP", name: "Tongan Paʻanga" },
        { code: "TRY", name: "Turkish Lira" },
        { code: "TTD", name: "Trinidad and Tobago Dollar" },
        { code: "TVD", name: "Tuvaluan Dollar" },
        { code: "TWD", name: "New Taiwan Dollar" },
        { code: "TZS", name: "Tanzanian Shilling" },
        { code: "UAH", name: "Ukrainian Hryvnia" },
        { code: "UGX", name: "Ugandan Shilling" },
        { code: "UYU", name: "Uruguayan Peso" },
        { code: "UZS", name: "Uzbekistani Som" },
        { code: "VES", name: "Venezuelan Bolívar" },
        { code: "VND", name: "Vietnamese Đồng" },
        { code: "VUV", name: "Vanuatu Vatu" },
        { code: "WST", name: "Samoan Tālā" },
        { code: "XAF", name: "Central African CFA Franc" },
        { code: "XCD", name: "East Caribbean Dollar" },
        { code: "XDR", name: "Special Drawing Rights" },
        { code: "XOF", name: "West African CFA Franc" },
        { code: "XPF", name: "CFP Franc" },
        { code: "YER", name: "Yemeni Rial" },
        { code: "ZAR", name: "South African Rand" },
        { code: "ZMW", name: "Zambian Kwacha" },
        { code: "ZWL", name: "Zimbabwean Dollar" },], // Example currencies
    currenciese: [
        { code: "USD", name: "United States Dollar" },
        { code: "AED", name: "United Arab Emirates Dirham" },
        { code: "AFN", name: "Afghan Afghani" },
        { code: "ALL", name: "Albanian Lek" },
        { code: "AMD", name: "Armenian Dram" },
        { code: "ANG", name: "Netherlands Antillean Guilder" },
        { code: "AOA", name: "Angolan Kwanza" },
        { code: "ARS", name: "Argentine Peso" },
        { code: "AUD", name: "Australian Dollar" },
        { code: "AWG", name: "Aruban Florin" },
        { code: "AZN", name: "Azerbaijani Manat" },
        { code: "BAM", name: "Bosnia-Herzegovina Convertible Mark" },
        { code: "BBD", name: "Barbadian Dollar" },
        { code: "BDT", name: "Bangladeshi Taka" },
        { code: "BGN", name: "Bulgarian Lev" },
        { code: "BHD", name: "Bahraini Dinar" },
        { code: "BIF", name: "Burundian Franc" },
        { code: "BMD", name: "Bermudian Dollar" },
        { code: "BND", name: "Brunei Dollar" },
        { code: "BOB", name: "Bolivian Boliviano" },
        { code: "BRL", name: "Brazilian Real" },
        { code: "BSD", name: "Bahamian Dollar" },
        { code: "BTN", name: "Bhutanese Ngultrum" },
        { code: "BWP", name: "Botswana Pula" },
        { code: "BYN", name: "Belarusian Ruble" },
        { code: "BZD", name: "Belize Dollar" },
        { code: "CAD", name: "Canadian Dollar" },
        { code: "CDF", name: "Congolese Franc" },
        { code: "CHF", name: "Swiss Franc" },
        { code: "CLP", name: "Chilean Peso" },
        { code: "CNY", name: "Chinese Yuan" },
        { code: "COP", name: "Colombian Peso" },
        { code: "CRC", name: "Costa Rican Colón" },
        { code: "CUP", name: "Cuban Peso" },
        { code: "CVE", name: "Cape Verdean Escudo" },
        { code: "CZK", name: "Czech Koruna" },
        { code: "DJF", name: "Djiboutian Franc" },
        { code: "DKK", name: "Danish Krone" },
        { code: "DOP", name: "Dominican Peso" },
        { code: "DZD", name: "Algerian Dinar" },
        { code: "EGP", name: "Egyptian Pound" },
        { code: "ERN", name: "Eritrean Nakfa" },
        { code: "ETB", name: "Ethiopian Birr" },
        { code: "EUR", name: "Euro" },
        { code: "FJD", name: "Fijian Dollar" },
        { code: "FKP", name: "Falkland Islands Pound" },
        { code: "FOK", name: "Faroese Króna" },
        { code: "GBP", name: "British Pound Sterling" },
        { code: "GEL", name: "Georgian Lari" },
        { code: "GGP", name: "Guernsey Pound" },
        { code: "GHS", name: "Ghanaian Cedi" },
        { code: "GIP", name: "Gibraltar Pound" },
        { code: "GMD", name: "Gambian Dalasi" },
        { code: "GNF", name: "Guinean Franc" },
        { code: "GTQ", name: "Guatemalan Quetzal" },
        { code: "GYD", name: "Guyanese Dollar" },
        { code: "HKD", name: "Hong Kong Dollar" },
        { code: "HNL", name: "Honduran Lempira" },
        { code: "HRK", name: "Croatian Kuna" },
        { code: "HTG", name: "Haitian Gourde" },
        { code: "HUF", name: "Hungarian Forint" },
        { code: "IDR", name: "Indonesian Rupiah" },
        { code: "ILS", name: "Israeli New Shekel" },
        { code: "IMP", name: "Isle of Man Pound" },
        { code: "INR", name: "Indian Rupee" },
        { code: "IQD", name: "Iraqi Dinar" },
        { code: "IRR", name: "Iranian Rial" },
        { code: "ISK", name: "Icelandic Króna" },
        { code: "JEP", name: "Jersey Pound" },
        { code: "JMD", name: "Jamaican Dollar" },
        { code: "JOD", name: "Jordanian Dinar" },
        { code: "JPY", name: "Japanese Yen" },
        { code: "KES", name: "Kenyan Shilling" },
        { code: "KGS", name: "Kyrgyzstani Som" },
        { code: "KHR", name: "Cambodian Riel" },
        { code: "KID", name: "Kiribati Dollar" },
        { code: "KMF", name: "Comorian Franc" },
        { code: "KRW", name: "South Korean Won" },
        { code: "KWD", name: "Kuwaiti Dinar" },
        { code: "KYD", name: "Cayman Islands Dollar" },
        { code: "KZT", name: "Kazakhstani Tenge" },
        { code: "LAK", name: "Lao Kip" },
        { code: "LBP", name: "Lebanese Pound" },
        { code: "LKR", name: "Sri Lankan Rupee" },
        { code: "LRD", name: "Liberian Dollar" },
        { code: "LSL", name: "Lesotho Loti" },
        { code: "LYD", name: "Libyan Dinar" },
        { code: "MAD", name: "Moroccan Dirham" },
        { code: "MDL", name: "Moldovan Leu" },
        { code: "MGA", name: "Malagasy Ariary" },
        { code: "MKD", name: "Macedonian Denar" },
        { code: "MMK", name: "Burmese Kyat" },]
  }
},
methods: {
  getFlagUrl(currencyCode) {
      return `https://flagsapi.com/${currencyCode.slice(0, 2).toUpperCase()}/flat/64.png`;
    },
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
.devices {
  content: " ";
  position: absolute;
  top: 1540px;
  height:  780px;
  width: 100%;
  background: #021946;
}
.flag-pays{
  width: 90px;
  padding: 0px 0px 0px 0px;
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
.border-devices {
  position: absolute;
  display: flex;
  padding-left: 1.5%;
  top: 22%;
  left: 3.3%;
  height: 75%;
  width: 94%;
  border: #f1f8c6 solid 10%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(248, 249, 201);
}
.devices-title-box{
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  top: 15.5%;
  height: 8%;
  left: 4.5%;
  width: 25%;
  padding: 0px;
  background: #FFEAE3;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgb(248, 249, 201);
  text-align: right;
}
.devices-title {
  display: flex;
  width: 95%;
  text-align: left;
  margin-left: 6%;
  padding-top: 2.6%;
  font-size: 215%;
}
.table-devices { 
  display: flex;
  margin: 0.15% -2px;
  margin-top:1.8%;
  width: 80%;
  border-radius: 2px;
}
.table-device { 
  display: flex;
  margin: 0.15% -2px;    
  margin-top:1.8%;
  width: 80%;
  border-radius: 2px;
}
.table-device th,.table-devices th{
  width: 0.2%;
  font-style: normal;
}
.table-device .nom-pays,.table-devices .nom-pays{
  width: 2%;
}
.v-img{
  margin-left: 10%;
  width: 97%;
  justify-content: right;
  text-align: right;
  border-radius: 5px;
}
.v-img:hover{
  width: 105%;
}
}
@media (min-width: 1025px) and (max-width: 1282px){
.devices {
  content: " ";
  position: absolute;
  top: 1520px;
  height:  780px;
  width: 100%;
  background: #021946;
  /* transform: skew(3deg ,3deg); */
}
.flag-pays{
  width: 90px;
  padding: 0px 0px 0px 0px;
}
.flag-pays .v-img{
  border-radius: 1.5px;
}
.nom-pays{
  width: 40%;
  font-size: 135%;
  font-style: unset;
  font-weight: bold;
  letter-spacing: 0.1em;
}
.border-devices {
  position: absolute;
  display: flex;
  padding-left: 1.5%;
  top: 19.5%;
  left: 3.8%;
  height: 65%;
  width: 94%;
  border: #f1f8c6 solid 10%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(248, 249, 201);
}
.devices-title-box{
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  top: 15%;
  height: 6%;
  left: 5%;
  width: 20%;
  padding: 0px;
  background: #FFEAE3;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgb(248, 249, 201);
  text-align: right;
}
.devices-title {
  display: flex;
  width: 95%;
  text-align: left;
  margin-left: 2%;
  padding-top: 3%;
  font-size: 149%;
}
.table-devices { 
  display: flex;
  margin: 0.15%;
  margin-top:1.8%;
  width: 80%;
  border-radius: 2px;
}
.table-device { 
  display: flex;
  margin: 0.15%;
  margin-top:1.8%;
  width: 80%;
  border-radius: 2px;
}
.table-device .nom-pays,.table-devices .nom-pays{
  width: 82%;
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
  border-radius: 4px;
}
.v-img:hover{
  width: 90%;
}
}
@media (min-width: 767px) and (max-width: 1024px){
.devices {
  content: " ";
  position: absolute;
  top: 1520px;
  height:  780px;
  width: 100%;
  background: #021946;
  /* transform: skew(3deg ,3deg); */
}
.nom-pays{
  font-size: 135%;
  font-style: unset;
  font-weight: bold;
  letter-spacing: 0.1em;
}
.nom-pays:hover{
  background-color:#E7ECF6;
  letter-spacing: 0.19em;
  font-size: 90%;
}
.border-devices {
  position: absolute;
  display: flex;
  padding-left: 1.5%;
  top: 19.5%;
  left: 3.8%;
  height: 65%;
  width: 94%;
  border: #f1f8c6 solid 10%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(248, 249, 201);
}
.devices-title-box{
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  top: 15%;
  height: 6%;
  left: 5%;
  width: 20%;
  padding: 0px;
  background: #FFEAE3;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgb(248, 249, 201);
  text-align: right;
}
.devices-title {
  display: flex;
  width: 95%;
  text-align: left;
  margin-left: 2%;
  padding-top: 5.5%;
  font-size: 114%;
}
.table-devices { 
  display: flex;
  margin: 0.15%;
  margin-top:1.8%;
  width: 80%;
  border-radius: 2px;
}
.table-device { 
  display: flex;
  margin: 0.15%;
  margin-top:1.8%;
  width: 80%;
  border-radius: 2px;
}
.v-img{
  margin-left: 18%;
  width: 95%;
  height: 120%;
  justify-content: right;
  text-align: right;
  border-radius: 15%;
}
.v-img:hover{
  width: 105%;
}

}
@media (min-width: 481px) and (max-width: 767px) {
.devices {
  content: " ";
  position: absolute;
  top: 1320px;
  height:  650px;
  width: 100%;
  background: #021946;
  /* transform: skew(3deg ,3deg); */
}
.flag-pays{
  width: 90px;
  padding: 0px 0px 0px 0px;
}
.nom-pays{
  width: 21%;
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
.border-devices {
  position: absolute;
  display: flex;
  justify-content: center;
  padding-left: 1.5%;
  top: 15%;
  left: 3.8%;
  height: 83%;
  width: 94%;
  border: #f1f8c6 solid 10%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(248, 249, 201);
}
.devices-title-box{
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  top: 10%;
  height: 6%;
  left: 5%;
  width: 34%;
  padding: 0px;
  background: #FFEAE3;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgb(248, 249, 201);
  text-align: right;
}
.devices-title {
  display: flex;
  width: 100%;
  text-align: left;
  margin-left: 2%;
  padding-top: 5%;
  font-size: 124%;
}
.table-devices { 
  display: flex;
  position: absolute;
  margin-top:12.5px;
  margin-left: 1.3%;
  margin-right: 0.4%;
  width: 95.7%;
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
.table-device th,.table-devices th{
  width: 0.2%;
}
.table-device .nom-pays,.table-devices .nom-pays{
  width: 2%;
}
.v-img{
  border-radius: 3px;
  padding: 0px 0px 0px 0px;
  width: 80%;
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
