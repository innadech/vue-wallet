<script>
import TransactionHistoryItem from './TransactionHistoryItem.vue'
export default {
  components: { TransactionHistoryItem },

  props: ['transactionHistory'],

  emit: ['history-deleted'],

  methods: {
    deleteTransaction(id) {
      this.$emit(
        'history-deleted',
        this.transactionHistory.filter(t => t.id !== id)
      )
    },
  },
}
</script>

<template>
  <ul>
    <IncomeCategoryItem
      v-for="transaction of transactionHistory"
      v-bind:key="transaction.id"
      v-bind:transaction="transaction"
      v-on:transaction-deleted="deleteTransaction($event)"
    />
  </ul>
</template>
