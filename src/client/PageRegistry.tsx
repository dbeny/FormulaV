import {register, startsWith, equals} from "./PageProvider";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import SchedulePage from "./pages/SchedulePage";
import HistoryPage from "./pages/HistoryPage";
import DriversPage from "./pages/DriversPage";
import AcademiesPage from "./pages/AcademiesPage";
import TeamsPage from "./pages/TeamsPage";
import LivePage from "./pages/LivePage";

const Registry = {
	[HomePage.id]:      equals("/",          (path, props) => <HomePage      key={HomePage.id}      app={props.app}/>),
	[NewsPage.id]:      equals("/news",      (path, props) => <NewsPage      key={NewsPage.id}      app={props.app}/>),
	[SchedulePage.id]:  equals("/schedule",  (path, props) => <SchedulePage  key={SchedulePage.id}  app={props.app}/>),
	[HistoryPage.id]:   equals("/history",   (path, props) => <HistoryPage   key={HistoryPage.id}   app={props.app}/>),
	[DriversPage.id]:   equals("/drivers",   (path, props) => <DriversPage   key={DriversPage.id}   app={props.app}/>),
	[AcademiesPage.id]: equals("/academies", (path, props) => <AcademiesPage key={AcademiesPage.id} app={props.app}/>),
	[TeamsPage.id]:     equals("/teams",     (path, props) => <TeamsPage     key={TeamsPage.id}     app={props.app}/>),
	[LivePage.id]:      equals("/live",      (path, props) => <LivePage      key={LivePage.id}      app={props.app}/>),
} as const;

export default class PageRegistry {
	init() {
		for (let page in Registry) {
			register(Registry[page]);
		}
	}
}