import { withInfo } from "@storybook/addon-info";
import { addDecorator, addParameters, configure } from "@storybook/react";

// automatically import all files ending in *.stories.tsx
const req = require.context("../stories", true, /\.stories\.tsx$/);

addDecorator(withInfo({
  inline: true,
  header: false,
}));

addParameters({
  options: {
    showPanel: false,
  },
});

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
