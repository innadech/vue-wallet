<script>
export default {
  props: ['category'],

  emits: ['category-deleted'],
}
</script>

<template>
  <li class="m-3">
    <span>{{ category.caption }}</span>
    <button
      type="button"
      class="btn btn-secondary btn-sm ms-3"
      v-on:click="$emit('category-deleted', category.id)"
    >
      Delete
    </button>
  </li>
</template>
