import * as React from "react";
import { HeaderComponent } from "./Header";
import { FooterComponent } from "./Footer";
import { Stories } from "./story/Stories";

export class ContentComponent extends React.PureComponent {
  render() {
    return (
      <>
        <HeaderComponent />
        <Stories />
        <FooterComponent />
      </>
    );
  }
}
