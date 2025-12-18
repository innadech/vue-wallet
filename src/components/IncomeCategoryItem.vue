<script>
export default {
  props: ['incomecategory'],

  emits: ['incomecategory-deleted'],

  data() {
    return {
      localIncomecategory: { ...this.incomecategory },
    }
  },
}
</script>

<template>
  <li class="m-3">
    <span>{{ localIncomecategory.caption }}</span>
    <button
      type="button"
      class="btn btn-secondary btn-sm ms-3"
      v-on:click="$emit('incomecategory-deleted', localIncomecategory.id)"
    >
      Delete
    </button>
  </li>
</template>
