<template>
    <v-row class="devices">
        <v-col cols="12">
          <v-col class="devices-title-box">
            <h1 class="devices-title">taux de change du dirham des Émirats arabes unis</h1>
          </v-col>
          
          <v-tabs v-model="tab" class="tabs">
            <v-tab v-for="(region, index) in regions" :key="index"><h2>{{ region }}</h2></v-tab>
          </v-tabs>
            <!-- <v-tab-item class="tabs-items" v-for="(region, index) in regions" :key="index" v-show="tab === index"> -->
              <div v-show="tab === index" v-for="(region, index) in regions" :key="index" class="tabs-items">
              <v-simple-table class="table-change">
                <thead class="table-header">
                    <!-- <th class="text-left">Pays</th>
                    <th class="text-left">Monnaie</th>
                    <th class="text-right">Taux d'achat</th>
                    <th class="text-right">Taux de vente</th>
                    <th class="text-right">Variation</th> -->
                    <tr v-for="currency in currencies" :key="currency.name">
                    <th class="flag-pays" colspan="1"><v-img :src="currency.flag" alt="flag" width="100" height="60"></v-img></th>
                    <th class="nom-pays" colspan="10"><h3>{{ currency.name }}</h3></th>
                    <th class="text-right" colspan="2"><h3>{{ currency.buyRate }}</h3> </th>
                    <th class="text-right" colspan="2"><h3>{{ currency.sellRate }}</h3></th>
                    <th class="text-right"><h3>
                      <v-icon v-if="currency.variation > 0" color="red" left class="mr-3">fas fa-arrow-down</v-icon>
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
    regions: ['Afrique du Sud', 'Amérique du Nord', 'Amérique du Sud', 'Asie', 'L\'Europe', 'Moyen Orient', 'Océanie'],
    currencies: [
      {
        name: 'Dirham Marocain',
        flag: 'https://flagsapi.com/MA/flat/64.png',
        buyRate: 2.7304,
        sellRate: 0.3663,
        variation: 0.01
      },
      {
        name: 'Rand Sud-africain',
        flag: 'https://flagsapi.com/US/flat/64.png',
        buyRate: 5.0287,
        sellRate: 0.1989,
        variation: -0.04
      },
      {
        name: 'Jenihea Égyptienne',
        flag: 'https://flagsapi.com/EG/flat/64.png',
        buyRate: 12.982,
        sellRate: 0.07703,
        variation: -0.57
      },
      {
        name: 'Dinar Tunisien',
        flag: 'https://flagsapi.com/TN/flat/64.png',
        buyRate: 0.8515,
        sellRate: 1.1744,
        variation: 0.00
      }
    ]
  }
},
methods: {
  getFlagUrl(currencyCode) {
      return `https://flagsapi.com/${currencyCode.slice(0, 2).toUpperCase()}/flat/64.png`;
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
  /* display: flex; */
  /* justify-content: space-evenly; */
  top: 8%;
  height: 8%;
  left: 4.5%;
  width: 57%;
  padding: 0px;
  background: #FFB1B1;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgb(248, 249, 201);
  text-align: right;
}
.devices-title {
  display: flex;
  width: 95%;
  text-align: left;
  margin-left: 4%;
  padding-top: 1.3%;
  font-size: 215%;
}
.tabs{
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  top: 16%;
  height: 6.5%;
  left: 4.5%;
  width: 82.5%;
  padding: 0px;
  background: #FFB1B1;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgb(248, 249, 201);
  text-align: right;
  font-weight: bold;
}
.tabs-items{
  position: absolute;
  /* display: flex; */
  padding-left: 2.5%;
  top: 22.6%;
  left: 3.3%;
  height: 75%;
  width: 94%;
  border: #FFEAE3 solid 10%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(255, 255, 255);
  background-color: #FFEAE3
}
.table-change {
        width: 90%;
        left: 20%;
      }
      
.table-change h3{
        position: relative;
        text-align: left;
        font-size: 110%;
        align-content: center;
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
        font-size: 140%;
      }
      
      .text-right h3 span{
        text-align: right;
      }
      .variation{
        text-align: right;
        left: 2%;
      }
</style>

