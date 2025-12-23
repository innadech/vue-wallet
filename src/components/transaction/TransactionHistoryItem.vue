<script>
export default {
  props: ['transaction'],

  emits: ['transaction-deleted'],
}
</script>

<template>
  <li
    class="list-group-item"
    v-bind:class="
      transaction.type === 'expense'
        ? 'list-group-item-danger'
        : 'list-group-item-success'
    "
  >
    <span>{{ transaction.category + ':' }}</span>
    <span>{{ ' ' + transaction.amount }}</span>
    <button
      type="button"
      class="btn btn-secondary btn-sm ms-3"
      v-on:click="$emit('transaction-deleted', transaction.id)"
    >
      Delete
    </button>
  </li>
</template>
