<template>
    <div class="app">
    <AppHeader/>
    <div class="app-body">
      <Sidebar :navItems="itemsSideBar"/>
      <main class="main">
        <div class="container-fluid">
            <nuxt/>         
        </div>
      </main>
      <AppAside/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "~/css/Font-Awesome/css/font-awesome.min.css";

import AppHeader from "~/components/Core-Ui/components/Header";
import Sidebar from "~/components/Core-Ui/components/Sidebar";
import AppAside from "~/components/Core-Ui/components/Aside";
import AppFooter from "~/components/Core-Ui/components/Footer";
import Breadcrumb from "~/components/Core-Ui/components/Breadcrumb";

export default {
  name: "global",
  components: {
    Sidebar,
    AppHeader,
    AppAside,
    AppFooter,
    Breadcrumb
  },
  data() {
    return {
      itemsSideBar: [
        {
          classes: "bg-primary",
          name: "Inventario",
          icon: "fa fa-pencil",
          children: [
            {
              name: "Items",
              url: "/inventario/items",
              icon: "fa ",
              children: false
            },
            {
              name: "Bodegas",
              url: "/inventario/bodegas",
              icon: "fa ",
              children: false
            },
            {
              name: "Herramientas",
              url: "/herramientas",
              icon: "fa ",
              children: false
            }
          ]
        },
        {
          classes: "bg-primary",
          name: "Parametros",
          icon: "fa fa-cogs",
          url: "/parametros"
        }
      ]
    };
  }
};
</script>

<style>
.nuxt-link-exact-active.nuxt-link-active {
  background-color: #20a8d8 !important;
}
</style>