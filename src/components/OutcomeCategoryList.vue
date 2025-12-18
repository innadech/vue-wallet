<script>
import OutcomeCategoryItem from './OutcomeCategoryItem.vue'

export default {
  components: { OutcomeCategoryItem },

  props: ['outcomeCategories'],

  emit: ['outcomeCategories-deleted'],

  methods: {
    deleteOutcomeCategory(id) {
      this.$emit(
        'outcomeCategories-deleted',
        this.outcomeCategories.filter(outcome => outcome.id !== id)
      )
    },
  },
}
</script>

<template>
  <ul>
    <OutcomeCategoryItem
      v-for="category of outcomeCategories"
      v-bind:key="category.id"
      v-bind:category="category"
      v-on:outcomecategory-deleted="deleteOutcomeCategory($event)"
    />
  </ul>
</template>
