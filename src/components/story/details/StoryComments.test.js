import { shallow } from "enzyme";
import * as React from "react";
import { StoryComments } from "./StoryComments";

describe("components/story/details/StoryComponent", () => {
    it("should match snapShot", () => {
        const wrapper = shallow(<StoryComments descendants={21} />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render discuss of no comments form", () => {
        const wrapper = shallow(<StoryComments descendants={0} />);
        expect(wrapper.text()).toBe("discuss");
    });
    it("should render singular form", () => {
        const wrapper = shallow(<StoryComments descendants={1} />);
        expect(wrapper.text()).toBe("1 comment");
    });
    it("should render plural form", () => {
        const wrapper = shallow(<StoryComments descendants={21} />);
        expect(wrapper.text()).toBe("21 comments");
    });
});