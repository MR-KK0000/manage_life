<template>
  <div id="footer">
   <v-footer fixed>
      <v-col class="text-center ss" cols="12">
        &copy;{{ new Date().getFullYear() }} —
        <strong>power by sleepfreetime</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "footer"
};
</script>

<style scoped>
.ss {
  font-size: 14px;
  text-align: center;
}
</style>