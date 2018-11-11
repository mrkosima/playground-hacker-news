import * as React from "react";
import { ItemScore } from "./ItemScore";
import { ItemAuthor } from "./ItemAuthor";
import { ItemTime } from "./ItemTime";
import { ItemComments } from "./ItemComments";
import "./ItemDetails.css";

export const ItemDetails = props => (
    <p className="itemDetails">
        <ItemScore {...props} />
        {" | "}
        <ItemAuthor {...props} />
        {" | "}
        <ItemTime {...props} />
        {" | "}
        <ItemComments {...props} />
    </p>
)