export type BackdropContextType = {
  push: (id: string) => void;
  pop: (id: string) => void;
  isOpen: (id: string) => boolean;
};
