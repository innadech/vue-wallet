<script>
export default {
  props: ['category'],

  emits: ['incomecategory-deleted'],
}
</script>

<template>
  <li class="m-3">
    <span>{{ category }}</span>
    <button
      type="button"
      class="btn btn-secondary btn-sm ms-3"
      v-on:click="$emit('incomecategory-deleted', category)"
    >
      Delete
    </button>
  </li>
</template>
