import { shallowMount } from "@vue/test-utils";
import AppTouchButton from "@/components/AppTouchButton/AppTouchButton.vue";

describe("AppTouchButton", () => {
  it("button active when clicked on it ", () => {
    const wrapper = shallowMount(AppTouchButton, {
      propsData: {
        isWaitForElevator: false,
        isActive: true,
      },
    });

    expect(wrapper.html()).toContain("active");
  });

  it("button blink when wait for elevator ", () => {
    const wrapper = shallowMount(AppTouchButton, {
      propsData: {
        isWaitForElevator: true,
        isActive: true,
      },
    });

    expect(wrapper.html()).toContain("blink");
  });
});
