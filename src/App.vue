<template>
    <header_top /> <!-- 여기에서 MyComponent를 사용합니다 -->
  ` <memo />

</template>

<script>
import header_top from './components/layout/menu/header_top.vue';
import memo from './page/memo.vue'



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
