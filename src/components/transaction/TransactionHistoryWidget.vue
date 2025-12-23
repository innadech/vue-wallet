<script>
import TransactionHistoryList from './TransactionHistoryList.vue'

export default {
  components: { TransactionHistoryList },

  emits: ['update'],

  props: ['transactionHistory'],
}
</script>

<template>
  <TransactionHistoryList
    v-bind:transaction-history="transactionHistory"
    v-on:updated="$emit('update', $event)"
  />
</template>
