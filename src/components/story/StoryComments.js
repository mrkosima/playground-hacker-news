import * as React from "react";

const getCommentWord = (commentsCount) => {
    if (commentsCount > 1) {
        return "comments"
    }
    if (commentsCount === 1) {
        return "comment"
    }
    return "discuss";
}

export const StoryComments = ({descendants}) => (
    <span>{descendants} {getCommentWord(descendants)}</span>
  );
