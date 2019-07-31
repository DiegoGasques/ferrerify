import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { SecondaryContent } from "./SecondaryContent";

describe("[COMPONENT] SecondaryContent", () => {
  it("Tests for changes in the rendered component", () => {
    const wrapper = shallow(<SecondaryContent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
