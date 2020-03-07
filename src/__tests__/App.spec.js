import { mount, createLocalVue } from "@vue/test-utils";
import App from "../App";
import Header from "../components/Header";

const localVue = createLocalVue();

describe("Main App Component", () => {
  it("should render the header child", () => {
    const wrapper = mount(App, { localVue });
    expect(wrapper.html()).toContain("<h1>Vue Unit Test Examples</h1>");
  });
});
