import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import VotingSection from "../VotingSection";
import { Button, RadioGroup, Typography } from "@mui/material";
import optionsData from "../../../shared/tests/options.data";

configure({ adapter: new Adapter() });

describe("VotingSection component", () => {
  const setOptions = jest.fn();

  describe("content", () => {
    const wrapper = shallow(<VotingSection options={[]} question={""} setOptions={setOptions} />);

    it("has a title", () => {
      expect(wrapper.find(Typography).at(0).text()).toBe("Voting section");
    });

    it("renders snapshots", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("has a voting button", () => {
      expect(wrapper.find(Button)).toHaveLength(1);
    });
  });

  describe("when options and question are empty", () => {
    const wrapper = shallow(<VotingSection options={[]} question={""} setOptions={setOptions} />);

    it("has a voting button disabled", () => {
      expect(wrapper.find(Button).prop("disabled")).toBe(true);
    });

    it("has empty list", () => {
      expect(wrapper.find(RadioGroup)).toHaveLength(1);
      expect(wrapper.find(RadioGroup).children()).toHaveLength(0);
    });
  });

  describe("when options and question are filled", () => {
    const wrapper = shallow(<VotingSection options={optionsData} question={"what is the capital of amsterdam?"}
                                           setOptions={setOptions} />);

    it("has 3 list items", () => {
      expect(wrapper.find(RadioGroup)).toHaveLength(1);
      expect(wrapper.find(RadioGroup).children()).toHaveLength(3);
    });

    it("has a voting button enabled", () => {
      expect(wrapper.find(Button).prop("disabled")).toBe(false);
    });

    it("calls setOptions when the button is clicked", () => {
      expect(setOptions).not.toHaveBeenCalled();
      wrapper.find(Button).simulate("click");
      expect(setOptions).toHaveBeenCalled();
    });
  });
});
