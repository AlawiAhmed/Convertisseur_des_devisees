<template>
    <v-app-bar app color="#E7ECF6" flat scroll-behavior="hide" flex>
      <v-avatar size="60px" style="margin-left: 3%;margin-top: 0.5%;">
        <v-img alt="avatar" id="logo" src="../assets/image.png"></v-img>
      </v-avatar>
      <v-spacer></v-spacer>
      <!-- <v-menu open-on-hover class="text-yellow">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class="mr-5">
            <v-icon color="#121481" left class="mr-5">fas fa-arrow-down</v-icon>
            Change de devises
          </v-btn>
        </template>
        <v-list>
          <v-row>
            <v-col v-for="(item, index) in itemse" :key="index" cols="20" sm="2" md="4">
              <v-list-item @click="navigateTo(item.endpoint)">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-col>
          </v-row>
        </v-list>
      </v-menu>
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class="mr-5">
            <v-icon color="#121481" left class="mr-5">fas fa-arrow-down</v-icon>
            Crypto monnaie
          </v-btn>
        </template>
  
        <v-list>
          <v-row>
            <v-col v-for="(item, index) in itemse" :key="index" cols="20" sm="2" md="4">
              <v-list-item @click="navigateTo(item.endpoint)">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-col>
          </v-row>
        </v-list>
      </v-menu>
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class="mr-5">
            <v-icon color="#121481" left class="mr-5">fas fa-arrow-down</v-icon>
            Métaux précieux
          </v-btn>
        </template>
        <v-list>
          <v-row>
            <v-col v-for="(item, index) in metalsItems" :key="index" cols="20" sm="2" md="4">
              <v-list-item @click="navigateTo(item.endpoint)">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-col>
          </v-row>
        </v-list>
        
      </v-menu> -->
  
      <v-spacer></v-spacer>
      <!-- <v-menu open-on-hover class="lang">
          <template v-slot:activator="{ props }">
              <v-btn v-bind="props">
                  <v-icon color=#121481 left class="mr-8">fas fa-earth</v-icon>
                  <span>English</span>
              </v-btn>
          </template>
          <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
          </v-list>
      </v-menu> -->
    </v-app-bar>
  </template>
  
  <script>
  import { debounce } from 'lodash';  // Add lodash debounce
  
  export default {
    data: () => ({
      items: [
        { title: 'English' },
        { title: 'Arabic' },
        { title: 'French' },
        { title: 'Spain' },
      ],
      itemse: [
        { title: 'Convertisseur de devises' },
        { title: 'Taux de change du DEA' },
        { title: 'USD en DEA ' },
        { title: 'Taux de change du EUR' },
        { title: 'Taux de change du GBP' },
        { title: 'USD en AUD' },
        { title: 'Taux de change du INP' },
        { title: 'Taux de change du KWD' },
        { title: 'USD en BAM' },
        { title: 'Taux de change du PHP' },
        { title: 'Taux de change du PKR' },
        { title: 'USD en CAD' },
        { title: 'Taux de change du USD' },
        { title: 'Taux de change du OMR' },
        { title: 'USD en EUR' },
        { title: 'USD en INR' },
      ],
      metalsItems: [
      {
        title: "Convertisseur de métaux précieux",
        description: "Convertissez des montants entre différents métaux précieux.",
        endpoint: "/convert",
        parameters: {
          amount: "Montant à convertir",
          from_metal: "Métal d'origine",
          to_metal: "Métal de destination"
        }
      },
      {
        title: "Taux de change de l'or (XAU)",
        description: "Taux de change actuel pour l'or (XAU)",
        endpoint: "/rate/XAU",
        rate: 1900.0
      },
      {
        title: "Or à Argent",
        description: "Convertir de l'or en argent",
        endpoint: "/convert/XAU/XAG"
      },
      {
        title: "Taux de change de l'argent (XAG)",
        description: "Taux de change actuel pour l'argent (XAG)",
        endpoint: "/rate/XAG",
        rate: 25.0
      },
      {
        title: "Taux de change du platine (XPT)",
        description: "Taux de change actuel pour le platine (XPT)",
        endpoint: "/rate/XPT",
        rate: 1000.0
      },
      {
        title: "Or à Platine",
        description: "Convertir de l'or en platine",
        endpoint: "/convert/XAU/XPT"
      },
      {
        title: "Taux de change du palladium (XPD)",
        description: "Taux de change actuel pour le palladium (XPD)",
        endpoint: "/rate/XPD",
        rate: 2500.0
      },
      {
        title: "Taux de change du rhodium (XRH)",
        description: "Taux de change actuel pour le rhodium (XRH)",
        endpoint: "/rate/XRH",
        rate: 10000.0
      },
      {
        title: "Argent à Platine",
        description: "Convertir de l'argent en platine",
        endpoint: "/convert/XAG/XPT"
      },
      {
        title: "Taux de change de l'iridium (XIR)",
        description: "Taux de change actuel pour l'iridium (XIR)",
        endpoint: "/rate/XIR",
        rate: 1500.0
      },
      {
        title: "Platine à Palladium",
        description: "Convertir du platine en palladium",
        endpoint: "/convert/XPT/XPD"
      },
      {
        title: "Taux de change du ruthénium (XRU)",
        description: "Taux de change actuel pour le ruthénium (XRU)",
        endpoint: "/rate/XRU",
        rate: 500.0
      },
      {
        title: "Or à Palladium",
        description: "Convertir de l'or en palladium",
        endpoint: "/convert/XAU/XPD"
      },
      {
        title: "Argent à Or",
        description: "Convertir de l'argent en or",
        endpoint: "/convert/XAG/XAU"
      },
      {
        title: "Taux de change de l'osmium (XOS)",
        description: "Taux de change actuel pour l'osmium (XOS)",
        endpoint: "/rate/XOS",
        rate: 2000.0
      }
    ],
    }),
    mounted() {
      this.initResizeObserver();
    },
    methods: {
      initResizeObserver() {
        const resizeObserver = new ResizeObserver(entries => {
          window.requestAnimationFrame(() => {
            for (let entry of entries) {
              // Handle the resize event
              this.handleResize(entry);
            }
          });
        });
  
        const element = document.querySelector('#resizeContainer');
        if (element) {
          resizeObserver.observe(element);
        }
      },
      handleResize: debounce(function (entry) {
        console.log('Resized:', entry.target);
        // Your resize handling logic
      }, 100), // Debounce for 100ms
    }
  }
  </script>
  
  <style>
  .v-application .v-application--wrap {
    overflow-y: auto;
  }
  .btn-logo {
    margin-left: 5%;
    width: 6%;
  }
  .btn-logo .v-img {}
  .lang {
    margin-right: 5%;
    width: 12%;
  }
  v-row{
    width: 10px;
  }
  v-list-item-title{
    text-align: center;
  }
  </style>
  