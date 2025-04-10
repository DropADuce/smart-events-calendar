"use client";

import {
  ComponentType,
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
} from "react";

interface IStrictContext<T> {
  Provider: ComponentType<{ value: T; children: ReactElement }>;
  use: Func<[], T>;
}

export const createStrictContext = <T,>(): IStrictContext<T> => {
  const Context = createContext<T | null>(null);

  const useStrictContext = (): T => {
    const context = useContext<T | null>(Context);

    if (!context) {
      throw new Error("Провайдер не предоставлен");
    }

    return context;
  };

  const Provider = ({
    value,
    children,
  }: PropsWithChildren<{ value: T }>): ReactElement => {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return {
    Provider,
    use: useStrictContext,
  };
};
