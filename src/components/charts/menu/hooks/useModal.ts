import { useBackdropContext } from "@/providers";

export function useModal() {
  const { opened, toggle } = useBackdropContext();

  return {
    isModalOpened: opened,
    toggleModal: toggle,
  };
}
