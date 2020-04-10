<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
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
    })
  },

  mounted() {
    this.fetchDrillingRigList();
  }
};
</script>
