<template>
    <v-row class="devices">
        <v-col cols="12">
          <v-col class="devices-title-box">
            
            <div v-for="code in currenciese" :key="code.id">
              <p class="devices-title" v-if="code.code === toCurrency">Taux de change du  {{ (code.name).toUpperCase() }}</p>
              <!-- <h1 class="devices-title">taux de change du dirham des Émirats arabes unis</h1> -->
            </div>
            <v-select v-model="toCurrency" :items="currencies" label="Vers la devise"></v-select>
            
            
          </v-col>
          <v-tabs v-model="tab" class="tabs">
            <v-tab v-for="(region, index) in regions" :key="index"><h2>{{ region.name }}</h2></v-tab>
          </v-tabs>
           <div class="title-colonne">
                <tr>
                    <th class="text-left" colspan="10"><h3>Pays</h3></th>
                    <th class="text-right"><h3>Taux d'achat</h3></th>
                    <th class="text-right"><h3>Taux de vente</h3></th>
                    <th class="variations"><h3>Variation</h3></th>
                </tr>
           </div>
            <!-- <v-tab-item class="tabs-items" v-for="(region, index) in regions" :key="index" v-show="tab === index"> -->
              <div v-show="tab === index" v-for="(regions, index) in regions" :key="index" class="tabs-items" >
                
              <v-simple-table class="table-change">
                <thead class="table-header">
                 
                    
                    <tr v-for="currency in regions.currencies" :key="currency.name">
                    <th class="flag-pays center-align middle-align" colspan="1"><v-img :src="currency.flag" alt="flag" width="100" height="60"></v-img></th>
                    <th class="nom-pays center-align middle-align" colspan="10"><h3>{{ currency.name }}</h3></th>
                    <!-- <th class="text-right" colspan="2"><h3>{{ currency.buyRate }}</h3> </th> -->
                    <th class="text-right"><h3>  {{ (currency.buyRate).toFixed(2) }} <br><b>{{toCurrency}} / {{ currency.code }}</b></h3></th>
                    <th class="text-right" colspan="2"><h3>  {{ (currency.sellRate).toFixed(2) }} <br><b>{{currency.code}} / {{toCurrency  }}</b></h3></th>
                    <th class="text-right"><h3>
                      <v-icon v-if="currency.variation > 0" color=#AF0A0A left class="mr-3">fas fa-arrow-down</v-icon>
                      <v-icon v-if="currency.variation < 0" color="green" left class="mr-2">fas fa-arrow-up</v-icon>
                      <span class="variation" :style="{ color: currency.variation > 0 ? 'green' : 'red' }">
                        {{    currency.variation }} %
                      </span></h3>
                    </th>
                  </tr>
                </thead>
                <!-- <tbody class="tbod">
                  <tr v-for="currency in currencies" :key="currency.name">
                    <td class="flag-pays" colspan="1"><v-img :src="currency.flag" alt="flag" width="80" height="30"></v-img></td>
                    <td class="nom-pays" colspan="5"><h3>{{ currency.name }}</h3></td>
                    <td class="text-right" colspan="2"><h3>{{ currency.buyRate }}</h3> </td>
                    <td class="text-right" colspan="1"><h3>{{ currency.sellRate }}</h3></td>
                    <td class="text-right" colspan="2"><h3>
                      <v-icon v-if="currency.variation > 0" color="red" left class="mr-1">fas fa-arrow-down</v-icon>
                      <v-icon v-if="currency.variation < 0" color="green">fas fa-arrow-up</v-icon>
                      <span :style="{ color: currency.variation > 0 ? 'green' : 'red' }">
                        {{ currency.variation }} %
                      </span></h3>
                    </td>
                  </tr>
                </tbody> -->
              </v-simple-table>
            </div>
            <!-- </v-tab-item> -->
        </v-col>
      </v-row>
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
name: 'HomeView',
data() {
  return {
    tab: 0,
    amount: null,
        recipientAmount: null,
        data: null,
        toCurrency: "EUR",
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
    regions: [
  {
    name: 'Afrique',
    currencies: [
    
      // Maroc
      {
        code: "MAD",
        name: 'Dirham Marocain',
        flag: 'https://flagsapi.com/MA/flat/64.png',
        buyRate: 2.7304,
        sellRate: 0.3663,
        variation: 0.01
      },
      // Afrique du Sud
      {
        code: "ZAR",
        name: 'Rand Sud-africain',
        flag: 'https://flagsapi.com/ZA/flat/64.png',
        buyRate: 5.0287,
        sellRate: 0.1989,
        variation: -0.04
      },
      // Égypte
      {
        code: "EGP",
        name: 'Jenihea Égyptienne',
        flag: 'https://flagsapi.com/EG/flat/64.png',
        buyRate: 12.982,
        sellRate: 0.07703,
        variation: -0.57
      },
      // Tunisie
      {
        code: "TND",
        name: 'Dinar Tunisien',
        flag: 'https://flagsapi.com/TN/flat/64.png',
        buyRate: 0.8515,
        sellRate: 1.1744,
        variation: 0.00
      },
      // Algérie
      {
        code: "DZD",
        name: 'Dinar Algérien',
        flag: 'https://flagsapi.com/DZ/flat/64.png',
        buyRate: 138.275,
        sellRate: 0.007235,
        variation: 0.12
      },
      // Nigeria
      {
        code: "NGN",
        name: 'Naira Nigérian',
        flag: 'https://flagsapi.com/NG/flat/64.png',
        buyRate: 513.43,
        sellRate: 0.001948,
        variation: -0.23
      },
      // Kenya
      {
        code: "KES",
        name: 'Shilling Kenyan',
        flag: 'https://flagsapi.com/KE/flat/64.png',
        buyRate: 113.89,
        sellRate: 0.008781,
        variation: 0.05
      },
      // Côte d'Ivoire
      {
        code: "XOF",
        name: 'Franc CFA (BCEAO)',
        flag: 'https://flagsapi.com/CI/flat/64.png',
        buyRate: 609.82,
        sellRate: 0.001641,
        variation: 0.09
      },
      // Ghana
      {
        code: "GHS",
        name: 'Cedi Ghanéen',
        flag: 'https://flagsapi.com/GH/flat/64.png',
        buyRate: 6.1323,
        sellRate: 0.1629,
        variation: -0.02
      },
      // Tanzanie
      {
        code: "TZS",
        name: 'Shilling Tanzanien',
        flag: 'https://flagsapi.com/TZ/flat/64.png',
        buyRate: 2310.92,
        sellRate: 0.000433,
        variation: 0.08
      }
    
    ]
  },
  {
    name: 'Amérique du Nord',
    currencies: [
      {
        code: "USD",
        name: "United States Dollar",
        flag: 'https://flagsapi.com/US/flat/64.png',
        buyRate: 3.6725,
        sellRate: 3.6850,
        variation: -0.02
      },
      {
        code: "CAD",
        name: "Canadian Dollar",
        flag: 'https://flagsapi.com/CA/flat/64.png',
        buyRate: 2.8700,
        sellRate: 2.8850,
        variation: 0.05
      },
      {
        code: "MXN",
        name: "Mexican Peso",
        flag: 'https://flagsapi.com/MX/flat/64.png',
        buyRate: 0.1782,
        sellRate: 0.1814,
        variation: -0.03
      },
      {
        code: "BZD",
        name: "Belize Dollar",
        flag: 'https://flagsapi.com/BZ/flat/64.png',
        buyRate: 1.8230,
        sellRate: 1.8430,
        variation: 0.02
      },
      {
        code: "HTG",
        name: "Haitian Gourde",
        flag: 'https://flagsapi.com/HT/flat/64.png',
        buyRate: 0.0395,
        sellRate: 0.0410,
        variation: 0.01
      }
    ]
  },
  {
    name: 'Amérique du Sud',
    currencies: [
      {
        code: "ARS",
        name: "Peso Argentin",
        flag: "https://flagsapi.com/AR/flat/64.png",
        buyRate: 0.0205,
        sellRate: 0.0210,
        variation: -0.15
      },
      {
        code: "BOB",
        name: "Bolivian Boliviano",
        flag: "https://flagsapi.com/BO/flat/64.png",
        buyRate: 0.1440,
        sellRate: 0.1412,
        variation: -0.02
      },
      {
        code: "BRL",
        name: "Brazilian Real",
        flag: "https://flagsapi.com/BR/flat/64.png",
        buyRate: 0.2109,
        sellRate: 0.2115,
        variation: -0.01
      },
      {
        code: "CLP",
        name: "Chilean Peso",
        flag: "https://flagsapi.com/CL/flat/64.png",
        buyRate: 0.0025,
        sellRate: 0.0026,
        variation: 0.00
      },
      {
        code: "COP",
        name: "Colombian Peso",
        flag: "https://flagsapi.com/CO/flat/64.png",
        buyRate: 0.0009,
        sellRate: 0.0009,
        variation: 0.01
      },
      {
        code: "UYU",
        name: "Uruguayan Peso",
        flag: "https://flagsapi.com/UY/flat/64.png",
        buyRate: 0.0455,
        sellRate: 0.0460,
        variation: 0.02
      },
      {
        code: "VEF",
        name: "Venezuelan Bolívar",
        flag: "https://flagsapi.com/VE/flat/64.png",
        buyRate: 0.0004,
        sellRate: 0.0004,
        variation: -0.02
      }
    ]
  },
  {
    name: 'Asie',
    currencies: [
    {
      name: 'Yen Japonais',
      flag: 'https://flagsapi.com/JP/flat/64.png',
      buyRate: 0.0332,
      sellRate: 0.0334,
      variation: 0.03
    },
    {
      name: 'Dollar de Hong Kong',
      flag: 'https://flagsapi.com/HK/flat/64.png',
      buyRate: 0.1272,
      sellRate: 0.1275,
      variation: -0.01
    },
    {
      name: 'Dollar de Singapour',
      flag: 'https://flagsapi.com/SG/flat/64.png',
      buyRate: 2.714,
      sellRate: 2.718,
      variation: 0.02
    },
    {
      name: 'Baht Thaïlandais',
      flag: 'https://flagsapi.com/TH/flat/64.png',
      buyRate: 0.0312,
      sellRate: 0.0314,
      variation: 0.01
    },
    {
      name: 'Roupie Indonésienne',
      flag: 'https://flagsapi.com/ID/flat/64.png',
      buyRate: 0.000023,
      sellRate: 0.000024,
      variation: -0.03
    },
    {
      name: 'Roupie Indienne',
      flag: 'https://flagsapi.com/IN/flat/64.png',
      buyRate: 0.0135,
      sellRate: 0.0136,
      variation: 0.00
    },
    {
      name: 'Roupie Pakistanaise',
      flag: 'https://flagsapi.com/PK/flat/64.png',
      buyRate: 0.0064,
      sellRate: 0.0065,
      variation: -0.02
    },
    {
  name: 'Tenge Kazakh',
  flag: 'https://flagsapi.com/KZ/flat/64.png',
  buyRate: 0.0023,
  sellRate: 0.0024,
  variation: 0.00
},
{
  name: 'Dong Vietnamien',
  flag: 'https://flagsapi.com/VN/flat/64.png',
  buyRate: 0.000043,
  sellRate: 0.000044,
  variation: -0.01
},
{
  name: 'Som Ouzbek',
  flag: 'https://flagsapi.com/UZ/flat/64.png',
  buyRate: 0.000093,
  sellRate: 0.000094,
  variation: 0.00
}
  ]
  },
  {
    name: 'Europe',
    currencies: [
    {
      name: 'Euro',
      code: 'EUR',
      flag: 'https://flagsapi.com/EU/flat/64.png',
      buyRate: 1.0, // Par exemple, le taux de change de l'euro peut être considéré comme 1:1
      sellRate: 1.0,
      variation: 0.0 // Vous pouvez ajouter la variation si vous avez les données réelles
    },
    {
      name: 'Livre sterling',
      code: 'GBP',
      flag: 'https://flagsapi.com/GB/flat/64.png',
      buyRate: 0.85, // Taux de change GBP vers EUR
      sellRate: 1.18, // Taux de change GBP vers EUR
      variation: -0.02 // Variation en pourcentage par rapport à la dernière mise à jour
    },
    {
      name: 'Franc suisse',
      code: 'CHF',
      flag: 'https://flagsapi.com/CH/flat/64.png',
      buyRate: 1.10, // Taux de change CHF vers EUR
      sellRate: 0.91, // Taux de change CHF vers EUR
      variation: 0.03 // Variation en pourcentage par rapport à la dernière mise à jour
    },
    {
      name: 'Couronne danoise',
      code: 'DKK',
      flag: 'https://flagsapi.com/DK/flat/64.png',
      buyRate: 7.43, // Taux de change DKK vers EUR
      sellRate: 0.13, // Taux de change DKK vers EUR
      variation: 0.01 // Variation en pourcentage par rapport à la dernière mise à jour
    },
    {
  name: 'Couronne suédoise',
  code: 'SEK',
  flag: 'https://flagsapi.com/SE/flat/64.png',
  buyRate: 10.20, // Taux de change SEK vers EUR
  sellRate: 0.098, // Taux de change SEK vers EUR
  variation: 0.02 // Variation en pourcentage par rapport à la dernière mise à jour
},
{
  name: 'Couronne norvégienne',
  code: 'NOK',
  flag: 'https://flagsapi.com/NO/flat/64.png',
  buyRate: 10.80, // Taux de change NOK vers EUR
  sellRate: 0.093, // Taux de change NOK vers EUR
  variation: -0.01 // Variation en pourcentage par rapport à la dernière mise à jour
},
{
  name: 'Zloty polonais',
  code: 'PLN',
  flag: 'https://flagsapi.com/PL/flat/64.png',
  buyRate: 4.57, // Taux de change PLN vers EUR
  sellRate: 0.219, // Taux de change PLN vers EUR
  variation: 0.05 // Variation en pourcentage par rapport à la dernière mise à jour
},
{
  name: 'Forint hongrois',
  code: 'HUF',
  flag: 'https://flagsapi.com/HU/flat/64.png',
  buyRate: 380.50, // Taux de change HUF vers EUR
  sellRate: 0.0026, // Taux de change HUF vers EUR
  variation: -0.03 // Variation en pourcentage par rapport à la dernière mise à jour
},
{
  name: 'Couronne tchèque',
  code: 'CZK',
  flag: 'https://flagsapi.com/CZ/flat/64.png',
  buyRate: 25.35, // Taux de change CZK vers EUR
  sellRate: 0.039, // Taux de change CZK vers EUR
  variation: 0.02 // Variation en pourcentage par rapport à la dernière mise à jour
},
    
  ]
  },
  {
    name: 'Moyen Orient',
    currencies: [
    {
      name: 'Riyal Saoudien',
      flag: 'https://flagsapi.com/SA/flat/64.png',
      buyRate: 0.977,
      sellRate: 0.978,
      variation: 0.00
    },
    {
      name: 'United Arab Emirates Dirham',
      flag: 'https://flagsapi.com/AE/flat/64.png',
      buyRate: 3.6725,
      sellRate: 3.6730,
      variation: 0.01
    },
    {
      name: 'Dinar Koweïtien',
      flag: 'https://flagsapi.com/KW/flat/64.png',
      buyRate: 3.29,
      sellRate: 3.30,
      variation: 0.05
    },
    {
      name: 'Dinar Bahreïni',
      flag: 'https://flagsapi.com/BH/flat/64.png',
      buyRate: 2.65,
      sellRate: 2.66,
      variation: -0.02
    },
    {
      name: 'Rial Omanais',
      flag: 'https://flagsapi.com/OM/flat/64.png',
      buyRate: 2.600,
      sellRate: 2.601,
      variation: 0.03
    },
    {
      name: 'Dinar Jordanien',
      flag: 'https://flagsapi.com/JO/flat/64.png',
      buyRate: 1.410,
      sellRate: 1.411,
      variation: 0.01
    },
    {
      name: 'Dinar Irakien',
      flag: 'https://flagsapi.com/IQ/flat/64.png',
      buyRate: 1450.00,
      sellRate: 1451.00,
      variation: 0.02
    },
    {
      name: 'Livre Libanaise',
      flag: 'https://flagsapi.com/LB/flat/64.png',
      buyRate: 1507.50,
      sellRate: 1508.50,
      variation: 0.04
    },
    {
      name: 'Rial Yéménite',
      flag: 'https://flagsapi.com/YE/flat/64.png',
      buyRate: 250.00,
      sellRate: 251.00,
      variation: -0.05
    },
    {
      name: 'Shekel Palestinien',
      flag: 'https://flagsapi.com/PS/flat/64.png',
      buyRate: 3.28,
      sellRate: 3.29,
      variation: 0.01
    }
  ]
  },
  {
    name: 'Océanie',
    currencies: [
      {
        code: "AUD",
        name: "Australian Dollar",
        flag: "https://flagsapi.com/AU/flat/64.png",
        buyRate: 2.631,
        sellRate: 2.635,
        variation: -0.01
      },
      {
        code: "FJD",
        name: "Fijian Dollar",
        flag: "https://flagsapi.com/FJ/flat/64.png",
        buyRate: 2.014,
        sellRate: 2.018,
        variation: 0.02
      },
      {
        code: "TOP",
        name: "Tongan Paʻanga",
        flag: "https://flagsapi.com/TO/flat/64.png",
        buyRate: 1.216,
        sellRate: 1.22,
        variation: 0.01
      },
      {
        code: "WST",
        name: "Samoan Tālā",
        flag: "https://flagsapi.com/WS/flat/64.png",
        buyRate: 1.337,
        sellRate: 1.34,
        variation: 0.03
      },
      {
        code: "NZD",
        name: "New Zealand Dollar",
        flag: "https://flagsapi.com/NZ/flat/64.png",
        buyRate: 2.121,
        sellRate: 2.124,
        variation: -0.02
      },
      {
        code: "PGK",
        name: "Papua New Guinean Kina",
        flag: "https://flagsapi.com/PG/flat/64.png",
        buyRate: 0.747,
        sellRate: 0.75,
        variation: 0.00
      },
    ]
  }
]

  }
},
methods: {
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

      return (((newRate - oldRate) / oldRate) * 100).toFixed(2);
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
},
components: {
},
});
</script>
<style scoped>
.devices {
  content: " ";
  position: absolute;
  top: 2320px;
  height:  780px;
  width: 100%;
  background: #FFEAE3;
}
.devices-title-box{
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  top: 8%;
  height: 8%;
  left: 4.5%;
  width: 67%;
  padding: 0px;
  background: #FFB1B1;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgb(248, 249, 201);
  text-align: right;
}
.devices-title {
  display: flex;
  width: 105%;
  text-align: left;
  padding-left: 5%;
  margin-left: 4%;
  padding-top: 1.3%;
  font-size: 215%;
  font-weight: bold;
}

.devices-title-box .v-select{
        width: 10%;
        height: 8%;
        margin-top: 0cm;
        margin-left: 15%;
      }
      .title-colonne{
        position: absolute; /* Enable vertical scrolling if content overflows */
      display: flex;
      flex-direction: column;
      padding-left: 2.5%;
      top: 21.6%;
      left: 2.9%;
      width: 100%;
      }
      .title-colonne h3{
        text-align: center;
        font-size: 26px;
      }
      .title-colonne .text-left{
        font-size: 26px;
        width: 620px;
      }
      .title-colonne .text-right{
        width: 240px;
      }
      .title-colonne .text-right h3{
        font-size: 26px;
      }
      .title-colonne .variations h3{
        width: 100%;
        text-align: center;
      }
      .title-colonne .variations{
        width: 19.5%;
      }
      .title-colonne th {
      border-bottom: 4px solid rgb(0, 17, 99);
      padding: 6px;
      vertical-align: bottom;

    }
.tabs{
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  top: 16%;
  height: 6.5%;
  left: 4.5%;
  width: 76%;
  padding: 0px;
  background: #FFB1B1;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgb(248, 249, 201);
  text-align: right;
  font-weight: bold;
  
}

.tabs-items{
  position: absolute;
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
  display: flex;
  flex-direction: column;
  padding-left: 2.5%;
  top: 30.6%;
  left: 3.3%;
  height: 66%;
  width: 94%;
  border: #FFEAE3 solid 10%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(255, 255, 255);
  background-color: #FFEAE3
}
.table-change {
        width: 96%;
        left: 27%;
      }
      
.table-change h3{
       width: 120%;
        position: relative;
        text-align: left;
        font-size: 110%;
        align-content: center;
      }

      .text-right b{
        font-size: 86%;
        text-align: center;
      }
      .nom-pays{
        width: 38%;
        height: 100%;
        margin-left:35px;
        font-size: 165%;
        font-style: unset;
        font-weight: bold;
        letter-spacing: 0.1em;
        padding: 4px;
      }
      .nom-pays:hover{
        background-color:#E7ECF6;
        letter-spacing: 0.19em;
        font-size: 140%;
        font-weight: bold;
      }
      .v-img{
        width: 100%;
        height: 80%;
        border-radius: 5px;
      }
      .v-img:hover{
        width: 105%;
      }
      .flag-pays{
        height: 100%;
        padding: 0px 0px 0px 0px;
      }
      .table-header{
        align-content: center;
      }
      .text-right{
        width: 20%;
        height: 100%;
      }
      .text-right h3{
        text-align: center;
        font-size: 120%;
      }
      
      .text-right h3 span{
        text-align: right;
      }
      .variation{
        text-align: right;
        left: 2%;
      }
      table-header {
      width: 100%;
      border-collapse: collapse;
    }
    th {
      border-bottom: 2px solid black;
      padding: 6px;
      vertical-align: bottom;
    }
    .text-right h3 v-icon{
      left: 2%;
      font-size:20%;
    }
     
    
</style>
