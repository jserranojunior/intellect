import { reactive } from "vue";
import { useAuth } from "../../mods/auth/composables/useAuth";
import { useRouter } from "vue-router";

export default function useStore() {
  let auth = reactive(useAuth());
  let router = reactive(useRouter());
  return { auth, router };
}
