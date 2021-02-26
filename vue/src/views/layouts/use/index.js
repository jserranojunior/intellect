import { reactive, toRefs } from "vue";
import { inject } from "vue";

export const useLayouts = () => {
  const useAuth = inject("auth");
  const { ola } = useAuth;
  console.log(ola.value, " a partir do outro use");
  const state = reactive({
    closeSidebar,
    open: false,
  });
  function closeSidebar() {
    const Sidebar = document.getElementById("sidebar");
    Sidebar.classList.toggle("hidden");
  }
  return toRefs(state);
};
