import HomeView from "../views/HomeView.vue";
import type { RouteRecordRaw } from "vue-router";
import ServicesView from "../views/ServicesView.vue";
import GarageView from "../views/GarageView.vue";
import SettingsView from "../views/SettingsView.vue";
import VehicleView from "../views/VehicleView.vue";

export default [
  {
    path: "/vehicles",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/vehicles/:id",
    name: "Vehicle",
    component: VehicleView,
  },
  {
    path: "/services",
    name: "Services",
    component: ServicesView,
  },
  {
    path: "/garage",
    name: "Garage",
    component: GarageView,
  },
  {
    path: "/settings",
    name: "Settings",
    component: SettingsView,
  },
] as RouteRecordRaw[];
