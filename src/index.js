import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import TemplateList from "./models/TemplatesList";
import TemplatesContainer from "./components/TemplatesController";
import {Provider} from 'mobx-react';

const store = new TemplateList();

render(
  <div>
      <Provider store={store}>
        <TemplatesContainer  />
      </Provider>
      <DevTools/>
  </div>,
    document.getElementById("root")
);

// playing around in the console
window.store = store;
