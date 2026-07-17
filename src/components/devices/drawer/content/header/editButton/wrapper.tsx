import { BackdropProvider } from "@/providers";

import { EditButton } from "./EditButton";

export function EditButtonWrapper() {
  return (
    <BackdropProvider value={{ id: "deviceModal" }}>
      <EditButton />
    </BackdropProvider>
  );
}
