<template>
  <div class="home">
    <v-app>
      <v-content>
        <v-contraner fluid>
          <v-row>
            <v-col md="4" class="dd">
              <h1>Hello world</h1>
            </v-col>
          </v-row>
          <Footer></Footer>
        </v-contraner>
      </v-content>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Home",
  components: {
    Footer
  }
};
</script>

<style scoped>
.dd {
  background-color: blue;
}
</style>
