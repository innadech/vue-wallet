<script>
export default {
  props: ['balance'],
}
</script>

<template>
  <div class="col">
    <div class="p-3 text-center">
      <p id="balance" class="fs-1 text-right">{{ balance }}</p>
    </div>
  </div>
</template>
