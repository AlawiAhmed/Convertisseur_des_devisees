<template>
    >
    <v-app-bar app color=#E7ECF6 flat >
        
        <v-btn color=#121481 flat>
            <v-icon color=#6C6BBD left class="mr-0">fas fa-eur</v-icon> 
            <v-icon color=#ED0006 left class="mr-2">fas fa-usd</v-icon>      
            click on
        </v-btn>
        <v-spacer></v-spacer>
        <!-- <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                    Menu
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu> -->

        <!-- <v-btn text @click="scroll('home')" class="text-yellow" align-items="center"> Home </v-btn> -->
        <v-menu open-on-hover class="text-yellow">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="mr-5">
                    <v-icon color=#121481 left class="mr-5">fas fa-arrow-down</v-icon>
                    Change de devises
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="(item, index) in itemse" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="mr-5">
                    <v-icon color=#121481 left class="mr-5">fas fa-arrow-down</v-icon>
                    Crypto monnaie
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="(item, index) in itemse" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="mr-5">
                    <v-icon color=#121481 left class="mr-5">fas fa-arrow-down</v-icon>
                    Métaux précieux
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="(item, index) in itemse" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <!-- <v-btn text @click="scroll('home')">Home</v-btn>
        <v-btn text @click="scroll('home')">Home</v-btn>
        <v-btn text @click="scroll('home')">Home</v-btn> -->
        <v-spacer></v-spacer>
        <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                    <v-icon color=#121481 left class="mr-5">fas fa-earth</v-icon>
                    <span>English</span>
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>

    <!-- <v-app-bar dense flat>
    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Your App Name</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item v-for="item in navigationItems" :key="item.text">
          <v-list-item-link :to="item.link">{{ item.text }}</v-list-item-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-spacer></v-spacer>

    <v-menu>
      <v-btn slot="activator">Actions</v-btn>
      <v-list>
        <v-list-item v-for="action in actions" :key="action.text">
          <v-list-item-link :to="action.link">{{ action.text }}</v-list-item-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
     -->
</template>
<script>
export default {
    data: () => ({
      items: [
        { title: 'English' },
        { title: 'Arabic' },
        { title: 'French' },
        { title: 'Spain' },
      ],
      itemse: [
        { title: '1' },
        { title: '2' },
        { title: '3' },
        { title: '4' },
      ],
    }),
    
    methods: {
        scroll(refName) {
            const element = document.getElementById(refName);
            element.scrollIntoView({behavior: "smooth"})
        }
    }
}
</script>
<style>
    
    .{
        padding: 30px 0;
    }
    
   
</style>