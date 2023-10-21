import { useDispatch } from 'react-redux';

import { AppDispatch } from './store.ts';

type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;