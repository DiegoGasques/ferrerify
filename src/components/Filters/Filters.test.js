import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { filters, defaultFilters } from "../../fixtures/filters";
import { Filters } from "./Filters";

describe("[COMPONENT] Filters", () => {
  let wrapper, setTextFilterSpy, setSortBySpy, setStartDateSpy, setEndDateSpy;
  beforeEach(() => {
    setTextFilterSpy = jest.fn();
    setSortBySpy = jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    wrapper = shallow(
      <Filters
        filters={defaultFilters}
        setTextFilter={setTextFilterSpy}
        setSortBy={setSortBySpy}
        setStartDate={setStartDateSpy}
        setEndDate={setEndDateSpy}
      />
    );
  });

  it("Tests for correct component render with default filters", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Tests for correct component render with alt filters", () => {
    wrapper.setProps({ filters });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Tests for correct calls setTextChange", () => {
    const event = { target: { value: "Reee" } };
    wrapper.find('input[name="text"]').simulate("change", event);
    expect(setTextFilterSpy).toHaveBeenLastCalledWith(event.target.value);
  });

  it("Tests for correct calls setSortBy", () => {
    const event = { target: { value: "amount" } };
    wrapper.find('select[name="sortBy"]').simulate("change", event);
    expect(setSortBySpy).toHaveBeenLastCalledWith(event.target.value);
  });
});
