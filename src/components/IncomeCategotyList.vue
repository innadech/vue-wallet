<script>
import IncomeCategoryItem from './IncomeCategoryItem.vue'
export default {
  components: { IncomeCategoryItem },

  props: ['incomeCategories'],

  emit: ['incomeCategories-deleted'],

  methods: {
    deleteIncomeCategory(id) {
      this.$emit(
        'incomeCategories-deleted',
        this.incomeCategories.filter(i => i.id !== id)
      )
    },
  },
}
</script>

<template>
  <ul>
    <IncomeCategoryItem
      v-for="incomecategory of incomeCategories"
      v-bind:key="incomecategory.id"
      v-bind:incomecategory="incomecategory"
      v-on:incomecategory-deleted="deleteIncomeCategory($event)"
    />
  </ul>
</template>
