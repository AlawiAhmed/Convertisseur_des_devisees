<template>
    <div class="currency-converter">
    <h1>Taux de change du EURO</h1>
    <div class="currency-selector">
      <v-select v-model="toCurrency" :items="currenciees" label="Vers la devise"></v-select>
    </div>
    
    <div class="continent-tabs">
      <button 
        v-for="continent in continents" 
        :key="continent"
        :class="{ active: selectedContinent === continent }"
        @click="selectContinent(continent)"
      >
        {{ continent }}
      </button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Pays</th>
          <th>Taux d'achat</th>
          <th>Taux de vente</th>
          <th>Variation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="currency in filteredCurrencies" :key="currency.code">
          <td>
            <img :src="getFlagUrl(currency.code)" :alt="currency.code" class="flag" width="54">
            {{ currency.name }}
          </td>
          <td>{{ newChange(currency.code) }} <br> {{toCurrency}} / {{ currency.code }}</td>
          <td>{{ newsChange(currency.code) }} <br> {{ currency.code }} / {{ toCurrency }}</td>
          <td :class="{ 'positive': currency.variation > 0, 'negative': currency.variation < 0 }">
            <span v-if="currency.variation !== 0">
              {{ currency.variation > 0 ? '↑' : '↓' }}
            </span>
            {{ Math.abs(currency.variation).toFixed(2) }}%
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
      currenciess: [],
      Currency: this.fromCurrency,
      selectedCurrency: 'EUR',
      selectedContinent: 'AMÉRIQUE DU NORD',
      continents: ['AFRIQUE', 'AMÉRIQUE DU NORD', 'AMÉRIQUE DU SUD', 'ASIE', 'MOYEN ORIENT' , 'EUROPE', 'OCÉANIE'],
      currenciees: [
        "USD", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", 
        "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", 
        "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CVE", "CZK", 
        "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", 
        "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", 
        "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", 
        "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", 
        "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", 
        "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", 
        "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", 
        "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD", "SSP", 
        "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", 
        "TZS", "UAH", "UGX", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XDR", 
        "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"
      ],
      currencies: [
  {
    name: 'Dirham Marocain',
    code: 'MAD',
    buyRate: 10.73,
    sellRate: 0.093,
    variation: -0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Rand Sud-africain',
    code: 'ZAR',
    buyRate: 20.15,
    sellRate: 0.050,
    variation: -0.04,
    continent: 'AFRIQUE'
  },
  {
    name: 'Naira Nigérian',
    code: 'NGN',
    buyRate: 513.43,
    sellRate: 0.0019,
    variation: -0.23,
    continent: 'AFRIQUE'
  },
  {
    name: 'Shilling Kenyan',
    code: 'KES',
    buyRate: 113.89,
    sellRate: 0.0088,
    variation: 0.05,
    continent: 'AFRIQUE'
  },
  {
    name: 'Dinar Tunisien',
    code: 'TND',
    buyRate: 3.22,
    sellRate: 0.31,
    variation: 0.10,
    continent: 'AFRIQUE'
  },
  {
    name: 'CFA Franc BCEAO',
    code: 'XOF',
    buyRate: 655.96,
    sellRate: 0.0015,
    variation: -0.02,
    continent: 'AFRIQUE'
  },
  {
    name: 'CFA Franc BEAC',
    code: 'XAF',
    buyRate: 655.96,
    sellRate: 0.0015,
    variation: -0.02,
    continent: 'AFRIQUE'
  },
  {
    name: 'Livre Égyptienne',
    code: 'EGP',
    buyRate: 20.07,
    sellRate: 0.05,
    variation: 0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Dinar Algérien',
    code: 'DZD',
    buyRate: 160.87,
    sellRate: 0.0062,
    variation: -0.09,
    continent: 'AFRIQUE'
  },
  {
    name: 'Pula Botswanais',
    code: 'BWP',
    buyRate: 12.34,
    sellRate: 0.081,
    variation: 0.03,
    continent: 'AFRIQUE'
  },
  {
    name: 'Dollar Namibien',
    code: 'NAD',
    buyRate: 16.56,
    sellRate: 0.060,
    variation: -0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Franc Comorien',
    code: 'KMF',
    buyRate: 491.21,
    sellRate: 0.002,
    variation: 0.04,
    continent: 'AFRIQUE'
  },
  {
    name: 'Ouguiya Mauritanien',
    code: 'MRU',
    buyRate: 40.22,
    sellRate: 0.025,
    variation: 0.11,
    continent: 'AFRIQUE'
  },
  {
    name: 'Kwacha Malawien',
    code: 'MWK',
    buyRate: 1087.56,
    sellRate: 0.00092,
    variation: 0.06,
    continent: 'AFRIQUE'
  },
  {
    name: 'Dalasi Gambien',
    code: 'GMD',
    buyRate: 58.13,
    sellRate: 0.017,
    variation: -0.03,
    continent: 'AFRIQUE'
  },
  {
    name: 'Shilling Tanzanien',
    code: 'TZS',
    buyRate: 2607.62,
    sellRate: 0.00038,
    variation: 0.02,
    continent: 'AFRIQUE'
  },
  {
    name: 'Leone Sierra-léonais',
    code: 'SLL',
    buyRate: 12200.12,
    sellRate: 0.000082,
    variation: 0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Kwanza Angolais',
    code: 'AOA',
    buyRate: 626.86,
    sellRate: 0.0016,
    variation: -0.05,
    continent: 'AFRIQUE'
  },
  {
    name: 'Lilangeni Swazi',
    code: 'SZL',
    buyRate: 16.78,
    sellRate: 0.060,
    variation: 0.10,
    continent: 'AFRIQUE'
  },
  {
    name: 'Metical Mozambicain',
    code: 'MZN',
    buyRate: 86.22,
    sellRate: 0.012,
    variation: 0.08,
    continent: 'AFRIQUE'
  },
  {
    name: 'Dollar US',
    code: 'USD',
    buyRate: 1.12,
    sellRate: 0.89,
    variation: 0.40,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Dollar Canadien',
    code: 'CAD',
    buyRate: 1.47,
    sellRate: 0.68,
    variation: -0.15,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Peso Mexicain',
    code: 'MXN',
    buyRate: 22.84,
    sellRate: 0.044,
    variation: 0.22,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Peso Dominicain',
    code: 'DOP',
    buyRate: 63.12,
    sellRate: 0.016,
    variation: 0.12,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Gourde Haïtienne',
    code: 'HTG',
    buyRate: 120.15,
    sellRate: 0.0083,
    variation: 0.02,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Colon Costaricain',
    code: 'CRC',
    buyRate: 703.41,
    sellRate: 0.0014,
    variation: 0.05,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Balboa Panaméen',
    code: 'PAB',
    buyRate: 1.12,
    sellRate: 0.89,
    variation: 0.40,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Quetzal Guatémaltèque',
    code: 'GTQ',
    buyRate: 8.72,
    sellRate: 0.115,
    variation: -0.05,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Cordoba Oro',
    code: 'NIO',
    buyRate: 41.08,
    sellRate: 0.024,
    variation: 0.06,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Lempira Hondurien',
    code: 'HNL',
    buyRate: 27.67,
    sellRate: 0.036,
    variation: 0.11,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Dollar Bélizien',
    code: 'BZD',
    buyRate: 2.27,
    sellRate: 0.44,
    variation: -0.09,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Dollar Trinidadien',
    code: 'TTD',
    buyRate: 7.60,
    sellRate: 0.13,
    variation: 0.03,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Dollar Jamaïcain',
    code: 'JMD',
    buyRate: 157.82,
    sellRate: 0.0063,
    variation: -0.01,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Dollar des Bahamas',
    code: 'BSD',
    buyRate: 1.12,
    sellRate: 0.89,
    variation: 0.40,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Dollar de Barbade',
    code: 'BBD',
    buyRate: 2.27,
    sellRate: 0.44,
    variation: -0.09,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Dollar de Trinité-et-Tobago',
    code: 'TTD',
    buyRate: 7.60,
    sellRate: 0.13,
    variation: 0.03,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Dollar de la Barbade',
    code: 'BBD',
    buyRate: 2.27,
    sellRate: 0.44,
    variation: -0.09,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Real Brésilien',
    code: 'BRL',
    buyRate: 5.66,
    sellRate: 0.18,
    variation: -0.33,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Peso Argentin',
    code: 'ARS',
    buyRate: 112.36,
    sellRate: 0.0089,
    variation: -0.11,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Peso Chilien',
    code: 'CLP',
    buyRate: 891.24,
    sellRate: 0.0011,
    variation: 0.07,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Sol Péruvien',
    code: 'PEN',
    buyRate: 4.06,
    sellRate: 0.25,
    variation: -0.02,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Guaraní Paraguayen',
    code: 'PYG',
    buyRate: 7902.15,
    sellRate: 0.00013,
    variation: 0.09,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Peso Uruguayen',
    code: 'UYU',
    buyRate: 49.67,
    sellRate: 0.020,
    variation: 0.01,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Bolivar Vénézuélien',
    code: 'VES',
    buyRate: 4.35,
    sellRate: 0.23,
    variation: 0.12,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Peso Colombien',
    code: 'COP',
    buyRate: 4471.34,
    sellRate: 0.00022,
    variation: -0.05,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Peso Guyanais',
    code: 'GYD',
    buyRate: 235.16,
    sellRate: 0.0043,
    variation: 0.08,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Boliviano Bolivien',
    code: 'BOB',
    buyRate: 7.73,
    sellRate: 0.13,
    variation: 0.04,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Nuevo Sol Péruvien',
    code: 'PEN',
    buyRate: 4.06,
    sellRate: 0.25,
    variation: -0.02,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Sol Péruvien',
    code: 'PEN',
    buyRate: 4.06,
    sellRate: 0.25,
    variation: -0.02,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Roupie Seychelloise',
    code: 'SCR',
    buyRate: 15.21,
    sellRate: 0.066,
    variation: 0.03,
    continent: 'ASIE'
  },
  {
    name: 'Afghani Afghan',
    code: 'AFN',
    buyRate: 123.55,
    sellRate: 0.0081,
    variation: -0.01,
    continent: 'ASIE'
  },
  {
    name: 'Kip Laotien',
    code: 'LAK',
    buyRate: 11314.43,
    sellRate: 0.000088,
    variation: -0.03,
    continent: 'ASIE'
  },
  {
    name: 'Riel Cambodgien',
    code: 'KHR',
    buyRate: 4598.44,
    sellRate: 0.00022,
    variation: 0.07,
    continent: 'ASIE'
  },
  {
    name: 'Kyat Birman',
    code: 'MMK',
    buyRate: 1881.09,
    sellRate: 0.00053,
    variation: 0.04,
    continent: 'ASIE'
  },
  {
    name: 'Rufiyaa Maldivienne',
    code: 'MVR',
    buyRate: 17.28,
    sellRate: 0.058,
    variation: -0.02,
    continent: 'ASIE'
  },
  {
    name: 'Som Tadjik',
    code: 'TJS',
    buyRate: 13.65,
    sellRate: 0.073,
    variation: 0.03,
    continent: 'ASIE'
  },
  {
    name: 'Dollar de Brunei',
    code: 'BND',
    buyRate: 1.52,
    sellRate: 0.66,
    variation: 0.02,
    continent: 'ASIE'
  },
  {
    name: 'Peso Philippin',
    code: 'PHP',
    buyRate: 60.02,
    sellRate: 0.017,
    variation: 0.06,
    continent: 'ASIE'
  },
  {
    name: 'Ngultrum Bhoutanais',
    code: 'BTN',
    buyRate: 81.77,
    sellRate: 0.0122,
    variation: -0.01,
    continent: 'ASIE'
  },
  {
    name: 'Roupie Sri Lankaise',
    code: 'LKR',
    buyRate: 228.18,
    sellRate: 0.0044,
    variation: 0.09,
    continent: 'ASIE'
  },
  {
    name: 'Dollar des Fidji',
    code: 'FJD',
    buyRate: 2.31,
    sellRate: 0.433,
    variation: 0.05,
    continent: 'ASIE'
  },
  {
    name: 'Tugrik Mongol',
    code: 'MNT',
    buyRate: 3227.53,
    sellRate: 0.00031,
    variation: 0.06,
    continent: 'ASIE'
  },
  {
    name: 'Som Ouzbek',
    code: 'UZS',
    buyRate: 14079.63,
    sellRate: 0.000071,
    variation: 0.01,
    continent: 'ASIE'
  },
  {
    name: 'Dong Vietnamien',
    code: 'VND',
    buyRate: 25889.90,
    sellRate: 0.000039,
    variation: 0.09,
    continent: 'ASIE'
  },
  {
    name: 'Ariary Malgache',
    code: 'MGA',
    buyRate: 4535.54,
    sellRate: 0.00022,
    variation: 0.01,
    continent: 'ASIE'
  },
  {
    name: 'Rial Iranien',
    code: 'IRR',
    buyRate: 47321.50,
    sellRate: 0.000021,
    variation: 0.03,
    continent: 'ASIE'
  },
  {
    name: 'Dollar de Singapour',
    code: 'SGD',
    buyRate: 1.52,
    sellRate: 0.66,
    variation: 0.10,
    continent: 'ASIE'
  },
  {
    name: 'Dollar de Hong Kong',
    code: 'HKD',
    buyRate: 8.71,
    sellRate: 0.115,
    variation: -0.03,
    continent: 'ASIE'
  },
  {
    name: 'Roupie Pakistanaise',
    code: 'PKR',
    buyRate: 227.32,
    sellRate: 0.0044,
    variation: 0.05,
    continent: 'ASIE'
  },
  {
    name: 'Tenge Kazakh',
    code: 'KZT',
    buyRate: 536.22,
    sellRate: 0.0019,
    variation: 0.01,
    continent: 'ASIE'
  },
  {
    name: 'Ringgit Malaisien',
    code: 'MYR',
    buyRate: 4.71,
    sellRate: 0.21,
    variation: 0.12,
    continent: 'ASIE'
  },
  {
    name: 'Yen Japonais',
    code: 'JPY',
    buyRate: 129.50,
    sellRate: 0.0077,
    variation: -0.18,
    continent: 'ASIE'
  },
  {
    name: 'Yuan Chinois',
    code: 'CNY',
    buyRate: 7.18,
    sellRate: 0.14,
    variation: 0.09,
    continent: 'ASIE'
  },
  {
    name: 'Roupie Indienne',
    code: 'INR',
    buyRate: 84.26,
    sellRate: 0.012,
    variation: -0.05,
    continent: 'ASIE'
  },
  {
    name: 'Won Sud-coréen',
    code: 'KRW',
    buyRate: 1331.22,
    sellRate: 0.00075,
    variation: 0.14,
    continent: 'ASIE'
  },
  {
    name: 'Baht Thaïlandais',
    code: 'THB',
    buyRate: 36.88,
    sellRate: 0.027,
    variation: 0.08,
    continent: 'ASIE'
  },
  {
    name: 'Dollar de Singapour',
    code: 'SGD',
    buyRate: 1.52,
    sellRate: 0.66,
    variation: 0.10,
    continent: 'ASIE'
  },
  {
    name: 'Dollar de Hong Kong',
    code: 'HKD',
    buyRate: 8.71,
    sellRate: 0.115,
    variation: -0.03,
    continent: 'ASIE'
  },
  {
    name: 'Roupie Pakistanaise',
    code: 'PKR',
    buyRate: 227.32,
    sellRate: 0.0044,
    variation: 0.05,
    continent: 'ASIE'
  },
  {
    name: 'Roupie Indonésienne',
    code: 'IDR',
    buyRate: 15972.25,
    sellRate: 0.000063,
    variation: -0.02,
    continent: 'ASIE'
  },
  {
    name: 'Tenge Kazakh',
    code: 'KZT',
    buyRate: 536.22,
    sellRate: 0.0019,
    variation: 0.01,
    continent: 'ASIE'
  },
  {
    name: 'Ringgit Malaisien',
    code: 'MYR',
    buyRate: 4.71,
    sellRate: 0.21,
    variation: 0.12,
    continent: 'ASIE'
  },
  {
    name: 'Tugrik Mongol',
    code: 'MNT',
    buyRate: 3227.53,
    sellRate: 0.00031,
    variation: 0.06,
    continent: 'ASIE'
  },
  {
    name: 'Ngultrum Bhoutanais',
    code: 'BTN',
    buyRate: 81.77,
    sellRate: 0.0122,
    variation: -0.01,
    continent: 'ASIE'
  },
  {
    name: 'Roupie Sri Lankaise',
    code: 'LKR',
    buyRate: 228.18,
    sellRate: 0.0044,
    variation: 0.09,
    continent: 'ASIE'
  },
  {
    name: 'Riel Cambodgien',
    code: 'KHR',
    buyRate: 4598.44,
    sellRate: 0.00022,
    variation: 0.07,
    continent: 'ASIE'
  },
  {
    name: 'Kyat Birman',
    code: 'MMK',
    buyRate: 1881.09,
    sellRate: 0.00053,
    variation: 0.04,
    continent: 'ASIE'
  },
  {
    name: 'Rufiyaa Maldivienne',
    code: 'MVR',
    buyRate: 17.28,
    sellRate: 0.058,
    variation: -0.02,
    continent: 'ASIE'
  },
  {
    name: 'Som Tadjik',
    code: 'TJS',
    buyRate: 13.65,
    sellRate: 0.073,
    variation: 0.03,
    continent: 'ASIE'
  },
  {
    name: 'Dong Vietnamien',
    code: 'VND',
    buyRate: 25889.90,
    sellRate: 0.000039,
    variation: 0.09,
    continent: 'ASIE'
  },
  {
    name: 'Ariary Malgache',
    code: 'MGA',
    buyRate: 4535.54,
    sellRate: 0.00022,
    variation: 0.01,
    continent: 'ASIE'
  },
  {
    name: 'Kip Laotien',
    code: 'LAK',
    buyRate: 11314.43,
    sellRate: 0.000088,
    variation: -0.03,
    continent: 'ASIE'
  },
  {
    name: 'Dollar des Fidji',
    code: 'FJD',
    buyRate: 2.31,
    sellRate: 0.433,
    variation: 0.05,
    continent: 'ASIE'
  },
  {
    name: 'Peso Philippin',
    code: 'PHP',
    buyRate: 60.02,
    sellRate: 0.017,
    variation: 0.06,
    continent: 'ASIE'
  },
  {
    name: 'Dollar de Brunei',
    code: 'BND',
    buyRate: 1.52,
    sellRate: 0.66,
    variation: 0.02,
    continent: 'ASIE'
  },
  {
    name: 'Dinar Serbe',
    code: 'RSD',
    buyRate: 117.64,
    sellRate: 0.0085,
    variation: -0.04,
    continent: 'ASIE'
  },
  {
    name: 'Som Ouzbek',
    code: 'UZS',
    buyRate: 14079.63,
    sellRate: 0.000071,
    variation: 0.01,
    continent: 'ASIE'
  },
  {
    name: 'Manat Azerbaïdjanais',
    code: 'AZN',
    buyRate: 1.89,
    sellRate: 0.53,
    variation: 0.02,
    continent: 'ASIE'
  },
  {
    name: 'Riel Cambodgien',
    code: 'KHR',
    buyRate: 4598.44,
    sellRate: 0.00022,
    variation: 0.07,
    continent: 'ASIE'
  },
  {
    name: 'Rufiyaa Maldivienne',
    code: 'MVR',
    buyRate: 17.28,
    sellRate: 0.058,
    variation: -0.02,
    continent: 'ASIE'
  },
  {
    name: 'Som Tadjik',
    code: 'TJS',
    buyRate: 13.65,
    sellRate: 0.073,
    variation: 0.03,
    continent: 'ASIE'
  },
  {
    name: 'Dollar de Brunei',
    code: 'BND',
    buyRate: 1.52,
    sellRate: 0.66,
    variation: 0.02,
    continent: 'ASIE'
  },
  {
    name: 'Peso Philippin',
    code: 'PHP',
    buyRate: 60.02,
    sellRate: 0.017,
    variation: 0.06,
    continent: 'ASIE'
  },
  {
    name: 'Ngultrum Bhoutanais',
    code: 'BTN',
    buyRate: 81.77,
    sellRate: 0.0122,
    variation: -0.01,
    continent: 'ASIE'
  },
  {
    name: 'Roupie Sri Lankaise',
    code: 'LKR',
    buyRate: 228.18,
    sellRate: 0.0044,
    variation: 0.09,
    continent: 'ASIE'
  },
  {
    name: 'Dinar Jordanien',
    code: 'JOD',
    buyRate: 0.79,
    sellRate: 1.27,
    variation: -0.03,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Livre Libanaise',
    code: 'LBP',
    buyRate: 1715.50,
    sellRate: 0.00058,
    variation: 0.01,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Riyal Saoudien',
    code: 'SAR',
    buyRate: 4.20,
    sellRate: 0.24,
    variation: -0.01,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Dinar Koweïtien',
    code: 'KWD',
    buyRate: 0.34,
    sellRate: 2.94,
    variation: -0.05,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Dinar Bahreïni',
    code: 'BHD',
    buyRate: 0.42,
    sellRate: 2.38,
    variation: 0.07,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Riyal Qatari',
    code: 'QAR',
    buyRate: 4.09,
    sellRate: 0.245,
    variation: 0.03,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Riyal Omanais',
    code: 'OMR',
    buyRate: 0.43,
    sellRate: 2.31,
    variation: -0.02,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Dinar Irakien',
    code: 'IQD',
    buyRate: 1294.51,
    sellRate: 0.00077,
    variation: 0.06,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Riyal Yéménite',
    code: 'YER',
    buyRate: 280.52,
    sellRate: 0.0036,
    variation: 0.02,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Euro',
    code: 'EUR',
    buyRate: 1.0,
    sellRate: 1.0,
    variation: 0,
    continent: 'EUROPE'
  },
  {
    name: 'Livre Sterling',
    code: 'GBP',
    buyRate: 0.85,
    sellRate: 1.18,
    variation: -0.24,
    continent: 'EUROPE'
  },
  {
    name: 'Franc Suisse',
    code: 'CHF',
    buyRate: 1.04,
    sellRate: 0.96,
    variation: 0.11,
    continent: 'EUROPE'
  },
  {
    name: 'Couronne Suédoise',
    code: 'SEK',
    buyRate: 10.25,
    sellRate: 0.098,
    variation: -0.07,
    continent: 'EUROPE'
  },
  {
    name: 'Couronne Norvégienne',
    code: 'NOK',
    buyRate: 9.70,
    sellRate: 0.103,
    variation: 0.02,
    continent: 'EUROPE'
  },
  {
    name: 'Couronne Danoise',
    code: 'DKK',
    buyRate: 7.43,
    sellRate: 0.134,
    variation: -0.01,
    continent: 'EUROPE'
  },
  {
    name: 'Złoty Polonais',
    code: 'PLN',
    buyRate: 4.56,
    sellRate: 0.219,
    variation: 0.03,
    continent: 'EUROPE'
  },
  {
    name: 'Kuna Croate',
    code: 'HRK',
    buyRate: 7.61,
    sellRate: 0.131,
    variation: 0.01,
    continent: 'EUROPE'
  },
  {
    name: 'Forint Hongrois',
    code: 'HUF',
    buyRate: 361.89,
    sellRate: 0.0028,
    variation: 0.05,
    continent: 'EUROPE'
  },
  {
    name: 'Lev Bulgare',
    code: 'BGN',
    buyRate: 1.96,
    sellRate: 0.51,
    variation: -0.02,
    continent: 'EUROPE'
  },
  {
    name: 'Couronne Tchèque',
    code: 'CZK',
    buyRate: 25.60,
    sellRate: 0.039,
    variation: -0.01,
    continent: 'EUROPE'
  },
  {
    name: 'Litas Lituanien',
    code: 'LTL',
    buyRate: 3.45,
    sellRate: 0.29,
    variation: 0.01,
    continent: 'EUROPE'
  },
  {
    name: 'Lats Letton',
    code: 'LVL',
    buyRate: 0.67,
    sellRate: 1.49,
    variation: -0.04,
    continent: 'EUROPE'
  },
  {
    name: 'Couronne Islandaise',
    code: 'ISK',
    buyRate: 146.27,
    sellRate: 0.0068,
    variation: 0.02,
    continent: 'EUROPE'
  },
  {
    name: 'Denar Macédonien',
    code: 'MKD',
    buyRate: 61.57,
    sellRate: 0.016,
    variation: 0.03,
    continent: 'EUROPE'
  },
  {
    name: 'Leu Roumain',
    code: 'RON',
    buyRate: 4.92,
    sellRate: 0.203,
    variation: 0.04,
    continent: 'EUROPE'
  },
  {
    name: 'Leu Moldave',
    code: 'MDL',
    buyRate: 21.46,
    sellRate: 0.047,
    variation: 0.02,
    continent: 'EUROPE'
  },
  {
    name: 'Lev Macédonien',
    code: 'MKD',
    buyRate: 61.57,
    sellRate: 0.016,
    variation: 0.03,
    continent: 'EUROPE'
  },
  {
    name: 'Shekel Israélien',
    code: 'ILS',
    buyRate: 3.81,
    sellRate: 0.263,
    variation: 0.01,
    continent: 'EUROPE'
  },
  {
    name: 'Livre Égyptienne',
    code: 'EGP',
    buyRate: 20.52,
    sellRate: 0.049,
    variation: 0.04,
    continent: 'EUROPE'
  },
  {
    name: 'Dollar Australien',
    code: 'AUD',
    buyRate: 1.57,
    sellRate: 0.64,
    variation: 0.40,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar Néo-zélandais',
    code: 'NZD',
    buyRate: 1.68,
    sellRate: 0.60,
    variation: 0.22,
    continent: 'OCÉANIE'
  },
  {
    name: 'Franc CFP',
    code: 'XPF',
    buyRate: 119.33,
    sellRate: 0.0084,
    variation: 0,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar des Fidji',
    code: 'FJD',
    buyRate: 2.31,
    sellRate: 0.433,
    variation: 0.05,
    continent: 'OCÉANIE'
  },
  {
    name: 'Ngultrum Bhoutanais',
    code: 'BTN',
    buyRate: 81.77,
    sellRate: 0.0122,
    variation: -0.01,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar des Îles Salomon',
    code: 'SBD',
    buyRate: 9.43,
    sellRate: 0.106,
    variation: 0.02,
    continent: 'OCÉANIE'
  },
  {
    name: 'Kina Papouasie-Nouvelle-Guinée',
    code: 'PGK',
    buyRate: 3.61,
    sellRate: 0.277,
    variation: -0.01,
    continent: 'OCÉANIE'
  },
  {
    name: 'Paʻanga Tongien',
    code: 'TOP',
    buyRate: 2.61,
    sellRate: 0.383,
    variation: 0.04,
    continent: 'OCÉANIE'
  },
  {
    name: 'Vatu Vanuatuan',
    code: 'VUV',
    buyRate: 115.76,
    sellRate: 0.0086,
    variation: 0.01,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar des Kiribati',
    code: 'AUD',
    buyRate: 1.57,
    sellRate: 0.64,
    variation: 0.40,
    continent: 'OCÉANIE'
  },
  {
    name: 'Tala Samoan',
    code: 'WST',
    buyRate: 2.90,
    sellRate: 0.345,
    variation: -0.02,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar des Îles Cook',
    code: 'NZD',
    buyRate: 1.68,
    sellRate: 0.60,
    variation: 0.22,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar de Nauru',
    code: 'AUD',
    buyRate: 1.57,
    sellRate: 0.64,
    variation: 0.40,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar de Tuvalu',
    code: 'AUD',
    buyRate: 1.57,
    sellRate: 0.64,
    variation: 0.40,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar de Palau',
    code: 'USD',
    buyRate: 1.12,
    sellRate: 0.89,
    variation: 0.40,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar de Niué',
    code: 'NZD',
    buyRate: 1.68,
    sellRate: 0.60,
    variation: 0.22,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar de Kiribati',
    code: 'AUD',
    buyRate: 1.57,
    sellRate: 0.64,
    variation: 0.40,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar des Îles Marshall',
    code: 'USD',
    buyRate: 1.12,
    sellRate: 0.89,
    variation: 0.40,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar de Tuvalu',
    code: 'AUD',
    buyRate: 1.57,
    sellRate: 0.64,
    variation: 0.40,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar des Îles Salomon',
    code: 'SBD',
    buyRate: 9.43,
    sellRate: 0.106,
    variation: 0.02,
    continent: 'OCÉANIE'
  },
  {
    name: 'Kina Papouasie-Nouvelle-Guinée',
    code: 'PGK',
    buyRate: 3.61,
    sellRate: 0.277,
    variation: -0.01,
    continent: 'OCÉANIE'
  },
  {
    name: 'Paʻanga Tongien',
    code: 'TOP',
    buyRate: 2.61,
    sellRate: 0.383,
    variation: 0.04,
    continent: 'OCÉANIE'
  },
  {
    name: 'Vatu Vanuatuan',
    code: 'VUV',
    buyRate: 115.76,
    sellRate: 0.0086,
    variation: 0.01,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar des Kiribati',
    code: 'AUD',
    buyRate: 1.57,
    sellRate: 0.64,
    variation: 0.40,
    continent: 'OCÉANIE'
  },
  {
    name: 'Tala Samoan',
    code: 'WST',
    buyRate: 2.90,
    sellRate: 0.345,
    variation: -0.02,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar des Îles Cook',
    code: 'NZD',
    buyRate: 1.68,
    sellRate: 0.60,
    variation: 0.22,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar de Nauru',
    code: 'AUD',
    buyRate: 1.57,
    sellRate: 0.64,
    variation: 0.40,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar de Tuvalu',
    code: 'AUD',
    buyRate: 1.57,
    sellRate: 0.64,
    variation: 0.40,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar de Palau',
    code: 'USD',
    buyRate: 1.12,
    sellRate: 0.89,
    variation: 0.40,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar de Niué',
    code: 'NZD',
    buyRate: 1.68,
    sellRate: 0.60,
    variation: 0.22,
    continent: 'OCÉANIE'
  },
  {
    name: 'Dollar de Kiribati',
    code: 'AUD',
    buyRate: 1.57,
    sellRate: 0.64,
    variation: 0.40,
    continent: 'OCÉANIE'
  },
]
    };
  },
  methods: {
    getFlagUrl(currencyCode) {
      return `https://flagsapi.com/${currencyCode.slice(0, 2).toUpperCase()}/flat/64.png`;
    },
    async fetchData() {
      fetch(`https://cdn.moneyconvert.net/api/latest.json`)
        .then(res => res.json())
        .then(data =>{
          this.data = data;
          this.rate = Number(data.rates[this.toCurrency]).toFixed(2)
          this.rate = Number(data.rates[this.fromCurrency]).toFixed(2);
            this.amountes = (this.amount * data.rates[this.fromCurrency]).toFixed(2);
            this.total = ((this.amount * this.rate) * 0.20).toFixed(2);
            this.totals = (Number(this.total) + Number(this.amountes)).toFixed(2);
        })
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
    selectContinent(continent) {
      this.selectedContinent = continent;
    },
    displayCountriesAndExchangeRates() {
      const countriesByContinent = {};
      this.currencies.forEach(currency => {
        const continent = currency.continent;
        if (!countriesByContinent[continent]) {
          countriesByContinent[continent] = [];
        }
        countriesByContinent[continent].push(currency);
      });

      for (const continent in countriesByContinent) {
        console.log(`Continent: ${continent}`);
        countriesByContinent[continent].forEach(currency => {
          console.log(`Country: ${currency.name}`);
          console.log(`Exchange Rate: ${currency.exchangeRate}`);
        });
      }
    }
  },
  mounted() {
    this.fetchData();
    this.displayCountriesAndExchangeRates();
  },
  computed: {
    filteredCurrencies() {
      return this.currencies.filter(currency => currency.continent === this.selectedContinent);
    }
  }
});
</script>
<style scoped>
.currency-converter {
  font-family: Arial, sans-serif;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 10%;
}

.currency-selector, .continent-tabs {
  margin-bottom: 20px;
}

.continent-tabs button {
  margin-right: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
}

.continent-tabs button.active {
  background-color: #007bff;
  color: white;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.flag {
  width: 20px;
  margin-right: 10px;
}

.positive {
  color: green;
}

.negative {
  color: red;
}
</style>
