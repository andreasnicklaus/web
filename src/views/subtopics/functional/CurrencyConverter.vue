<template>
  <div>
    <PageTitle
        title="Currency Converter"
        paragraph="Convert your currency"
        back_arrow_goal="Home"
    />
    <div class="container">
      <CurrencyConverter_component/>
    </div>
  </div>
</template>

<script>
// import CurrencyServices from '@/services/functional/currencyServices';
import PageTitle from "@/components/PageTitle";
import CurrencyConverter_component from "@/components/functional/currencyConverter/CurrencyConverter_component";

export default {
  name: "CurrencyConverter",
  components: {CurrencyConverter_component, PageTitle},
  data() {
    return {
      currencyOptions: null,
      left_amount: 10,
      left_currency: null,
      right_amount: 0,
      right_currency: null
    }
  }
}
</script>
