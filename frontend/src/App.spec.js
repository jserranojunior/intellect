import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import App from "./App.vue";
import * as All from "quasar";

const { Quasar, date } = All;

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key];
  if (val && val.component && val.component.name != null) {
    object[key] = val;
  }
  return object;
}, {});

describe("App", () => {
  const localVue = createLocalVue();
  localVue.use(Quasar, { components });
  localVue.use(VueRouter);

  const wrapper = shallowMount(App, {
    localVue
  });
  const vm = wrapper.vm;

  it("Mounted App", () => {
    expect(wrapper.findComponent(App)).toBeTruthy();
  });
});
