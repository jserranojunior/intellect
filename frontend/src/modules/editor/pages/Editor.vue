<template>
  <div>
    <Main>
      <template v-slot:mainpage>
        <vue-editor
          id="editor"
          useCustomImageHandler
          @image-added="handleImageAdded"
          :customModules="customModulesForEditor"
          :editorOptions="editorSettings"
          v-model="content"
        ></vue-editor>

        <div class="output ql-snow">
          <div class="ql-editor" v-html="content"></div>
        </div>
      </template>
    </Main>
  </div>
</template>

<script>
/* eslint-disable */
import Main from '@/views/layouts/Main'
import axios from 'axios'
import { VueEditor } from 'vue2-editor'
import { ImageDrop } from 'quill-image-drop-module'
import ImageResize from 'quill-image-resize-module'

export default {
  name: 'Editor',
  data () {
    return {
      content: '<h1>Texto inicial</h1>',
      customModulesForEditor: [
        { alias: 'imageDrop', module: ImageDrop },
        { alias: 'imageResize', module: ImageResize }
      ],
      editorSettings: {
        modules: {
          imageDrop: true,
          imageResize: {}
        }
      }
    }
  },

  components: {
    Main,
    VueEditor

  },
  methods: {
    teste () {
      console.log('FUNCIONADNOOOO')
    },
    handleImageAdded: function (file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)

      var formData = new FormData()
      formData.append('image', file)
      console.log
      axios({
        url: 'http://127.0.0.1:3333/images/upload',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data'
        },
        data: formData
      })
        .then(result => {
          console.log(result)
          const url = result.data.url // Get url from response
          Editor.insertEmbed(cursorLocation, 'image', url)
          resetUploader()
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}
</script>
