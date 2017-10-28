<template>
  <div class="sidebar">
    <SidebarHeader/>
    <nav class="sidebar-nav">
      <div slot="header"></div>
      <ul class="nav">
        <template v-for="(item, index) in navItems">
            <template v-if="item.children">
              <!-- First level dropdown -->
              <SidebarNavDropdown  v-bind:key="'SidebarNavDropdown'+item.name+index" :name="item.name" :url="item.url" :icon="item.icon">
                <template v-for="(childL1, index) in item.children">
                  <template v-if="childL1.children">
                    <!-- Second level dropdown -->
                    <SidebarNavDropdown v-bind:key="'SidebarNavDropdown'+childL1.name+index" :name="childL1.name" :url="childL1.url" :icon="childL1.icon">
                      <li v-bind:key="'li'+childL2.name+index" class="nav-item" v-for="(childL2, index) in childL1.children">
                        <SidebarNavLink :name="childL2.name" :url="childL2.url" :icon="childL2.icon" :badge="childL2.badge" :variant="item.variant"/>
                      </li>
                    </SidebarNavDropdown>
                  </template>
                  <template v-else>
                    <SidebarNavItem v-bind:key="'SidebarNavItem'+childL1.name+index" :classes="item.class">
                      <SidebarNavLink :name="childL1.name" :url="childL1.url" :icon="childL1.icon" :badge="childL1.badge" :variant="item.variant"/>
                    </SidebarNavItem>
                  </template>
                </template>
              </SidebarNavDropdown>
            </template>
            <template v-else>           
              <SidebarNavItem v-bind:key="'SidebarNavItem'+item.name+index" :classes="item.class">
                <SidebarNavLink :name="item.name" :url="item.url" :icon="item.icon" :badge="item.badge" :variant="item.variant"/>
              </SidebarNavItem>
            </template>
          </template>
   
      </ul>
      <slot></slot>
    </nav>
    <SidebarFooter/>
    <SidebarMinimizer/>
  </div>
</template>
<script>
import SidebarFooter from './SidebarFooter'
import SidebarHeader from './SidebarHeader'
import SidebarMinimizer from './SidebarMinimizer'
import SidebarNavDropdown from './SidebarNavDropdown'
import SidebarNavLink from './SidebarNavLink'
import SidebarNavTitle from './SidebarNavTitle'
import SidebarNavItem from './SidebarNavItem'
export default {
  name: 'sidebar',
  props: {
    navItems: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: {
    SidebarFooter,
    SidebarHeader,
    SidebarMinimizer,
    SidebarNavDropdown,
    SidebarNavLink,
    SidebarNavTitle,
    SidebarNavItem
  },
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>

<style lang="css">
  .nav-link {
    cursor:pointer;
  }
  .nav-item.nav-dropdown.open
  {
    background-color: #019875 !important;
  }
  .nav-item.nav-dropdown.open > div.nav-link.nav-dropdown-toggle
  {
    background-color: #1BA39C !important;
  }
  .sidebar .nav-dropdown-toggle::before
  {
    width: 15px !important;
    height: 15px !important;
    padding: 15px !important;
  }
</style>
