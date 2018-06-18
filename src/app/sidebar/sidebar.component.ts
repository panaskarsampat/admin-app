import { Component, OnInit } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    hasSubMenu: boolean;
    SubMenus:RouteInfo[];
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'glyphicon glyphicon-home', class: 'list-group-item', hasSubMenu:false,SubMenus:[] },
    { path: 'master', title: 'Master',  icon: 'glyphicon glyphicon-certificate', class: 'list-group-item', hasSubMenu:true,
      SubMenus: [
        { path: 'usermaster', title: 'User Master',  icon: 'glyphicon glyphicon-user', class: 'list-group-item', hasSubMenu:false,SubMenus:[] },
        { path: 'citymaster', title: 'City Master',  icon: 'fa  fa-map-marker', class: 'list-group-item', hasSubMenu:false,SubMenus:[] },
        { path: 'statemaster', title: 'State Master',  icon: 'fa fa-flag', class: 'list-group-item', hasSubMenu:false,SubMenus:[] },
        { path: 'countrymaster', title: 'Country Master',  icon: 'fa fa-globe', class: 'list-group-item', hasSubMenu:false,SubMenus:[] },
        { path: 'companymaster', title: 'Company Master',  icon: 'fa fa-building', class: 'list-group-item', hasSubMenu:false,SubMenus:[] },
        { path: 'rolemaster', title: 'Role Master',  icon: 'fa fa-wrench', class: 'list-group-item', hasSubMenu:false,SubMenus:[] },
        { path: 'departmentmaster', title: 'Department Master',  icon: 'fa fa-tasks', class: 'list-group-item', hasSubMenu:false,SubMenus:[] },
        { path: 'designationmaster', title: 'Designation Master',  icon: 'fa fa-tags', class: 'list-group-item', hasSubMenu:false,SubMenus:[] },
        { path: 'educationmaster', title: 'Education Master',  icon: 'fa fa-university', class: 'list-group-item', hasSubMenu:false,SubMenus:[] },
         
      
        // { path: 'forms', title: 'Forms',  icon: 'glyphicon glyphicon-list-alt', class: 'list-group-item' , hasSubMenu:false,SubMenus:[] },
        // { path: 'alerts', title: 'Alerts',  icon: 'glyphicon glyphicon-bell', class: 'list-group-item' , hasSubMenu:false,SubMenus:[] },
        // { path: 'timeline', title: 'Timeline',  icon: 'glyphicon glyphicon-indent-left', class: 'list-group-item' , hasSubMenu:false,SubMenus:[] },
        // { path: 'calendars', title: 'Calendars',  icon: 'glyphicon glyphicon-calendar', class: 'list-group-item' , hasSubMenu:false,SubMenus:[] },
        // { path: 'typography', title: 'Typography',  icon: 'glyphicon glyphicon-font', class: 'list-group-item' , hasSubMenu:false,SubMenus:[] },
        // { path: 'footers', title: 'Footers',  icon: 'glyphicon glyphicon-minus', class: 'list-group-item' , hasSubMenu:false,SubMenus:[] },
        // { path: 'panels', title: 'Panels',  icon: 'glyphicon glyphicon-list-alt', class: 'list-group-item' , hasSubMenu:false,SubMenus:[] },
        // { path: 'navs', title: 'Navs',  icon: 'glyphicon glyphicon-th-list', class: 'list-group-item' , hasSubMenu:false,SubMenus:[] },
        // { path: 'colors', title: 'Colors',  icon: 'glyphicon glyphicon-tint', class: 'list-group-item' , hasSubMenu:false,SubMenus:[] },
        // { path: 'flex', title: 'Flex',  icon: 'glyphicon glyphicon-th', class: 'list-group-item' , hasSubMenu:false,SubMenus:[] },
        // { path: 'login', title: 'Login',  icon: 'glyphicon glyphicon-lock', class: 'list-group-item' , hasSubMenu:false,SubMenus:[] },
    ]},
];

        
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
