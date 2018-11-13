import * as React from "react";

export const StoryIcon = ({url, title, children}) => (
    <>
        <img src={`http://s2.googleusercontent.com/s2/favicons?domain_url=${url}`}
             alt={title}
             className="storyIcon" />
        {children}
    </>
);
