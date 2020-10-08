import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeOptions } from './theme-options';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Widgets

// NGX Bootstrap Core

// NGX Bootstrap Buttons
import { ButtonsModule } from 'ngx-bootstrap';

// NGX Bootstrap Collapse

import { CollapseModule } from 'ngx-bootstrap';

// NGX Bootstrap Timepicker

import { TimepickerModule } from 'ngx-bootstrap';

// NGX Bootstrap Typeahead

import { TypeaheadModule } from 'ngx-bootstrap';

// NGX Bootstrap Carousel

import { CarouselModule } from 'ngx-bootstrap';

// NGX Bootstrap Dropdown

import { BsDropdownModule } from 'ngx-bootstrap';

// NGX Bootstrap Datepicker

import { BsDatepickerModule } from 'ngx-bootstrap';

// NGX Bootstrap Modal

import { ModalModule } from 'ngx-bootstrap';

// NGX Bootstrap Pagination

import { PaginationModule } from 'ngx-bootstrap';

// NGX Bootstrap Progress bar

import { ProgressbarModule } from 'ngx-bootstrap';

// NGX Bootstrap Tabs

import { TabsModule } from 'ngx-bootstrap';

// NGX Bootstrap Popover

import { PopoverModule } from 'ngx-bootstrap';

// NGX Bootstrap Tooltip

import { TooltipModule } from 'ngx-bootstrap';

// NGX Bootstrap Accordion

import { AccordionModule } from 'ngx-bootstrap';

// NGX Bootstrap Alert

import { AlertModule } from 'ngx-bootstrap';

// Bootstrap Core



// ApexCharts for Angular

import { NgApexchartsModule } from 'ng-apexcharts';

// Apex Charts



// Perfect Scrollbar

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	wheelPropagation: false
};

// NGX Dropzone for Angular

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
	// Change this to your upload POST address:
	url: 'https://httpbin.org/post',
	maxFilesize: 50,
	acceptedFiles: 'image/*'
};

// NG2 Charts

import { ChartsModule } from 'ng2-charts';

// Chart.js



// FontAwesome Regular SVG Icons

import {
	faSquare,
	faCheckCircle,
	faTimesCircle,
	faDotCircle,
	faThumbsUp,
	faComments,
	faFolderOpen,
	faTrashAlt,
	faFileImage,
	faFileArchive,
	faLifeRing,
	faCommentDots,
	faFolder,
	faKeyboard,
	faCalendarAlt,
	faEnvelope,
	faAddressCard,
	faMap,
	faObjectGroup,
	faImages,
	faUser,
	faLightbulb,
	faGem,
	faClock,
	faUserCircle,
	faQuestionCircle,
	faBuilding,
	faBell,
	faFileExcel,
	faFileAudio,
	faFileVideo,
	faFileWord,
	faFilePdf,
	faFileCode,
	faFileAlt,
	faEye,
	faChartBar
} from '@fortawesome/free-regular-svg-icons';

// FontAwesome Solid SVG Icons

import {
	faChevronRight,
	faSitemap,
	faPrint,
	faMapMarkerAlt,
	faTachometerAlt,
	faAlignCenter,
	faExternalLinkAlt,
	faShareSquare,
	faInfoCircle,
	faSync,
	faQuoteRight,
	faStarHalfAlt,
	faShapes, faCarBattery, faTable, faCubes, faPager, faCameraRetro, faBomb,
	faNetworkWired, faBusAlt, faBirthdayCake, faEyeDropper, faUnlockAlt, faDownload,
	faAward, faPlayCircle, faReply, faUpload, faBars, faEllipsisV, faSave,
	faSlidersH, faCaretRight, faChevronUp, faPlus, faLemon, faChevronLeft,
	faTimes, faChevronDown, faFilm, faSearch, faEllipsisH, faCog, faArrowsAltH,
	faPlusCircle, faAngleRight, faAngleUp, faAngleLeft, faAngleDown, faArrowUp,
	faArrowDown, faArrowRight, faArrowLeft, faStar, faSignOutAlt, faLink, faSpinner
} from '@fortawesome/free-solid-svg-icons';

// FontAwesome Brand SVG Icons

import {
	faFacebook, faTwitter, faAngular, faVuejs, faReact, faHtml5, faGoogle,
	faInstagram, faPinterest, faYoutube, faDiscord, faSlack, faDribbble, faGithub
} from '@fortawesome/free-brands-svg-icons';

// Angular FontAwesome Icons

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Angular FontAwesome Icons Core



// Pe7 Icons



// Socicons Icons



// Angular Progressbar Core

import { NgProgressModule } from '@ngx-progressbar/core';

// Angular Progressbar router module

import { NgProgressRouterModule } from '@ngx-progressbar/router';

// Angular Google Maps

import { AgmCoreModule } from '@agm/core';

// Angular Notifier

import { NotifierModule, NotifierOptions } from 'angular-notifier';
const customNotifierOptions: NotifierOptions = {
	position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 12,
			gap: 10
		}
	},
	theme: 'uifort',
	behaviour: {
		autoHide: 5000,
		onClick: 'hide',
		onMouseover: 'pauseAutoHide',
		showDismissButton: true,
		stacking: 4
	},
	animations: {
		enabled: true,
		show: {
			preset: 'slide',
			speed: 300,
			easing: 'ease'
		},
		hide: {
			preset: 'fade',
			speed: 300,
			easing: 'ease',
			offset: 50
		},
		shift: {
			speed: 300,
			easing: 'ease'
		},
		overlap: 150
	}
};

// Hamburgers navigation buttons



// Angular Leaflet maps

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// Leaflet Maps

import { tileLayer, latLng } from 'leaflet';

// Layouts

import { LeftSidebarComponent } from './layout-blueprints/left-sidebar/left-sidebar.component';
import { PresentationLayoutComponent } from './layout-blueprints/presentation-layout/presentation-layout.component';

// Layout components

import { HeaderComponent } from './layout-components/header/header.component';
import { HeaderUserboxComponent } from './layout-components/header-userbox/header-userbox.component';
import { SidebarComponent } from './layout-components/sidebar/sidebar.component';
import { SidebarHeaderComponent } from './layout-components/sidebar-header/sidebar-header.component';
import { SidebarMenuComponent } from './layout-components/sidebar-menu/sidebar-menu.component';
import { PageTitleComponent } from './layout-components/page-title/page-title.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { PromoSectionComponent } from './layout-components/promo-section/promo-section.component';
import { ExampleWrapperSimpleComponent } from './layout-components/example-wrapper-simple/example-wrapper-simple.component';
import { ExampleWrapperSeamlessComponent } from './layout-components/example-wrapper-seamless/example-wrapper-seamless.component';
import { ExampleWrapperContainerComponent } from './layout-components/example-wrapper-container/example-wrapper-container.component';

// Example components

import { DashboardDefaultSection1Component } from './example-components/DashboardDefault/dashboard-default-section-1/dashboard-default-section-1.component';
import { DashboardDefaultSection2Component } from './example-components/DashboardDefault/dashboard-default-section-2/dashboard-default-section-2.component';
import { DashboardDefaultSection3Component } from './example-components/DashboardDefault/dashboard-default-section-3/dashboard-default-section-3.component';
import { DashboardDefaultSection4Component } from './example-components/DashboardDefault/dashboard-default-section-4/dashboard-default-section-4.component';
import { AccordionsBasicComponent } from './example-components/Accordions/accordions-basic/accordions-basic.component';
import { AccordionsCollapseComponent } from './example-components/Accordions/accordions-collapse/accordions-collapse.component';
import { ApexChartsLineComponent } from './example-components/ApexCharts/apex-charts-line/apex-charts-line.component';
import { ApexChartsAreaComponent } from './example-components/ApexCharts/apex-charts-area/apex-charts-area.component';
import { ApexChartsColumnComponent } from './example-components/ApexCharts/apex-charts-column/apex-charts-column.component';
import { ApexChartsBarComponent } from './example-components/ApexCharts/apex-charts-bar/apex-charts-bar.component';
import { ApexChartsMixedComponent } from './example-components/ApexCharts/apex-charts-mixed/apex-charts-mixed.component';
import { ApexChartsHeatmapComponent } from './example-components/ApexCharts/apex-charts-heatmap/apex-charts-heatmap.component';
import { ApexChartsRadialbarComponent } from './example-components/ApexCharts/apex-charts-radialbar/apex-charts-radialbar.component';
import { ApexChartsRadarComponent } from './example-components/ApexCharts/apex-charts-radar/apex-charts-radar.component';
import { BadgesBasicComponent } from './example-components/Badges/badges-basic/badges-basic.component';
import { BadgesPillsComponent } from './example-components/Badges/badges-pills/badges-pills.component';
import { BadgesButtonsComponent } from './example-components/Badges/badges-buttons/badges-buttons.component';
import { ButtonsBasicComponent } from './example-components/Buttons/buttons-basic/buttons-basic.component';
import { ButtonsGroupsComponent } from './example-components/Buttons/buttons-groups/buttons-groups.component';
import { ButtonsGroupsSizingComponent } from './example-components/Buttons/buttons-groups-sizing/buttons-groups-sizing.component';
import { ButtonsColorsComponent } from './example-components/Buttons/buttons-colors/buttons-colors.component';
import { ButtonsLinksComponent } from './example-components/Buttons/buttons-links/buttons-links.component';
import { ButtonsOutlineComponent } from './example-components/Buttons/buttons-outline/buttons-outline.component';
import { ButtonsSizingComponent } from './example-components/Buttons/buttons-sizing/buttons-sizing.component';
import { Cards1Examples1Component } from './example-components/Cards1/cards1-examples-1/cards1-examples-1.component';
import { Cards2Examples8Component } from './example-components/Cards2/cards2-examples-8/cards2-examples-8.component';
import { Cards4Examples23Component } from './example-components/Cards4/cards4-examples-23/cards4-examples-23.component';
import { Cards5Examples29Component } from './example-components/Cards5/cards5-examples-29/cards5-examples-29.component';
import { Cards7Examples48Component } from './example-components/Cards7/cards7-examples-48/cards7-examples-48.component';
import { Cards8Examples55Component } from './example-components/Cards8/cards8-examples-55/cards8-examples-55.component';
import { Cards9Examples56Component } from './example-components/Cards9/cards9-examples-56/cards9-examples-56.component';
import { Cards9Examples61Component } from './example-components/Cards9/cards9-examples-61/cards9-examples-61.component';
import { Cards11Examples70Component } from './example-components/Cards11/cards11-examples-70/cards11-examples-70.component';
import { Cards12Examples79Component } from './example-components/Cards12/cards12-examples-79/cards12-examples-79.component';
import { CarouselsBasicComponent } from './example-components/Carousels/carousels-basic/carousels-basic.component';
import { DropdownsBasicComponent } from './example-components/Dropdowns/dropdowns-basic/dropdowns-basic.component';
import { DropdownsSplitComponent } from './example-components/Dropdowns/dropdowns-split/dropdowns-split.component';
import { RegularTables1Example1Component } from './example-components/RegularTables1/regular-tables-1-example-1/regular-tables-1-example-1.component';
import { RegularTables4Example7Component } from './example-components/RegularTables4/regular-tables-4-example-7/regular-tables-4-example-7.component';
import { FormsControlsBasicComponent } from './example-components/FormsControls/forms-controls-basic/forms-controls-basic.component';
import { FormsControlsInputGroupsComponent } from './example-components/FormsControls/forms-controls-input-groups/forms-controls-input-groups.component';
import { FormsLayoutBasicComponent } from './example-components/FormsLayout/forms-layout-basic/forms-layout-basic.component';
import { FormsLayoutGridsComponent } from './example-components/FormsLayout/forms-layout-grids/forms-layout-grids.component';
import { FormsUploadDropzoneComponent } from './example-components/FormsUpload/forms-upload-dropzone/forms-upload-dropzone.component';
import { FormsValidationBasicComponent } from './example-components/FormsValidation/forms-validation-basic/forms-validation-basic.component';
import { IconsFontawesomeComponent } from './example-components/Icons/icons-fontawesome/icons-fontawesome.component';
import { IconsSociconsComponent } from './example-components/Icons/icons-socicons/icons-socicons.component';
import { ListGroupsBasicComponent } from './example-components/ListGroups/list-groups-basic/list-groups-basic.component';
import { ListGroupsVariations4Component } from './example-components/ListGroups/list-groups-variations-4/list-groups-variations-4.component';
import { ListGroupsVariations8Component } from './example-components/ListGroups/list-groups-variations-8/list-groups-variations-8.component';
import { MapsGoogleMapsComponent } from './example-components/Maps/maps-google-maps/maps-google-maps.component';
import { MapsLeafletComponent } from './example-components/Maps/maps-leaflet-maps/maps-leaflet-maps.component';
import { ModalsBasicComponent } from './example-components/Modals/modals-basic/modals-basic.component';
import { NavigationMenusHorizontalComponent } from './example-components/NavigationMenus/navigation-menus-horizontal/navigation-menus-horizontal.component';
import { NavigationMenusVerticalBasicComponent } from './example-components/NavigationMenus/navigation-menus-vertical-basic/navigation-menus-vertical-basic.component';
import { NotificationsToastrComponent } from './example-components/Notifications/notifications-toastr/notifications-toastr.component';
import { NotificationsToastsComponent } from './example-components/Notifications/notifications-toasts/notifications-toasts.component';
import { NotificationsAlertsBasicComponent } from './example-components/Notifications/notifications-alerts-basic/notifications-alerts-basic.component';
import { NotificationsAlertsDismissibleComponent } from './example-components/Notifications/notifications-alerts-dismissible/notifications-alerts-dismissible.component';
import { PaginationBasicComponent } from './example-components/Pagination/pagination-basic/pagination-basic.component';
import { PaginationSizingComponent } from './example-components/Pagination/pagination-sizing/pagination-sizing.component';
import { ProgressBarsBasicComponent } from './example-components/ProgressBars/progress-bars-basic/progress-bars-basic.component';
import { ProgressBarsAnimatedComponent } from './example-components/ProgressBars/progress-bars-animated/progress-bars-animated.component';
import { ProgressBarsLabelsComponent } from './example-components/ProgressBars/progress-bars-labels/progress-bars-labels.component';
import { ProgressBarsRoundedComponent } from './example-components/ProgressBars/progress-bars-rounded/progress-bars-rounded.component';
import { ProgressBarsColorsComponent } from './example-components/ProgressBars/progress-bars-colors/progress-bars-colors.component';
import { ProgressBarsMultipleComponent } from './example-components/ProgressBars/progress-bars-multiple/progress-bars-multiple.component';
import { ScrollableBasicComponent } from './example-components/Scrollable/scrollable-basic/scrollable-basic.component';
import { SearchBarsBasicComponent } from './example-components/SearchBars/search-bars-basic/search-bars-basic.component';
import { SearchBarsVariationOneComponent } from './example-components/SearchBars/search-bars-variation-one/search-bars-variation-one.component';
import { SearchBarsVariationTwoComponent } from './example-components/SearchBars/search-bars-variation-two/search-bars-variation-two.component';
import { SearchBarsVariationThreeComponent } from './example-components/SearchBars/search-bars-variation-three/search-bars-variation-three.component';
import { TabsBasicComponent } from './example-components/Tabs/tabs-basic/tabs-basic.component';
import { PopoversBasicComponent } from './example-components/Popovers/popovers-basic/popovers-basic.component';
import { TooltipsBasicComponent } from './example-components/Tooltips/tooltips-basic/tooltips-basic.component';
import { UtilitiesHelpersPrimaryColorsComponent } from './example-components/UtilitiesHelpers/utilities-helpers-primary-colors/utilities-helpers-primary-colors.component';
import { UtilitiesHelpersNeutralColorsComponent } from './example-components/UtilitiesHelpers/utilities-helpers-neutral-colors/utilities-helpers-neutral-colors.component';
import { UtilitiesHelpersBrandColorsComponent } from './example-components/UtilitiesHelpers/utilities-helpers-brand-colors/utilities-helpers-brand-colors.component';

// Example pages

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

import { PadronService } from './example-pages/dashboard-default/padron.service';
import { InterceptorService } from './example-pages/dashboard-default/padron.interceptor.service';
@NgModule({
	declarations: [
		AppComponent,

		// Layout components

		HeaderComponent,
		HeaderUserboxComponent,
		SidebarComponent,
		SidebarHeaderComponent,
		SidebarMenuComponent,
		PageTitleComponent,
		FooterComponent,
		PromoSectionComponent,
		ExampleWrapperSimpleComponent,
		ExampleWrapperSeamlessComponent,
		ExampleWrapperContainerComponent,

		// Layouts

		LeftSidebarComponent,
		PresentationLayoutComponent,

		// Example components

		DashboardDefaultSection1Component,
		DashboardDefaultSection2Component,
		DashboardDefaultSection3Component,
		DashboardDefaultSection4Component,
		AccordionsBasicComponent,
		AccordionsCollapseComponent,
		ApexChartsLineComponent,
		ApexChartsAreaComponent,
		ApexChartsColumnComponent,
		ApexChartsBarComponent,
		ApexChartsMixedComponent,
		ApexChartsHeatmapComponent,
		ApexChartsRadialbarComponent,
		ApexChartsRadarComponent,
		BadgesBasicComponent,
		BadgesPillsComponent,
		BadgesButtonsComponent,
		ButtonsBasicComponent,
		ButtonsGroupsComponent,
		ButtonsGroupsSizingComponent,
		ButtonsColorsComponent,
		ButtonsLinksComponent,
		ButtonsOutlineComponent,
		ButtonsSizingComponent,
		Cards1Examples1Component,
		Cards2Examples8Component,
		Cards4Examples23Component,
		Cards5Examples29Component,
		Cards7Examples48Component,
		Cards8Examples55Component,
		Cards9Examples56Component,
		Cards9Examples61Component,
		Cards11Examples70Component,
		Cards12Examples79Component,
		CarouselsBasicComponent,
		DropdownsBasicComponent,
		DropdownsSplitComponent,
		RegularTables1Example1Component,
		RegularTables4Example7Component,
		FormsControlsBasicComponent,
		FormsControlsInputGroupsComponent,
		FormsLayoutBasicComponent,
		FormsLayoutGridsComponent,
		FormsUploadDropzoneComponent,
		FormsValidationBasicComponent,
		IconsFontawesomeComponent,
		IconsSociconsComponent,
		ListGroupsBasicComponent,
		ListGroupsVariations4Component,
		ListGroupsVariations8Component,
		MapsGoogleMapsComponent,
		MapsLeafletComponent,
		ModalsBasicComponent,
		NavigationMenusHorizontalComponent,
		NavigationMenusVerticalBasicComponent,
		NotificationsToastrComponent,
		NotificationsToastsComponent,
		NotificationsAlertsBasicComponent,
		NotificationsAlertsDismissibleComponent,
		PaginationBasicComponent,
		PaginationSizingComponent,
		ProgressBarsBasicComponent,
		ProgressBarsAnimatedComponent,
		ProgressBarsLabelsComponent,
		ProgressBarsRoundedComponent,
		ProgressBarsColorsComponent,
		ProgressBarsMultipleComponent,
		ScrollableBasicComponent,
		SearchBarsBasicComponent,
		SearchBarsVariationOneComponent,
		SearchBarsVariationTwoComponent,
		SearchBarsVariationThreeComponent,
		TabsBasicComponent,
		PopoversBasicComponent,
		TooltipsBasicComponent,
		UtilitiesHelpersPrimaryColorsComponent,
		UtilitiesHelpersNeutralColorsComponent,
		UtilitiesHelpersBrandColorsComponent,

		// Example pages

		DashboardDefaultComponent,
		ButtonsComponent,
		DropdownsComponent,
		NavigationMenusComponent,
		ProgressBarsComponent,
		PaginationComponent,
		ScrollableComponent,
		BadgesComponent,
		IconsComponent,
		UtilitiesHelpersComponent,
		Cards3Component,
		ListGroupsComponent,
		LandingPageComponent,
		AccordionsComponent,
		ModalsComponent,
		NotificationsComponent,
		CarouselsComponent,
		PopoversComponent,
		TooltipsComponent,
		TabsComponent,
		RegularTables1Component,
		RegularTables4Component,
		FormsLayoutComponent,
		FormsControlsComponent,
		ApexChartsComponent,
		MapsComponent,

	],
	imports: [
		BrowserModule,
		CommonModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,

		ButtonsModule.forRoot(),
		CollapseModule.forRoot(),
		TimepickerModule.forRoot(),
		TypeaheadModule.forRoot(),
		CarouselModule.forRoot(),
		BsDropdownModule.forRoot(),
		BsDatepickerModule.forRoot(),
		ModalModule.forRoot(),
		PaginationModule.forRoot(),
		ProgressbarModule.forRoot(),
		TabsModule.forRoot(),
		PopoverModule.forRoot(),
		TooltipModule.forRoot(),
		AccordionModule.forRoot(),
		AlertModule.forRoot(),
		NgApexchartsModule,
		PerfectScrollbarModule,
		DropzoneModule,
		ChartsModule,
		FontAwesomeModule,
		NgProgressModule,
		NgProgressRouterModule,
		AgmCoreModule.forRoot({ apiKey: 'AIzaSyCoVRykl39EigHTQ0wnI0ISVGR3zpV4dDM' }),
		NotifierModule.withConfig(customNotifierOptions),
		LeafletModule.forRoot(),
	],
	providers: [
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		},
		{
			provide: DROPZONE_CONFIG,
			useValue: DEFAULT_DROPZONE_CONFIG
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: InterceptorService,
			multi: true
		},
		ThemeOptions,
		PadronService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(library: FaIconLibrary) {
		library.addIcons(faFacebook, faPrint, faAlignCenter, faMapMarkerAlt, faTachometerAlt, faExternalLinkAlt, faShareSquare, faSitemap, faInfoCircle, faLifeRing, faTwitter, faQuoteRight, faStarHalfAlt, faSync, faShapes, faCarBattery, faTable, faCubes, faPager, faAngular, faVuejs, faReact, faHtml5, faCheckCircle, faTimesCircle, faBomb, faNetworkWired, faBusAlt, faBirthdayCake, faEyeDropper, faThumbsUp, faCameraRetro, faUnlockAlt, faDownload, faUpload, faReply, faGoogle, faFileImage, faFolderOpen, faBars, faTrashAlt, faSave, faPlayCircle, faEllipsisV, faEllipsisH, faSlidersH, faFileArchive, faAward, faCaretRight, faInstagram, faPinterest, faYoutube, faDiscord, faSlack, faDribbble, faGithub, faPlus, faFolder, faTimes, faEnvelope, faAddressCard, faMap, faCalendarAlt, faImages, faFilm, faClock, faSearch, faChevronRight, faChevronUp, faChevronLeft, faChevronDown, faLink, faLightbulb, faGem, faCog, faDotCircle, faArrowsAltH, faComments, faCommentDots, faKeyboard, faObjectGroup, faUser, faUserCircle, faQuestionCircle, faBuilding, faBell, faFileExcel, faFileAudio, faFileVideo, faFileWord, faFilePdf, faFileCode, faFileAlt, faEye, faChartBar, faPlusCircle, faAngleRight, faAngleUp, faAngleLeft, faAngleDown, faArrowUp, faArrowDown, faArrowRight, faArrowLeft, faStar, faSignOutAlt, faLemon, faSpinner);
	}
}
