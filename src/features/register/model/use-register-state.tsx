import { useState } from "react";

export interface IUseRegisterState {
  isFormOpen: boolean;
  setIsFormOpen: Func<[isOpen: boolean]>;
}

export const useRegisterState = (): IUseRegisterState => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return {
    isFormOpen,
    setIsFormOpen,
  };
};
