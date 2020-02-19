<template>
  <div class="view" style="margin-top: 20px;">
    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// Connect to network
import { WalletBackend, Daemon, IDaemon } from 'turtlecoin-wallet-backend';
const daemon: IDaemon = new Daemon('blockapi.turtlepay.io', 443);

@Component({
  components: {},
  data() {
    return {};
  },
  methods: {
    onSubmit(e) {},
  },
  async created() {

    // Redirect to Open
    if (sessionStorage.length <= 0) {
      this.$router.push('/open');
    } else {

      // Open wallet

    }
  },
})
export default class View extends Vue {}
</script>
