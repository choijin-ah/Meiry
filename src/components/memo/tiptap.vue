<template>
  <editor-content id="memo_editor" :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      content: '기본 텍스트',
      extensions: [StarterKit],
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

<style>
#memo_editor {
  width: 30%;
  min-height: 300px;
  background-color: white;
  padding: 1%;
  border-radius: 20px;
  box-shadow: 0px 0px 20px -2px #000 ;
}
</style>
