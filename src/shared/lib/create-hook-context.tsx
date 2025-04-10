import { PropsWithChildren, ReactElement } from "react";
import { createStrictContext } from "@/shared/lib/create-strict-context";

export const createHookContext = <T,>(hook: Func<[], T>) => {
  const Context = createStrictContext<T>();

  const Provider = ({ children }: PropsWithChildren) => {
    const value = hook();

    return (
      <Context.Provider value={value}>
        {children as ReactElement}
      </Context.Provider>
    );
  };

  return {
    Provider,
    use: Context.use,
  };
};
