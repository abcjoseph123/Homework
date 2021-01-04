import "./Main.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AllTimesPage } from "../../pages/AllTimesTracked/AllTimesTracked";
import { CreateTimePage } from "../../pages/ManualTimePost/ManualTimePostPage";
import { CreateStopwatchTimePage } from "../../pages/Stopwatch/StopwatchPostPage";
import { GetDescriptionPage } from "../../pages/SearchDescription/ByDescription";
import { Header } from "../../components/Form/Header";

function Main() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/addtime" component={CreateTimePage} />
          <Route path="/alltimes" component={AllTimesPage} />
          <Route path="/stopwatch" component={CreateStopwatchTimePage} />
          <Route path="/search" component={GetDescriptionPage} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default Main;
