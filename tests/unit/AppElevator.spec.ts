import { shallowMount } from "@vue/test-utils";
import AppElevator from "@/components/AppElevator.vue";

describe("AppElevator", () => {
  it("show 1 floor when stay on 1 floor", () => {
    const wrapper = shallowMount(AppElevator, {
      propsData: {
        elevatorNumber: 1,
        elevatorsCount: 1,
        floorsCount: 5,
        hasDelay: false,
        target: 1,
        activeFloor: 1,
      },
    });
    expect(wrapper.text()).toContain("1");
  });

  it("show ↑ when have target upper itself", () => {
    const wrapper = shallowMount(AppElevator, {
      propsData: {
        elevatorNumber: 1,
        elevatorsCount: 1,
        floorsCount: 5,
        hasDelay: false,
        target: 2,
        activeFloor: 1,
      },
    });
    expect(wrapper.text()).toContain("↑");
  });

  it("show ↑ when have target upper itself", () => {
    const wrapper = shallowMount(AppElevator, {
      propsData: {
        elevatorNumber: 1,
        elevatorsCount: 1,
        floorsCount: 5,
        hasDelay: false,
        target: 2,
        activeFloor: 1,
      },
    });
    expect(wrapper.text()).toContain("↑");
  });

  it("show ↓ when have target upper itself", () => {
    const wrapper = shallowMount(AppElevator, {
      propsData: {
        elevatorNumber: 1,
        elevatorsCount: 1,
        floorsCount: 5,
        hasDelay: false,
        target: 2,
        activeFloor: 5,
      },
    });
    expect(wrapper.text()).toContain("↓");
  });

  it("show blink when elevator stay on the floor", () => {
    const wrapper = shallowMount(AppElevator, {
      propsData: {
        elevatorNumber: 1,
        elevatorsCount: 1,
        floorsCount: 5,
        hasDelay: true,
        target: 1,
        activeFloor: 1,
      },
    });

    expect(wrapper.html()).toContain("blink");
  });
});
