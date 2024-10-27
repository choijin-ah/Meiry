<template>
  <editor-content id="memo_editor" :editor="editor" style="height: 200px"/>
</template>

<script>

import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

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
      extensions: [
        StarterKit,
        Placeholder.configure({

          placeholder: '생각나는 것을 그대로 적어보세요.',

          //나중에 쓸지도 모름
          // placeholder: ({ node }) => {
          //   if (node.type.name === 'heading') {
          //     return 'What’s the title?'
          //   }

          //   return 'Can you add some further context?'
          // },
        }),
      ],
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

<style >
#memo_editor {
  min-height: 150px;
  background-color: white;
  padding: 1%;
  border-radius: 20px;
  box-shadow: 0px 0px 10px -2px #000 ;
}

.tiptap p.is-editor-empty:first-child::before {
  color: #adb5bd;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}
</style>
