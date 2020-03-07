import { mount, createLocalVue } from "@vue/test-utils";
import Header from "../Header";

const localVue = createLocalVue();

describe("Header Component", () => {
  it("should render with the correct HTML", () => {
    const wrapper = mount(Header, { localVue });
    expect(wrapper.html()).toBe("<h1>Vue Unit Test Examples</h1>");
  });
});
