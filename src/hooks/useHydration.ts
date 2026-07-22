import { startTransition, useEffect, useRef } from "react";

type UseHydrationProps<T> = {
  data: T;
  read: () => T;
  write: (data: T) => void;
  dispatch: (action: { type: "SET"; payload: T }) => void;
};

export function useHydration<T>({ data, read, write, dispatch }: UseHydrationProps<T>) {
  const isHydrated = useRef(false);

  useEffect(() => {
    const data = read();

    startTransition(() => {
      dispatch({ type: "SET", payload: data });
    });
  }, [dispatch, read]);

  useEffect(() => {
    if (!isHydrated.current) {
      isHydrated.current = true;
      return;
    }

    write(data);
  }, [data, write]);
}
