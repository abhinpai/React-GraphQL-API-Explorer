import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { Provider } from "mobx-react";

import stores from "./stores";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
      customerId: "automation-acceptance-test-1",
    },
    uri: "http://localhost:51225/api/graphql/read",
  }),
});

ReactDOM.render(
  // <React.StrictMode>
    <Provider {...stores}>
      <ApolloProvider client={client}>
        <App {...stores} />
      </ApolloProvider>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
