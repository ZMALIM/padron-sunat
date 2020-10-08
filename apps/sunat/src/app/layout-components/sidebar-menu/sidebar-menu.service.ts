import { Injectable } from '@angular/core';

interface MenuItem {
	title: string;
	type: string;
	badge?: {
		class: string;
		text: string;
	};
	link?: string;
	active?: boolean;
	icon?: string;
	submenus?: MenuItem[];
}

@Injectable({
	providedIn: 'root'
})
export class SidebarMenuService {

	menus: MenuItem[] = [
		{
			"title": "Navigation menu",
			"type": "header"
		},
		{
			"title": "Dashboards",
			"type": "dropdown",
			"icon": "<i class=\"pe-7s-safe\"> </i>",
			"submenus": [
				{
					"title": "Default",
					"type": "simple",
					"link": "/dashboard-default"
				}
			]
		},
	];

	constructor() { }

	getMenuList() {
		return this.menus;
	}

	getMenuItemByUrl(aMenus: MenuItem[], aUrl: string): MenuItem {
		for (const theMenu of aMenus) {
			if (theMenu.link && theMenu.link === aUrl) {
				return theMenu;
			}

			if (theMenu.submenus && theMenu.submenus.length > 0) {
				const foundItem = this.getMenuItemByUrl(theMenu.submenus, aUrl);
				if (foundItem) {
					return foundItem;
				}
			}
		}

		return undefined;
	}

	toggleMenuItem(aMenus: MenuItem[], aCurrentMenu: MenuItem): MenuItem[] {
		return aMenus.map((aMenu: MenuItem) => {
			if (aMenu === aCurrentMenu) {
				aMenu.active = !aMenu.active;
			} else {
				aMenu.active = false;
			}

			if (aMenu.submenus && aMenu.submenus.length > 0) {
				aMenu.submenus = this.toggleMenuItem(aMenu.submenus, aCurrentMenu);

				if (aMenu.submenus.find(aChild => aChild.active)) {
					aMenu.active = true;
				}
			}

			return aMenu;
		});
	}
}
