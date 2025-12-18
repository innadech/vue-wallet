<script>
export default {
  props: ['category'],

  emits: ['outcomecategory-deleted'],
}
</script>

<template>
  <li class="m-3">
    <span>{{ category.caption }}</span>
    <button
      type="button"
      class="btn btn-secondary btn-sm ms-3"
      v-on:click="$emit('outcomecategory-deleted', category.id)"
    >
      Delete
    </button>
  </li>
</template>
