import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import AddQuestionSection from "../AddQuestionSection";
import { Button, Typography } from "@mui/material";
import optionsData from "../../../shared/tests/options.data";

configure({ adapter: new Adapter() });

describe("AddQuestionSection component", () => {
  const setQuestion = jest.fn();
  const setOptions = jest.fn();
  describe("content", () => {
    const wrapper = shallow(
      <AddQuestionSection
        options={[]} question={""}
        setQuestion={setQuestion} setOptions={setOptions}
      />);

    it("has a title", () => {
      expect(wrapper.find(Typography).at(0).text()).toBe("Question / Answers form");
    });

    it("has a TextField for question", () => {
      expect(wrapper.find("#question_key")).toHaveLength(1);
      expect(wrapper.find("#question_key").prop("label")).toBe("What's your question?");
    });

    it("call setQuestion when changing TextField question", () => {
      expect(setQuestion).not.toHaveBeenCalled();
      wrapper.find("#question_key").simulate("change", { target: { value: "what?" } });
      expect(setQuestion).toHaveBeenCalled();
    });

    it("has a reset button", () => {
      expect(wrapper.find(Button).at(1).text()).toBe("Rest");
    });

    it("renders snapshots", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("when options and question ar not filled yet", () => {
    const wrapper = shallow(
      <AddQuestionSection
        options={[]} question={""}
        setQuestion={setQuestion} setOptions={setOptions}
      />);

    it("has a add input disabled", () => {
      expect(wrapper.find("#add_new_option")).toHaveLength(1);
      expect(wrapper.find("#add_new_option").prop("disabled")).toBe(true);
    });
  });

  describe("when question is filled", () => {
    const wrapper = shallow(
      <AddQuestionSection
        options={[]} question={"what is the capital of the Netherlands?"}
        setQuestion={setQuestion} setOptions={setOptions}
      />);

    it("has a add input not disabled", () => {
      expect(wrapper.find("#add_new_option")).toHaveLength(1);
      expect(wrapper.find("#add_new_option").prop("disabled")).toBe(false);
    });
  });

  describe("when question && answer are filled", () => {
    const wrapper = shallow(
      <AddQuestionSection
        options={optionsData} question={"what is the capital of the Netherlands?"}
        setQuestion={() => jest.fn()} setOptions={setOptions}
      />);

    it("lists existing options", () => {
      expect(wrapper.find("#input-group")).toHaveLength(3);
    });

    it("calls setOptions when reset button is clicked", () => {
      expect(setOptions).not.toHaveBeenCalled();
      wrapper.find(Button).at(3).simulate("click");
      expect(setOptions).toHaveBeenCalled();
    });
  });
});
