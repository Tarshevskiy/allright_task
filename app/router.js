import EmberRouter from "@ember/routing/router";
import config from "emberjs-task/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("item", { path: "/item/:item_id" });
  this.route("not-found", { path: "/*path" });
  this.route('news', function() {
    this.route('business');
  });
  this.route('blogs');
  this.route('forums');
});
