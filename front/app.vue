import { onMounted } from 'vue';
<template>
  <div>
    <Html>
      <Head>
        <Title>Intellect</Title>

        <Meta />
      </Head>
    </Html>
    <div data-theme="cupcake">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
const {  isLogged, ola
} = useAuth()
onMounted(()=>{
      isLogged()
      console.log(ola.value)
})
    
    useMeta({
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
        { name: "description", content: "Sistema Intellect" }
      ],
      bodyAttrs: {
        class: 'test'
      },
      htmlAttrs: {
        lang: 'pt-br'
      },
      link: [
        { rel: 'icon', href: '/favicon.svg' }
      ]
    })


  }

}
</script>