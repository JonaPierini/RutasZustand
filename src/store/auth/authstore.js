import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthorizationStore = create(
  persist(
    (set) => ({
      loginStatus: "unAuthorized",
      setLoginStatus: (status) => {
        set({ loginStatus: status });
      },
    }),
    {
      name: "authorization-store", // Nombre de la clave bajo la cual se almacenan los datos
      getStorage: () => localStorage, // Almacenamiento en localStorage
    }
  )
);
