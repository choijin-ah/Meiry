<script setup>
  import editor from '@/components/memo/tiptap.vue';
  import checklist from '@/components/memo/checklist_board.vue';
  import memoboard from '@/components/memo/memo.vue'


</script>

<template>

  <div id="area_ShortMemo">
    <div id="area_checklist">
      <checklist />
    </div>
    <div id="area_memo">
      <editor />
      <memoboard id="memoboard"/>
    </div>
  </div>


</template>

<style scoped>
  #area_ShortMemo {
    margin: 2% 15%;
    width: 70%;
    display: flex;
  }
  #area_checklist{
    width: 25%;
    margin: 0 3% 0 0;
  }
  #area_memo{
    width: 75%;
  }
  #memoboard{
    margin: 2% 0;
  }

</style>