<template>
    <v-row class="taux">
          <v-col class="taux-title-box">
            <h2 class="taux-title">Les taux de change aujourd'hui</h2>
            <v-select v-model="toCurrency" :items="currencies" label="Vers la devise"></v-select>
          </v-col>
          <v-col cols="12" md="12" class="tchange">
            <v-table class="table-change">
              <thead>
                <tr v-for="currency in currenciese" :key="currency.code">
                  <th class="flag-pays">
                    <v-img :src="getFlagUrl(currency.code)" :alt="currency.code" width="54"></v-img>
                  </th>
                  <th  class="nom-pays" colspan="2">{{ currency.name }}</th>
                  <th><h3>  {{ newsChange(currency.code) }} <br><b>{{toCurrency}} / {{ currency.code }}</b></h3></th>
                  <th><h3> {{ newChange(currency.code) }} <br><b>{{ currency.code }} / {{toCurrency}}</b></h3></th>
                  <th><h3 :style="{ color: percentageChange(currency.code) > 0 ? 'black' : 'red' }"> 
                    <v-icon v-if="percentageChange(currency.code) > 0" color="green" left class="mr-3">fas fa-arrow-down</v-icon>
                      <v-icon v-if="percentageChange(currency.code) <= 0" color="red" left class="mr-3">fas fa-arrow-up</v-icon>
                    {{ percentageChange(currency.code) }} % 
                    <br><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{toCurrency}} / {{ currency.code }}</b></h3></th>
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
        data: null,
        toCurrency: 'EUR',
        fromCurrency: 'USD',
        Currency: this.fromCurrency,
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
        { code: "MMK", name: "Burmese Kyat" },
        { code: "MNT", name: "Mongolian Tögrög" },
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
        { code: "ZWL", name: "Zimbabwean Dollar" },
        // Add more currencies as needed
      ],
      }
    },
    methods: {
      getFlagUrl(currencyCode) {
      return `https://flagsapi.com/${currencyCode.slice(0, 2).toUpperCase()}/flat/64.png`;
    },
    
      currencyChanged() {
      console.log("Selected currency:", this.toCurrency);
      },
      convertCurrency() {
        // Implement currency conversion logic
        console.log("Convert", this.amount, this.fromCurrency, "to", this.toCurrency);
      },
      transferMoney() {
        // Implement money transfer logic
        console.log("Transfer", this.transferAmount, this.sendCurrency, "to", this.receiveCurrency);
      },
      calculatePercentageChange(newValue, oldValue) {
      return ((newValue - oldValue) / oldValue) * 100;
    },
      fetchData() {
      // fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=cb1675f2fb5141a9ba6d8020b0d3fb8b&symbols=${this.toCurrency}`)
      //   .then(res => res.json())
      //   .then(data => {
      //     this.data = data;
      //     // this.amount = (data.conversion_rates[this.fromCurrency]).toFixed(2);
      //     // this.amountes = (this.amount * this.rate).toFixed(2);
      //     // this.total = ((this.amount * this.rate) * 0.20).toFixed(2);
      //     // this.totals = (Number(this.total) + Number(this.amountes)).toFixed(2);
      //     // this.convertedAmount = (this.amount * this.rate).toFixed(2);
      //     // this.times = data.time_last_update_utc;
      //   })
      
      fetch(`https://cdn.moneyconvert.net/api/latest.json`)
        .then(res => res.json())
        .then(data =>{
          this.data = data;
          this.rate = Number(data.rates[this.fromCurrency]).toFixed(2)
          this.rate = Number(data.rates[this.fromCurrency]).toFixed(2);
            this.amountes = (this.amount * data.rates[this.fromCurrency]).toFixed(2);
            this.total = ((this.amount * this.rate) * 0.20).toFixed(2);
            this.totals = (Number(this.total) + Number(this.amountes)).toFixed(2);
        })
    },
    percentageChange(currencyCode) {
      if (!this.data) return 0;

      const oldRate = Number(this.data.rates[this.toCurrency]);
      const newRate = Number(this.data.rates[currencyCode]);

      return (((newRate - oldRate) / oldRate)).toFixed(2);
    },
    newChange(currencyCode) {
      if (!this.data) return 0;

      const oldRate = Number(this.data.rates[this.toCurrency]);
      const newRate = Number(this.data.rates[currencyCode]);

      return ( oldRate / newRate).toFixed(2);
    },
    newsChange(currencyCode) {
      if (!this.data) return 0;

      const oldRate = Number(this.data.rates[this.toCurrency]);
      const newRate = Number(this.data.rates[currencyCode]);

      return (  newRate / oldRate ).toFixed(2);
    },
  },
  mounted() {
    this.fetchData();
  },
  });
  
</script>
<style scoped>
    @media (min-width: 1282px){
      .h3 .v-icon{
        margin-left: 12px;
      }
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
  