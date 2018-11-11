import * as React from "react";
import humanizeDuration from "humanize-duration";

export const ItemTime = ({ time }) => <span>{humanizeDuration(Date.now() - time * 1000, { round: true, largest: 1 })} ago</span>;
