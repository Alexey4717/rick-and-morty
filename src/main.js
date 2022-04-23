import { createApp, h } from 'vue'
import { createApolloProvider } from '@vue/apollo-option'
import apolloClient from '@/utils/apollo'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './routes'

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

const app = createApp({
  render: () => h(App),
})

app.use(router).use(apolloProvider).mount('#app')
