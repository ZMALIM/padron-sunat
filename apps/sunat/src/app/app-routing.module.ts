import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages

import { DashboardDefaultComponent } from './example-pages/dashboard-default/dashboard-default.component';
import { ButtonsComponent } from './example-pages/buttons/buttons.component';
import { DropdownsComponent } from './example-pages/dropdowns/dropdowns.component';
import { NavigationMenusComponent } from './example-pages/navigation-menus/navigation-menus.component';
import { ProgressBarsComponent } from './example-pages/progress-bars/progress-bars.component';
import { PaginationComponent } from './example-pages/pagination/pagination.component';
import { ScrollableComponent } from './example-pages/scrollable/scrollable.component';
import { BadgesComponent } from './example-pages/badges/badges.component';
import { IconsComponent } from './example-pages/icons/icons.component';
import { UtilitiesHelpersComponent } from './example-pages/utilities-helpers/utilities-helpers.component';
import { Cards3Component } from './example-pages/cards-3/cards-3.component';
import { ListGroupsComponent } from './example-pages/list-groups/list-groups.component';
import { LandingPageComponent } from './example-pages/landing-page/landing-page.component';
import { AccordionsComponent } from './example-pages/accordions/accordions.component';
import { ModalsComponent } from './example-pages/modals/modals.component';
import { NotificationsComponent } from './example-pages/notifications/notifications.component';
import { CarouselsComponent } from './example-pages/carousels/carousels.component';
import { PopoversComponent } from './example-pages/popovers/popovers.component';
import { TooltipsComponent } from './example-pages/tooltips/tooltips.component';
import { TabsComponent } from './example-pages/tabs/tabs.component';
import { RegularTables1Component } from './example-pages/regular-tables-1/regular-tables-1.component';
import { RegularTables4Component } from './example-pages/regular-tables-4/regular-tables-4.component';
import { FormsLayoutComponent } from './example-pages/forms-layout/forms-layout.component';
import { FormsControlsComponent } from './example-pages/forms-controls/forms-controls.component';
import { ApexChartsComponent } from './example-pages/apex-charts/apex-charts.component';
import { MapsComponent } from './example-pages/maps/maps.component';

// Layouts

import { LeftSidebarComponent } from './layout-blueprints/left-sidebar/left-sidebar.component';
import { PresentationLayoutComponent } from './layout-blueprints/presentation-layout/presentation-layout.component';

const routes: Routes = [
	{
		path: '',
		component: LeftSidebarComponent,
		children: [
			{ path: 'dashboard-default', component: DashboardDefaultComponent },
			{ path: 'buttons', component: ButtonsComponent },
			{ path: 'dropdowns', component: DropdownsComponent },
			{ path: 'navigation-menus', component: NavigationMenusComponent },
			{ path: 'progress-bars', component: ProgressBarsComponent },
			{ path: 'pagination', component: PaginationComponent },
			{ path: 'scrollable', component: ScrollableComponent },
			{ path: 'badges', component: BadgesComponent },
			{ path: 'icons', component: IconsComponent },
			{ path: 'utilities-helpers', component: UtilitiesHelpersComponent },
			{ path: 'cards-3', component: Cards3Component },
			{ path: 'list-groups', component: ListGroupsComponent },
			{ path: 'accordions', component: AccordionsComponent },
			{ path: 'modals', component: ModalsComponent },
			{ path: 'notifications', component: NotificationsComponent },
			{ path: 'carousels', component: CarouselsComponent },
			{ path: 'popovers', component: PopoversComponent },
			{ path: 'tooltips', component: TooltipsComponent },
			{ path: 'tabs', component: TabsComponent },
			{ path: 'regular-tables-1', component: RegularTables1Component },
			{ path: 'regular-tables-4', component: RegularTables4Component },
			{ path: 'forms-layout', component: FormsLayoutComponent },
			{ path: 'forms-controls', component: FormsControlsComponent },
			{ path: 'apex-charts', component: ApexChartsComponent },
			{ path: 'maps', component: MapsComponent },
		]
	},
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes,
		{
			scrollPositionRestoration: 'enabled',
			anchorScrolling: 'enabled',
		})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
