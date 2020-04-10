<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="getDrillingRigList">Fetch</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Index",

  components: {},

  methods: {
    ...mapActions({
      fetchDrillingRigList: "fetchDrillingRigList"
    }),

    getDrillingRigList() {
      console.log("FETCF", this.$store);

      this.fetchDrillingRigList();
    }
  }
};
</script>
