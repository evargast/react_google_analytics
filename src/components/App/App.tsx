import {
    lightTheme,
    ProgressCircle,
    Provider as ProviderV3,
} from "@adobe/react-spectrum";
import HelloExample from "components/HelloExample";
import React, { FC, Suspense } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { analytics } from "utils";

import "./App.css";

const App: FC = () => {
    analytics.pageview();

    return (
        <ProviderV3 theme={lightTheme} colorScheme={"dark"} height="100vh">
            <HashRouter>
                <Suspense
                    fallback={
                        <ProgressCircle aria-label="Loading…" isIndeterminate />
                    }
                >
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/hello" />
                        </Route>

                        <Route path="/hello">
                            <HelloExample />
                        </Route>

                        <Route path="*">
                            <Redirect to="/hello" />
                        </Route>
                    </Switch>
                </Suspense>
            </HashRouter>
        </ProviderV3>
    );
};

export default App;
