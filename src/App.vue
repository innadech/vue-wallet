<script>
import BalanceWidget from './components/BalanceWidget.vue'
import IncomeWidget from './components/income/IncomeWidget.vue'
import ExpenseWidget from './components/expense/ExpenseWidget.vue'
import TransactionHistoryWidget from './components/transaction/TransactionHistoryWidget.vue'

export default {
  components: {
    IncomeWidget,
    ExpenseWidget,
    BalanceWidget,
    TransactionHistoryWidget,
  },
  data() {
    return {
      transactionHistory: [],
    }
  },
}
</script>

<template>
  <body data-bs-theme="blue">
    <div>{{ transactionHistory }}</div>
    <div class="container">
      <div
        class="container-fluid mt-3 bg-light-subtle border border-subtle rounded-3"
      >
        <div class="container px-4 text-left">
          <BalanceWidget v-bind:transaction-history="transactionHistory" />
          <div class="row gx-5">
            <IncomeWidget v-on:submitted="transactionHistory.push($event)" />
            <ExpenseWidget v-on:submitted="transactionHistory.push($event)" />
          </div>
        </div>
        <TransactionHistoryWidget
          v-bind:transaction-history="transactionHistory"
          v-on:update="transactionHistory = $event"
        />
      </div>
    </div>
  </body>
</template>
