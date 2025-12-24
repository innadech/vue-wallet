<script>
export default {
  props: ['transactionHistory'],
  computed: {
    balance() {
      return this.transactionHistory.reduce(
        (acc, item) =>
          item.type === 'income' ? acc + item.amount : acc - item.amount,
        0
      )
    },
  },
}
</script>

<template>
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">
        <p class="fs-1 text-left">Wallet</p>
      </div>
    </div>
    <div class="col">
      <div class="p-3 text-center">
        <p id="balance" class="fs-1 text-right">Balance: {{ balance }}</p>
      </div>
    </div>
  </div>
</template>
