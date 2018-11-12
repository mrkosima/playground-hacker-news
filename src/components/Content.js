import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { HeaderComponent } from "./Header";
import { FooterComponent } from "./Footer";
import { Stories } from "./story/Stories";
import { StubComponent } from "./Stub";

export class ContentComponent extends React.PureComponent {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <>
          <HeaderComponent />
          <Switch>
            <Redirect exact path="/" to="/top" />
            <Route path="/top" component={Stories} />
            <Route component={StubComponent} />
          </Switch>
          <FooterComponent />
        </>
      </BrowserRouter>
    );
  }
}
