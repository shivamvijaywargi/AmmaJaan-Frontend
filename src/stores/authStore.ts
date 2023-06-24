import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const $LOCAL_LOGGEDIN_KEY = 'ammajaan_logged_in';

interface IUserData {
  accessToken: string;
  role: number;
}

interface IStore {
  authUser: IUserData | null;
  requestLoading: boolean;
  setAuthUser: (user: IUserData | null) => void;
  setRequestLoading: (isLoading: boolean) => void;
}

// const useStore = create<IStore>((set) => ({
//   authUser: null,
//   requestLoading: false,
//   setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
//   setRequestLoading: (isLoading) =>
//     set((state) => ({ ...state, requestLoading: isLoading })),
// }));

// export default useStore;

const useAuthStore = create<IStore>()(
  persist(
    (set, get) => ({
      authUser: null,
      requestLoading: false,
      setAuthUser(user) {
        set((state) => ({ ...state, authUser: user }));
      },
      setRequestLoading(isLoading) {
        set((state) => ({ ...state, requestLoading: isLoading }));
      },
    }),
    { name: $LOCAL_LOGGEDIN_KEY }
  )
);

// Selector function to retrieve the accessToken
export const useAccessToken = () => {
  const accessToken = useAuthStore((state) => state.authUser?.accessToken);

  // Check if accessToken is not available in the store, get it from localStorage
  if (!accessToken) {
    const storedAccessToken = localStorage.getItem('auth-storage.accessToken');
    return storedAccessToken || null;
  }

  return accessToken;
};

export default useAuthStore;
