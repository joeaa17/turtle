<template>
  <div class="open" style="margin-top: 20px;">
    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
        <img src="@/assets/img/swanson/Searching.png" />
        <form @submit.prevent="onSubmit" class="form" style="margin-top:20px;">
          <b-field>
            <b-select
              v-model="wallet"
              name="wallet"
              placeholder="Select a wallet"
              size="is-large"
              icon="wallet"
              expanded
            >
              <option v-for="(wallet, index) in wallets" :key="index">
                {{ wallet.name }}
              </option>
            </b-select>
          </b-field>

          <b-field position="is-centered">
            <b-input
              v-model="password"
              type="password"
              name="password"
              size="is-large"
              icon="key"
              placeholder="Password"
              password-reveal
            />
          </b-field>
          <div class="columns is-mobile">
            <div class="column">
              <b-button
                type="is-primary is-fullwidth is-outlined"
                size="is-large"
                tag="router-link"
                to="/create"
                >Create New</b-button
              >
            </div>
            <div class="column">
              <b-button
                native-type="submit"
                value="submit"
                type="is-dark is-fullwidth"
                size="is-large"
                >Open</b-button
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ValidationObserver } from 'vee-validate';
import BInputWithValidation from '../components/inputs/BInputWithValidation.vue';
import { mapGetters, mapActions } from 'vuex';

@Component({
  components: {
    ValidationObserver,
    BInputWithValidation,
  },
  props: {},
  data() {
    return {
      wallet: null,
      password: null,
    };
  },
  computed: {
    ...mapGetters({
      wallets: 'getWallets',
    }),
  },
  methods: {
    ...mapActions(['setWallet']),
    onSubmit() {

      // Store open wallet in store
      this.$store.state.setWallet({
        wallet: this.wallet,
        password: this.password,
      });

      // Redirect to app
      this.$router.push('/');
    },
  },
})
export default class Open extends Vue {}
</script>
