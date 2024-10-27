<template>
  <div id="app">
    <editor />
  </div>
</template>

<script>
import editor from '@/components/layout/memo/tiptap.vue'
export default {
  name: 'editor',
  components: {
    editor, // 가져온 tiptap 컴포넌트를 등록
  },
};

</script>

<style scoped>

</style>