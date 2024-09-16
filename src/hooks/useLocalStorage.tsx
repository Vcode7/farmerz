"use client";
import { useEffect, useState } from "react";

type SetValue<T> = T | ((val: T) => T);

function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: SetValue<T>) => void] {
  // Initialize state with the initial value
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // useEffect to run only on the client (avoiding SSR issues)
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        // Get from local storage by key (only on the client side)
        const item = window.localStorage.getItem(key);
        // If item exists in localStorage, update the state with parsed value
        if (item) {
          setStoredValue(JSON.parse(item));
        }
      }
    } catch (error) {
      console.error("Error reading from localStorage", error);
    }
  }, [key]); // Dependency array ensures this runs once on mount

  // Function to update localStorage and state
  const setValue = (value: SetValue<T>) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Update the state
      setStoredValue(valueToStore);

      // Save the new value to localStorage (browser only)
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error("Error setting localStorage", error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
