import Page1 from "./views/page1";
import Page2 from "./views/page2";

import Page11 from "./views/page1-1"

export const RouterConfig = [
  {
    path: '/page1',
    component: Page1,
    sceneConfig: {
      enter: 'from-bottom',
      exit: 'to-bottom'
    },
    rotues:[
      {
        path: '/page1/page1-1',
        component: Page11,
      }
    ]
  },
  {
    path: '/page2',
    component: Page2,
    sceneConfig: {
      enter: 'from-bottom',
      exit: 'to-bottom'
    }
  }
];
