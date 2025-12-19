<script>
import OutcomeCategoryItem from './OutcomeCategoryItem.vue'

export default {
  components: { OutcomeCategoryItem },

  props: ['outcomeCategories'],

  emit: ['updated'],

  methods: {
    deleteOutcomeCategory(id) {
      this.$emit(
        'updated',
        this.outcomeCategories.filter(outcome => outcome.id !== id)
      )
    },
  },
}
</script>

<template>
  <div class="p-3">
    <p>Outcome categories</p>
    <ul>
      <OutcomeCategoryItem
        v-for="category of outcomeCategories"
        v-bind:key="category.id"
        v-bind:category="category"
        v-on:outcomecategory-deleted="deleteOutcomeCategory($event)"
      />
    </ul>
  </div>
</template>
