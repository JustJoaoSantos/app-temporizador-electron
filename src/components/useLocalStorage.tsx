import { useState, useEffect } from "react";

export function getLocalStorage(key: string, defaultValue: any) {
    // Ler valor armazenado
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
}


export const useLocalStorage = (key: string, defaultValue: any) => {
    const [value, setValue] = useState(() => {
        return getLocalStorage(key, defaultValue);
    });

    // Armazena valor inserido quando á mudancas a variavel
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
