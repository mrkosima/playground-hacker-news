import * as React from "react";

const getComment = (commentsCount) => {
    if (commentsCount > 1) {
        return `${commentsCount} comments`
    }
    if (commentsCount === 1) {
        return "1 comment"
    }
    return "discuss";
}

export const StoryComments = ({descendants}) => (
    <span>{getComment(descendants)}</span>
);
