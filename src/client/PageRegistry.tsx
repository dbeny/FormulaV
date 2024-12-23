import {register, startsWith, equals} from "./PageProvider";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import SchedulePage from "./pages/SchedulePage";
import HistoryPage from "./pages/HistoryPage";
import DriversPage from "./pages/DriversPage";
import AcademiesPage from "./pages/AcademiesPage";
import TeamsPage from "./pages/TeamsPage";
import LivePage from "./pages/LivePage";
import DashboardPage from "./pages/DashboardPage";

const Registry = {
	[HomePage.id]:      equals("/",          (path, props) => <HomePage      key={HomePage.id}      app={props.app} api={props.api}/>),
	[NewsPage.id]:      equals("/news",      (path, props) => <NewsPage      key={NewsPage.id}      app={props.app} api={props.api}/>),
	[SchedulePage.id]:  equals("/schedule",  (path, props) => <SchedulePage  key={SchedulePage.id}  app={props.app} api={props.api}/>),
	[HistoryPage.id]:   equals("/history",   (path, props) => <HistoryPage   key={HistoryPage.id}   app={props.app} api={props.api}/>),
	// singleNumber /drivers/someone should return DriversPage too but with a different prop (like "singleDriverPage?" or smth)
	[DriversPage.id]:   equals("/drivers",   (path, props) => <DriversPage   key={DriversPage.id}   app={props.app} api={props.api}/>),
	[AcademiesPage.id]: equals("/academies", (path, props) => <AcademiesPage key={AcademiesPage.id} app={props.app} api={props.api}/>),
	[TeamsPage.id]:     equals("/teams",     (path, props) => <TeamsPage     key={TeamsPage.id}     app={props.app} api={props.api}/>),
	[LivePage.id]:      equals("/live",      (path, props) => <LivePage      key={LivePage.id}      app={props.app} api={props.api}/>),
	[DashboardPage.id]: equals("/dashboard", (path, props) => <DashboardPage key={DashboardPage.id} app={props.app} api={props.api}/>)
} as const;

export default class PageRegistry {
	init() {
		for (let page in Registry) {
			register(Registry[page]);
		}
	}
}