import * as React from "react";
import { StoryScore } from "./StoryScore";
import { StoryAuthor } from "./StoryAuthor";
import { StoryTime } from "./StoryTime";
import { StoryComments } from "./StoryComments";

export const StoryDetails = props => (
    <p className="storyDetails">
        <StoryScore {...props} />
        {" | "}
        <StoryAuthor {...props} />
        {" | "}
        <StoryTime {...props} />
        {" | "}
        <StoryComments {...props} />
    </p>
);
