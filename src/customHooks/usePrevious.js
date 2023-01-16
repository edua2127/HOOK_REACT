import { useRef, useEffect, useDebugValue } from 'react';

export const usePrevious = (value) => {
  const ref = useRef();

  useDebugValue("--- USE PREVIOUS ---")
  useDebugValue("Value: " + value)

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}