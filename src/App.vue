<template>
    <header_top />
  ` <memo />

</template>

<script>
import header_top from '@/layout/header.vue';
import memo from '../src/layout/memo.vue'



export default {
  name: 'App',
  components: {
    header_top, // 가져온 컴포넌트를 등록합니다
    memo,
  },
};
</script>

<style>

</style>
