import { useEffect, useState } from "react";

function getStorageValue(key, defaultValue) {
    // getting stored value
    if (typeof window !== "undefined") {
        const saved = localStorage.getItem(key);
        return saved !== null ? JSON.parse( saved ) : defaultValue;
    }
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};