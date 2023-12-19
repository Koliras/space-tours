import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import {
  RecoilRoot,
} from 'recoil';
import './index.css'
import Main from './routes/Main/Main.tsx'
import Favorites from './routes/Favorites/Favorites.tsx';
import Root from './routes/Root/Root.tsx';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
});

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </ApolloProvider>
  </React.StrictMode>,
)
