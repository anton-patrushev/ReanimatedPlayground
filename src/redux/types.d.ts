import {store} from './store';
import {TypedUseSelectorHook} from 'react-redux';

declare global {
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>;
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch;
}

declare module 'react-redux' {
  export const useSelector: TypedUseSelectorHook<RootState>;
}
