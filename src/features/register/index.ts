import { createStrictContext } from "@/shared/lib/create-strict-context";
import { IRegiserService } from "@/features/register/domain/register.types";
import { createHookContext } from "@/shared/lib/create-hook-context";
import { useRegisterState } from "@/features/register/model/use-register-state";

export { RegisterForm } from "./compose/register-form";
export { RegisterMenuButton } from "./ui/register-menu-button/register-menu-button";

export { Service } from "./api/service";

export const RegisterService = createStrictContext<IRegiserService>();

export const RegisterState = createHookContext(useRegisterState);
