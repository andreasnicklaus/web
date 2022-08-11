<template>
  <div class="currency-converter">
    <h2>Convert your currency here:</h2>

    <Numberinput :min="0" v-model="amountFrom"/>

<!--    <input type="number" class="input" min="0" v-model="amountFrom"/>-->

    <Dropdown :options="['Euro', 'Dollar']" :default-value="currencyFrom" @onChange="currencyFrom = $event"/>
    <Dropdown :options="['Euro', 'Dollar']" :default-value="currencyTo" @onChange="currencyTo = $event"/>

    <h3>
      <span>{{ amountFrom }} {{ currencyFrom}}</span>
      converts to
      <span>{{ amountTo }} {{ currencyTo }}</span>

    </h3>


  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown";
import Numberinput from "@/components/Numberinput";
export default {
  name: "CurrencyConverter_component",
  components: {Numberinput, Dropdown},
  data() {
    return {
      amountFrom: 0,
      currencyFrom: 'Euro',
      currencyTo: 'Dollar',
      // TODO: calculate amount directly in html template
      amountTo: 0
    }
  }
}
</script>