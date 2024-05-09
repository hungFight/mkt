import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

// Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css'

// Tailwind css
import '@renderer/assets/index.css'
// import '@renderer/assets/fonts/GoogleSans-Bold.woff2'
// import '@renderer/assets/fonts/GoogleSans-Medium.woff2'
// import '@renderer/assets/fonts/GoogleSans-Regular.woff2'

// i18n (needs to be bundled)
import '@renderer/i18n'

// Router
import { RouterProvider } from 'react-router-dom'
import router from '@renderer/router/index'

// Redux
import { Provider } from 'react-redux'
import store from '@renderer/store/index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  </React.StrictMode>
)
