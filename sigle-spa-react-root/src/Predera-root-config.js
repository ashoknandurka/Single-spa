import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });
console.log("rootConfig localStorage::",localStorage.getItem('data'));
registerApplication({
  name: "@Predera/navbar",
  app: () => System.import("@Predera/navbar"),
  activeWhen: isActive.navbar
});

registerApplication({
  name: "@Predera/single-spa-react-app1",
  app: () => System.import("@Predera/single-spa-react-app1"),
  activeWhen: isActive.home
});

registerApplication({
  name: "@Predera/single-spa-react-header",
  app: () => System.import("@Predera/single-spa-react-header"),
  activeWhen: isActive.header
});

registerApplication({
  name: "@Predera/single-spa-react-test",
  app: () => System.import("@Predera/single-spa-react-test"),
  activeWhen: isActive.test,
  customProps:{"authToken": "test"} 
});


start({
  urlRerouteOnly: true,
});
