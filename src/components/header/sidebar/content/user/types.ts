import type { User } from "firebase/auth";

export type UserContentProps = {
  user: User;
  signOut: () => void;
};
