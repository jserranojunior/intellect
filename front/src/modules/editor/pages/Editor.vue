<template>
<div>
    <Main>
        <template v-slot:mainpage>
             
               
    <vue-editor :customModules="customModulesForEditor" :editorOptions="editorSettings" v-model="content"> </vue-editor>        </template>
   
   
   
   <div class="output ql-snow">

      <div class="ql-editor" v-html="content"></div>
    </div>
   </Main>
</div>
</template>

<script>
import Main from '@/views/layouts/Main'

import { VueEditor } from "vue2-editor";
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module";



export default {
    name: "Editor",
    data() {
        return {
           content: "<h1>Initial Content</h1>",
           customModulesForEditor: [
            { alias: "imageDrop", module: ImageDrop },
            { alias: "imageResize", module: ImageResize }
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
        VueEditor,
    
    },
}
</script>

