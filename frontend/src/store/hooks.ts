// Importing useDispatch and useSelector from react-redux.
// Also importing types for proper TypeScript support.
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Custom hook to get the dispatch function from Redux.
// This ensures type safety when dispatching actions.
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 