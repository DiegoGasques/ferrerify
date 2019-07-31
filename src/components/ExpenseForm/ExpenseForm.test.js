import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ExpenseForm from "./ExpenseForm";
import { expensesArr } from "../../fixtures/expenses";

describe("[COMPONENT] ExpenseForm", () => {
  it("Tests for changes in the rendered component with default props", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Tests for changes in the rendered component with expense passed in", () => {
    const wrapper = shallow(<ExpenseForm {...expensesArr[0]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Tests for form submition event that should set error to state", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.find("form").simulate("submit", {
      preventDefault: () => {}
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Tests for handleChange call changing the description", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJson(wrapper.find('input[name="description"]'))).toMatchSnapshot();

    const value = "new description";
    wrapper.find('input[name="description"]').simulate("change", {
      target: { value, name: "description" }
    });
    expect(toJson(wrapper.find('input[name="description"]'))).toMatchSnapshot();
  });

  it("Tests for handleChange call changing the note", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJson(wrapper.find('textarea[name="note"]'))).toMatchSnapshot();

    const value = "new note!!!!!!!";
    wrapper.find('textarea[name="note"]').simulate("change", {
      target: { value, name: "note" }
    });
    expect(toJson(wrapper.find('textarea[name="note"]'))).toMatchSnapshot();
  });

  it("Tests for handleChange call changing the amount", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJson(wrapper.find('input[name="amount"]'))).toMatchSnapshot();

    const value = "63278233.56";
    wrapper.find('input[name="amount"]').simulate("change", {
      target: { value, name: "amount" }
    });
    expect(toJson(wrapper.find('input[name="amount"]'))).toMatchSnapshot();
  });

  it("Tests for handleChange call when amount value passed is invalid", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJson(wrapper.find('input[name="amount"]'))).toMatchSnapshot();

    const value = "633,";
    wrapper.find('input[name="amount"]').simulate("change", {
      target: { value, name: "amount" }
    });
    expect(toJson(wrapper.find('input[name="amount"]'))).toMatchSnapshot();
  });
});
