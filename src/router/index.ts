import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AuthViewVue from "@/views/Auth/AuthView.vue";
import ProjectView from "@/views/Project/ProjectView.vue";
import ProjectsViewVue from "@/views/Project/ProjectsView.vue";
import InitProjectViewVue from "@/views/Project/InitProjectView.vue";
import ProjectSettingViewVue from "@/views/Project/ProjectSettingView.vue";
import ProjectRepoViewVue from "@/views/Project/ProjectRepoView.vue";
import ProjectDocViewVue from "@/views/Project/ProjectDocView.vue";
import kanbanVue from "@/views/Project/Kanban.vue";
import PersonalSettingsViewVue from "@/views/Setting/PersonalSettingsView.vue";
import QAViewVue from "@/views/QAView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/sign-:mode(in|up|forgot)",
      name: "auth",
      component: AuthViewVue,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "/",
          name: "projects",
          component: ProjectsViewVue,
        },
        {
          path: "/init-project",
          name: "init-project",
          component: InitProjectViewVue,
        },
        {
          path: "/settings",
          name: "settings",
          component: PersonalSettingsViewVue,
        },
        {
          path: "/QA",
          name: "QA",
          component: QAViewVue,
        },
        {
          path: "/project",
          name: "project",
          component: ProjectView,
          children: [
            {
              path: "",
              name: "repositories",
              component: ProjectRepoViewVue,
            },
            {
              path: "documents",
              name: "documents",
              component: ProjectDocViewVue,
            },
            {
              path: "kanban",
              name: "kanban",
              component: kanbanVue,
            },
            {
              path: "setting",
              name: "setting",
              component: ProjectSettingViewVue,
            },
          ],
        },
      ],
    },
  ],
});

export default router;
