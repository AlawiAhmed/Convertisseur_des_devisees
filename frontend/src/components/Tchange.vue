<template>
    <v-row class="devices">
        <v-col cols="12">
          <v-col class="devices-title-box">
            <div v-for="code in currencieses" :key="code.id">
              <p class="devices-title" v-if="code.code === toCurrency">Taux de change du  {{ (code.name).toUpperCase() }}</p>
            </div>
            <v-select v-model="toCurrency" :items="currencies" label="Vers la devise"></v-select>
          </v-col>
          <v-tabs v-model="tab" class="tabs">
            <v-tab  v-for="continent in continents" 
        :key="continent" 
        :class="{ active: selectedContinent === continent }"
        @click="selectContinent(continent)"><h2>{{ continent }}</h2></v-tab>
          </v-tabs>
           <div class="title-colonne">
                <tr>
                    <th class="text-left" colspan="10"><h3>Pays</h3></th>
                    <th class="text-right"><h3>Taux d'achat</h3></th>
                    <th class="text-right"><h3>Taux de vente</h3></th>
                    <th class="variations"><h3>Variation</h3></th>
                </tr>
           </div>
              <div v-show="tab === index" v-for="(continents, index) in continents" :key="index" class="tabs-items" >
                
              <v-simple-table class="table-change">
                <thead class="table-header">
                 
                  
                    <tr v-for="currency in filteredCurrencies" :key="currency.code">
                    <th class="flag-pays center-align middle-align" colspan="1"><v-img :src="getFlagUrl(currency.code)" :alt="currency.code"  width="100" height="60"></v-img></th>
                    <th class="nom-pays center-align middle-align" colspan="10"><h3>{{ currency.name }}</h3></th>
                    <th class="text-right"><h3> {{ newChange(currency.code) }} <br><b> {{toCurrency}} / {{ currency.code }}</b></h3></th>
                    <th class="text-right" colspan="2"><h3> {{ newsChange(currency.code) }} <br><b> {{ currency.code }} / {{ toCurrency }}</b></h3></th>
                    <th class="text-right"><h3>
                      <v-icon v-if="currency.variation > 0" color=#AF0A0A left class="mr-3">fas fa-arrow-down</v-icon>
                      <v-icon v-if="currency.variation < 0" color="green" left class="mr-2">fas fa-arrow-up</v-icon>
                      <span class="variation" :style="{ color: currency.variation > 0 ? 'green' : 'red' }">
                        {{ Math.abs(currency.variation).toFixed(2) }}%
                      </span></h3>
                    </th>
                  </tr>
                </thead>
              </v-simple-table>
            </div>
        </v-col>
      </v-row>
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
name: 'HomeView',
data() {
  return {
    tab: 1,
    amount: null,
        recipientAmount: null,
        data: null,
        toCurrency: "EUR",
        fromCurrency: 'USD',
        currenciess: [],
        Currency: this.fromCurrency,
        selectedContinent: 'AMÉRIQUE DU NORD',
        

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
currencieses: [
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
    name: 'Dollar Américain',
    code: 'USD',
    buyRate: 1.12,
    sellRate: 0.89,
    variation: 0.05,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Dirham des Émirats Arabes Unis',
    code: 'AED',
    buyRate: 3.67,
    sellRate: 0.27,
    variation: 0.01,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Afghani Afghane',
    code: 'AFN',
    buyRate: 78.25,
    sellRate: 0.012,
    variation: -0.02,
    continent: 'ASIE'
  },
  {
    name: 'Lek Albanais',
    code: 'ALL',
    buyRate: 106.50,
    sellRate: 0.0094,
    variation: 0.03,
    continent: 'EUROPE'
  },
  {
    name: 'Dram Arménien',
    code: 'AMD',
    buyRate: 484.0,
    sellRate: 0.0021,
    variation: 0.00,
    continent: 'ASIE'
  },
  {
    name: 'Florin des Antilles Néerlandaises',
    code: 'ANG',
    buyRate: 1.79,
    sellRate: 0.56,
    variation: -0.01,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Kwanza Angolais',
    code: 'AOA',
    buyRate: 654.7,
    sellRate: 0.0015,
    variation: -0.05,
    continent: 'AFRIQUE'
  },
  {
    name: 'Peso Argentin',
    code: 'ARS',
    buyRate: 94.25,
    sellRate: 0.011,
    variation: -0.10,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Dollar Australien',
    code: 'AUD',
    buyRate: 1.35,
    sellRate: 0.74,
    variation: 0.02,
    continent: 'OCÉANIE'
  },
  {
    name: 'Florin Arubais',
    code: 'AWG',
    buyRate: 1.79,
    sellRate: 0.56,
    variation: 0.00,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Manat Azerbaïdjanais',
    code: 'AZN',
    buyRate: 1.7,
    sellRate: 0.59,
    variation: 0.01,
    continent: 'ASIE'
  },
  {
    name: 'Mark Convertible Bosniaque',
    code: 'BAM',
    buyRate: 1.95,
    sellRate: 0.51,
    variation: -0.01,
    continent: 'EUROPE'
  },
  {
    name: 'Dollar Barbadien',
    code: 'BBD',
    buyRate: 2.0,
    sellRate: 0.50,
    variation: 0.00,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Taka Bangladais',
    code: 'BDT',
    buyRate: 84.75,
    sellRate: 0.011,
    variation: -0.03,
    continent: 'ASIE'
  },
  {
    name: 'Lev Bulgare',
    code: 'BGN',
    buyRate: 1.95,
    sellRate: 0.51,
    variation: 0.01,
    continent: 'EUROPE'
  },
  {
    name: 'Dinar Bahraini',
    code: 'BHD',
    buyRate: 0.38,
    sellRate: 2.63,
    variation: 0.02,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Franc Burundais',
    code: 'BIF',
    buyRate: 1950.0,
    sellRate: 0.00051,
    variation: 0.00,
    continent: 'AFRIQUE'
  },
  {
    name: 'Dollar Bermudien',
    code: 'BMD',
    buyRate: 1.0,
    sellRate: 1.0,
    variation: 0.00,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Dollar Brunéien',
    code: 'BND',
    buyRate: 1.35,
    sellRate: 0.74,
    variation: 0.01,
    continent: 'ASIE'
  },
  {
    name: 'Boliviano Bolivien',
    code: 'BOB',
    buyRate: 6.89,
    sellRate: 0.15,
    variation: -0.01,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Real Brésilien',
    code: 'BRL',
    buyRate: 5.35,
    sellRate: 0.19,
    variation: -0.04,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Dollar Bahaméen',
    code: 'BSD',
    buyRate: 1.0,
    sellRate: 1.0,
    variation: 0.00,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Ngultrum Bhoutanais',
    code: 'BTN',
    buyRate: 74.0,
    sellRate: 0.013,
    variation: -0.01,
    continent: 'ASIE'
  },
  {
    name: 'Pula Botswanais',
    code: 'BWP',
    buyRate: 11.0,
    sellRate: 0.091,
    variation: 0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Rouble Biélorusse',
    code: 'BYN',
    buyRate: 2.5,
    sellRate: 0.40,
    variation: -0.02,
    continent: 'EUROPE'
  },
  {
    name: 'Dollar Bélizéen',
    code: 'BZD',
    buyRate: 2.0,
    sellRate: 0.50,
    variation: 0.00,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Dollar Canadien',
    code: 'CAD',
    buyRate: 1.25,
    sellRate: 0.80,
    variation: 0.02,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Franc Congolais',
    code: 'CDF',
    buyRate: 2000.0,
    sellRate: 0.00050,
    variation: -0.03,
    continent: 'AFRIQUE'
  },
  {
    name: 'Franc Suisse',
    code: 'CHF',
    buyRate: 0.92,
    sellRate: 1.09,
    variation: 0.01,
    continent: 'EUROPE'
  },
  {
    name: 'Peso Chilien',
    code: 'CLP',
    buyRate: 750.0,
    sellRate: 0.0013,
    variation: 0.00,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Yuan Chinois',
    code: 'CNY',
    buyRate: 6.47,
    sellRate: 0.15,
    variation: 0.01,
    continent: 'ASIE'
  },
  {
    name: 'Peso Colombien',
    code: 'COP',
    buyRate: 3800.0,
    sellRate: 0.00026,
    variation: -0.01,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Colon Costaricain',
    code: 'CRC',
    buyRate: 620.0,
    sellRate: 0.0016,
    variation: 0.00,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Peso Cubain',
    code: 'CUP',
    buyRate: 25.0,
    sellRate: 0.040,
    variation: -0.05,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Escudo Cap-Verdien',
    code: 'CVE',
    buyRate: 93.0,
    sellRate: 0.011,
    variation: 0.02,
    continent: 'AFRIQUE'
  },
  {
    name: 'Couronne Tchèque',
    code: 'CZK',
    buyRate: 22.0,
    sellRate: 0.045,
    variation: 0.00,
    continent: 'EUROPE'
  },
  {
    name: 'Franc Djiboutien',
    code: 'DJF',
    buyRate: 177.0,
    sellRate: 0.0057,
    variation: -0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Couronne Danoise',
    code: 'DKK',
    buyRate: 6.5,
    sellRate: 0.15,
    variation: 0.01,
    continent: 'EUROPE'
  },
  {
    name: 'Peso Dominicain',
    code: 'DOP',
    buyRate: 58.0,
    sellRate: 0.017,
    variation: 0.02,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Dinar Algérien',
    code: 'DZD',
    buyRate: 134.0,
    sellRate: 0.0075,
    variation: 0.00,
    continent: 'AFRIQUE'
  },
  {
    name: 'Livre Égyptienne',
    code: 'EGP',
    buyRate: 15.6,
    sellRate: 0.064,
    variation: -0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Nakfa Érythréen',
    code: 'ERN',
    buyRate: 15.0,
    sellRate: 0.067,
    variation: 0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Birr Éthiopien',
    code: 'ETB',
    buyRate: 45.0,
    sellRate: 0.022,
    variation: 0.00,
    continent: 'AFRIQUE'
  },
  {
    name: 'Euro',
    code: 'EUR',
    buyRate: 1.0,
    sellRate: 1.0,
    variation: 0.00,
    continent: 'EUROPE'
  },
  {
    name: 'Dollar Fidjien',
    code: 'FJD',
    buyRate: 2.1,
    sellRate: 0.48,
    variation: -0.02,
    continent: 'OCÉANIE'
  },
  {
    name: 'Livre des Îles Falkland',
    code: 'FKP',
    buyRate: 0.72,
    sellRate: 1.39,
    variation: 0.01,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Livre Féroïenne',
    code: 'FOK',
    buyRate: 6.5,
    sellRate: 0.15,
    variation: 0.00,
    continent: 'EUROPE'
  },
  {
    name: 'Livre Sterling',
    code: 'GBP',
    buyRate: 0.85,
    sellRate: 1.18,
    variation: 0.03,
    continent: 'EUROPE'
  },
  {
    name: 'Lari Géorgien',
    code: 'GEL',
    buyRate: 3.0,
    sellRate: 0.33,
    variation: -0.01,
    continent: 'EUROPE'
  },
  {
    name: 'Livre de Guernesey',
    code: 'GGP',
    buyRate: 0.85,
    sellRate: 1.18,
    variation: 0.02,
    continent: 'EUROPE'
  },
  {
    name: 'Cedi Ghanéen',
    code: 'GHS',
    buyRate: 5.8,
    sellRate: 0.17,
    variation: 0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Livre de Gibraltar',
    code: 'GIP',
    buyRate: 0.85,
    sellRate: 1.18,
    variation: 0.00,
    continent: 'EUROPE'
  },
  {
    name: 'Dalasi Gambien',
    code: 'GMD',
    buyRate: 50.0,
    sellRate: 0.020,
    variation: -0.02,
    continent: 'AFRIQUE'
  },
  {
    name: 'Franc Guinéen',
    code: 'GNF',
    buyRate: 9750.0,
    sellRate: 0.00010,
    variation: 0.00,
    continent: 'AFRIQUE'
  },
  {
    name: 'Quetzal Guatémaltèque',
    code: 'GTQ',
    buyRate: 7.7,
    sellRate: 0.13,
    variation: 0.01,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Dollar Guyanais',
    code: 'GYD',
    buyRate: 210.0,
    sellRate: 0.0048,
    variation: -0.01,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Dollar de Hong Kong',
    code: 'HKD',
    buyRate: 7.8,
    sellRate: 0.13,
    variation: 0.00,
    continent: 'ASIE'
  },
  {
    name: 'Lempira Hondurien',
    code: 'HNL',
    buyRate: 24.0,
    sellRate: 0.042,
    variation: 0.02,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Kuna Croate',
    code: 'HRK',
    buyRate: 6.5,
    sellRate: 0.15,
    variation: 0.01,
    continent: 'EUROPE'
  },
  {
    name: 'Gourde Haïtienne',
    code: 'HTG',
    buyRate: 94.0,
    sellRate: 0.011,
    variation: -0.03,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Forint Hongrois',
    code: 'HUF',
    buyRate: 300.0,
    sellRate: 0.0033,
    variation: 0.01,
    continent: 'EUROPE'
  },
  {
    name: 'Roupie Indonésienne',
    code: 'IDR',
    buyRate: 14500.0,
    sellRate: 0.000069,
    variation: 0.02,
    continent: 'ASIE'
  },
  {
    name: 'Shekel Israélien',
    code: 'ILS',
    buyRate: 3.3,
    sellRate: 0.30,
    variation: 0.00,
    continent: 'ASIE'
  },
  {
    name: 'Livre de l\'Île de Man',
    code: 'IMP',
    buyRate: 0.85,
    sellRate: 1.18,
    variation: 0.00,
    continent: 'EUROPE'
  },
  {
    name: 'Roupie Indienne',
    code: 'INR',
    buyRate: 74.0,
    sellRate: 0.013,
    variation: -0.01,
    continent: 'ASIE'
  },
  {
    name: 'Dinar Irakien',
    code: 'IQD',
    buyRate: 1460.0,
    sellRate: 0.00069,
    variation: 0.01,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Rial Iranien',
    code: 'IRR',
    buyRate: 42000.0,
    sellRate: 0.000024,
    variation: -0.05,
    continent: 'ASIE'
  },
  {
    name: 'Couronne Islandaise',
    code: 'ISK',
    buyRate: 125.0,
    sellRate: 0.0080,
    variation: 0.01,
    continent: 'EUROPE'
  },
  {
    name: 'Livre de Jersey',
    code: 'JEP',
    buyRate: 0.85,
    sellRate: 1.18,
    variation: 0.00,
    continent: 'EUROPE'
  },
  {
    name: 'Dollar Jamaïcain',
    code: 'JMD',
    buyRate: 155.0,
    sellRate: 0.0064,
    variation: 0.02,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Dinar Jordanien',
    code: 'JOD',
    buyRate: 0.71,
    sellRate: 1.41,
    variation: 0.00,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Yen Japonais',
    code: 'JPY',
    buyRate: 110.0,
    sellRate: 0.0091,
    variation: -0.01,
    continent: 'ASIE'
  },
  {
    name: 'Shilling Kenyan',
    code: 'KES',
    buyRate: 108.0,
    sellRate: 0.0093,
    variation: 0.00,
    continent: 'AFRIQUE'
  },
  {
    name: 'Som Kirghize',
    code: 'KGS',
    buyRate: 84.0,
    sellRate: 0.012,
    variation: -0.01,
    continent: 'ASIE'
  },
  {
    name: 'Riel Cambodgien',
    code: 'KHR',
    buyRate: 4050.0,
    sellRate: 0.00025,
    variation: 0.02,
    continent: 'ASIE'
  },
  {
    name: 'Dollar de Kiribati',
    code: 'KID',
    buyRate: 1.35,
    sellRate: 0.74,
    variation: 0.01,
    continent: 'OCÉANIE'
  },
  {
    name: 'Franc Comorien',
    code: 'KMF',
    buyRate: 450.0,
    sellRate: 0.0022,
    variation: 0.00,
    continent: 'AFRIQUE'
  },
  {
    name: 'Won Sud-Coréen',
    code: 'KRW',
    buyRate: 1100.0,
    sellRate: 0.00091,
    variation: -0.01,
    continent: 'ASIE'
  },
  {
    name: 'Dinar Koweïtien',
    code: 'KWD',
    buyRate: 0.30,
    sellRate: 3.30,
    variation: 0.00,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Dollar des Îles Caïmans',
    code: 'KYD',
    buyRate: 0.83,
    sellRate: 1.20,
    variation: 0.01,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Tenge Kazakh',
    code: 'KZT',
    buyRate: 425.0,
    sellRate: 0.0024,
    variation: 0.00,
    continent: 'ASIE'
  },
  {
    name: 'Kip Laotien',
    code: 'LAK',
    buyRate: 9400.0,
    sellRate: 0.00011,
    variation: -0.02,
    continent: 'ASIE'
  },
  {
    name: 'Livre Libanaise',
    code: 'LBP',
    buyRate: 1500.0,
    sellRate: 0.00067,
    variation: 0.00,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Roupie Sri-Lankaise',
    code: 'LKR',
    buyRate: 202.0,
    sellRate: 0.0049,
    variation: -0.01,
    continent: 'ASIE'
  },
  {
    name: 'Dollar Libérien',
    code: 'LRD',
    buyRate: 170.0,
    sellRate: 0.0059,
    variation: 0.02,
    continent: 'AFRIQUE'
  },
  {
    name: 'Loti Lesothan',
    code: 'LSL',
    buyRate: 15.0,
    sellRate: 0.067,
    variation: 0.00,
    continent: 'AFRIQUE'
  },
  {
    name: 'Dinar Libyen',
    code: 'LYD',
    buyRate: 4.5,
    sellRate: 0.22,
    variation: 0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Dirham Marocain',
    code: 'MAD',
    buyRate: 10.73,
    sellRate: 0.093,
    variation: -0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Leu Moldave',
    code: 'MDL',
    buyRate: 17.5,
    sellRate: 0.057,
    variation: -0.01,
    continent: 'EUROPE'
  },
  {
    name: 'Ariary Malgache',
    code: 'MGA',
    buyRate: 4000.0,
    sellRate: 0.00025,
    variation: 0.00,
    continent: 'AFRIQUE'
  },
  {
    name: 'Denar Macédonien',
    code: 'MKD',
    buyRate: 61.5,
    sellRate: 0.016,
    variation: 0.01,
    continent: 'EUROPE'
  },
  {
    name: 'Kyat Birman',
    code: 'MMK',
    buyRate: 1500.0,
    sellRate: 0.00067,
    variation: -0.02,
    continent: 'ASIE'
  },
  {
    name: 'Tugrik Mongol',
    code: 'MNT',
    buyRate: 2850.0,
    sellRate: 0.00035,
    variation: 0.00,
    continent: 'ASIE'
  },
  {
    name: 'Pataca Macanaise',
    code: 'MOP',
    buyRate: 8.0,
    sellRate: 0.13,
    variation: 0.01,
    continent: 'ASIE'
  },
  {
    name: 'Ouguiya Mauritanien',
    code: 'MRU',
    buyRate: 36.0,
    sellRate: 0.028,
    variation: 0.00,
    continent: 'AFRIQUE'
  },
  {
    name: 'Roupie Mauricienne',
    code: 'MUR',
    buyRate: 40.0,
    sellRate: 0.025,
    variation: -0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Rufiyaa Maldivienne',
    code: 'MVR',
    buyRate: 15.4,
    sellRate: 0.065,
    variation: 0.00,
    continent: 'ASIE'
  },
  {
    name: 'Kwacha Malawite',
    code: 'MWK',
    buyRate: 800.0,
    sellRate: 0.0013,
    variation: 0.00,
    continent: 'AFRIQUE'
  },
  {
    name: 'Peso Mexicain',
    code: 'MXN',
    buyRate: 20.0,
    sellRate: 0.050,
    variation: 0.01,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Ringgit Malaisien',
    code: 'MYR',
    buyRate: 4.15,
    sellRate: 0.24,
    variation: 0.00,
    continent: 'ASIE'
  },
  {
    name: 'Metical Mozambicain',
    code: 'MZN',
    buyRate: 62.5,
    sellRate: 0.016,
    variation: 0.02,
    continent: 'AFRIQUE'
  },
  {
    name: 'Dollar Namibien',
    code: 'NAD',
    buyRate: 15.0,
    sellRate: 0.067,
    variation: 0.00,
    continent: 'AFRIQUE'
  },
  {
    name: 'Naira Nigérian',
    code: 'NGN',
    buyRate: 410.0,
    sellRate: 0.0024,
    variation: -0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Cordoba Nicaraguayen',
    code: 'NIO',
    buyRate: 35.0,
    sellRate: 0.029,
    variation: 0.01,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Couronne Norvégienne',
    code: 'NOK',
    buyRate: 8.6,
    sellRate: 0.12,
    variation: 0.02,
    continent: 'EUROPE'
  },
  {
    name: 'Roupie Népalaise',
    code: 'NPR',
    buyRate: 117.0,
    sellRate: 0.0085,
    variation: 0.00,
    continent: 'ASIE'
  },
  {
    name: 'Dollar Néo-Zélandais',
    code: 'NZD',
    buyRate: 1.45,
    sellRate: 0.69,
    variation: 0.01,
    continent: 'OCÉANIE'
  },
  {
    name: 'Rial Omanais',
    code: 'OMR',
    buyRate: 0.39,
    sellRate: 2.56,
    variation: -0.02,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Balboa Panaméen',
    code: 'PAB',
    buyRate: 1.0,
    sellRate: 1.0,
    variation: 0.00,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Sol Péruvien',
    code: 'PEN',
    buyRate: 3.4,
    sellRate: 0.29,
    variation: 0.02,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Kina Papouasienne-Néo-Guinéenne',
    code: 'PGK',
    buyRate: 3.5,
    sellRate: 0.29,
    variation: 0.01,
    continent: 'OCÉANIE'
  },
  {
    name: 'Peso Philippin',
    code: 'PHP',
    buyRate: 48.0,
    sellRate: 0.021,
    variation: -0.01,
    continent: 'ASIE'
  },
  {
    name: 'Roupie Pakistanaise',
    code: 'PKR',
    buyRate: 158.0,
    sellRate: 0.0063,
    variation: 0.00,
    continent: 'ASIE'
  },
  {
    name: 'Zloty Polonais',
    code: 'PLN',
    buyRate: 4.3,
    sellRate: 0.23,
    variation: 0.02,
    continent: 'EUROPE'
  },
  {
    name: 'Guarani Paraguayen',
    code: 'PYG',
    buyRate: 6800.0,
    sellRate: 0.00015,
    variation: 0.00,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Rial Qatari',
    code: 'QAR',
    buyRate: 3.64,
    sellRate: 0.27,
    variation: 0.00,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Leu Roumain',
    code: 'RON',
    buyRate: 4.1,
    sellRate: 0.24,
    variation: 0.01,
    continent: 'EUROPE'
  },
  {
    name: 'Dinar Serbe',
    code: 'RSD',
    buyRate: 100.0,
    sellRate: 0.010,
    variation: 0.00,
    continent: 'EUROPE'
  },
  {
    name: 'Rouble Russe',
    code: 'RUB',
    buyRate: 73.0,
    sellRate: 0.013,
    variation: 0.01,
    continent: 'EUROPE'
  },
  {
    name: 'Franc Rwandais',
    code: 'RWF',
    buyRate: 980.0,
    sellRate: 0.0010,
    variation: 0.00,
    continent: 'AFRIQUE'
  },
  {
    name: 'Riyal Saoudien',
    code: 'SAR',
    buyRate: 3.75,
    sellRate: 0.27,
    variation: -0.01,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Dollar Salomonais',
    code: 'SBD',
    buyRate: 8.0,
    sellRate: 0.13,
    variation: 0.01,
    continent: 'OCÉANIE'
  },
  {
    name: 'Roupie Seychelloise',
    code: 'SCR',
    buyRate: 14.0,
    sellRate: 0.071,
    variation: 0.02,
    continent: 'AFRIQUE'
  },
  {
    name: 'Livre Soudanaise',
    code: 'SDG',
    buyRate: 55.0,
    sellRate: 0.018,
    variation: 0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Couronne Suédoise',
    code: 'SEK',
    buyRate: 8.3,
    sellRate: 0.12,
    variation: -0.01,
    continent: 'EUROPE'
  },
  {
    name: 'Dollar Singapourien',
    code: 'SGD',
    buyRate: 1.34,
    sellRate: 0.75,
    variation: 0.00,
    continent: 'ASIE'
  },
  {
    name: 'Dollar de Suriname',
    code: 'SRD',
    buyRate: 21.0,
    sellRate: 0.048,
    variation: 0.00,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Dobra de São Tomé et Príncipe',
    code: 'STN',
    buyRate: 22.0,
    sellRate: 0.045,
    variation: 0.00,
    continent: 'AFRIQUE'
  },
  {
    name: 'Colon Salvadorien',
    code: 'SVC',
    buyRate: 8.75,
    sellRate: 0.11,
    variation: 0.02,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Livre Syrienne',
    code: 'SYP',
    buyRate: 1250.0,
    sellRate: 0.00080,
    variation: 0.00,
    continent: 'MOYEN ORIENT'
  },
  {
    name: 'Lilangeni Swazi',
    code: 'SZL',
    buyRate: 15.0,
    sellRate: 0.067,
    variation: 0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Baht Thaïlandais',
    code: 'THB',
    buyRate: 32.0,
    sellRate: 0.031,
    variation: 0.01,
    continent: 'ASIE'
  },
  {
    name: 'Somoni Tadjik',
    code: 'TJS',
    buyRate: 11.0,
    sellRate: 0.091,
    variation: 0.02,
    continent: 'ASIE'
  },
  {
    name: 'Manat Turkmène',
    code: 'TMT',
    buyRate: 3.5,
    sellRate: 0.29,
    variation: 0.00,
    continent: 'ASIE'
  },
  {
    name: 'Dinar Tunisien',
    code: 'TND',
    buyRate: 2.8,
    sellRate: 0.36,
    variation: 0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Pa’anga Tongien',
    code: 'TOP',
    buyRate: 2.3,
    sellRate: 0.44,
    variation: -0.01,
    continent: 'OCÉANIE'
  },
  {
    name: 'Lire Turque',
    code: 'TRY',
    buyRate: 8.5,
    sellRate: 0.12,
    variation: 0.00,
    continent: 'EUROPE'
  },
  {
    name: 'Dollar Trinidien',
    code: 'TTD',
    buyRate: 6.8,
    sellRate: 0.15,
    variation: 0.01,
    continent: 'AMÉRIQUE DU NORD'
  },
  {
    name: 'Dollar Taïwanais',
    code: 'TWD',
    buyRate: 27.0,
    sellRate: 0.037,
    variation: 0.01,
    continent: 'ASIE'
  },
  {
    name: 'Shilling Tanzanien',
    code: 'TZS',
    buyRate: 2315.0,
    sellRate: 0.00043,
    variation: 0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Hryvnia Ukrainienne',
    code: 'UAH',
    buyRate: 27.5,
    sellRate: 0.036,
    variation: 0.00,
    continent: 'EUROPE'
  },
  {
    name: 'Shilling Ougandais',
    code: 'UGX',
    buyRate: 3800.0,
    sellRate: 0.00026,
    variation: 0.00,
    continent: 'AFRIQUE'
  },
  {
    name: 'Peso Uruguayen',
    code: 'UYU',
    buyRate: 42.0,
    sellRate: 0.024,
    variation: 0.00,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Soum Ouzbek',
    code: 'UZS',
    buyRate: 10450.0,
    sellRate: 0.00010,
    variation: 0.00,
    continent: 'ASIE'
  },
  {
    name: 'Bolivar Vénézuélien',
    code: 'VES',
    buyRate: 3200000.0,
    sellRate: 0.0000015,
    variation: -0.02,
    continent: 'AMÉRIQUE DU SUD'
  },
  {
    name: 'Dong Vietnamien',
    code: 'VND',
    buyRate: 23000.0,
    sellRate: 0.00043,
    variation: 0.00,
    continent: 'ASIE'
  },
  {
    name: 'Vatu Vanuatuan',
    code: 'VUV',
    buyRate: 109.0,
    sellRate: 0.0092,
    variation: 0.01,
    continent: 'OCÉANIE'
  },
  {
    name: 'Tala Samoan',
    code: 'WST',
    buyRate: 2.6,
    sellRate: 0.39,
    variation: 0.02,
    continent: 'OCÉANIE'
  },
  {
    name: 'Rand Sud-Africain',
    code: 'ZAR',
    buyRate: 15.0,
    sellRate: 0.067,
    variation: 0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Kwacha Zambien',
    code: 'ZMW',
    buyRate: 22.5,
    sellRate: 0.044,
    variation: -0.01,
    continent: 'AFRIQUE'
  },
  {
    name: 'Dollar Zimbabwéen',
    code: 'ZWL',
    buyRate: 361.9,
    sellRate: 0.0028,
    variation: 0.00,
    continent: 'AFRIQUE'
  }
],

continents: ['AFRIQUE', 'AMÉRIQUE DU NORD', 'AMÉRIQUE DU SUD', 'ASIE', 'MOYEN ORIENT' , 'EUROPE', 'OCÉANIE'],
  }
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
  },
  computed: {
    filteredCurrencies() {
      return this.currencieses.filter(currency => currency.continent === this.selectedContinent);
    }
  },
  mounted() {
    this.fetchData();
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
     v-tab.active {
        background-color: #007bff;
      color: white;
    }
    
</style>
