import { reactive } from "vue";
import { useAuth } from "../../mods/auth/composables/useAuth";
import { useRouter } from "vue-router";
import { useRegister } from "../../mods/register/composables/useRegister";

export default function useStore() {
  let auth = reactive(useAuth());
  let router = reactive(useRouter());
  let register = reactive(useRegister());

  return { register, auth, router };
}
