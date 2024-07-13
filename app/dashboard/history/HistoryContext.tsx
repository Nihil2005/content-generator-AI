'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface HistoryContextType {
    history: string[];
    addHistory: (script: string) => void;
}

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export const HistoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [history, setHistory] = useState<string[]>([]);

    const addHistory = (script: string) => {
        setHistory(prevHistory => [...prevHistory, script]);
    };

    return (
        <HistoryContext.Provider value={{ history, addHistory }}>
            {children}
        </HistoryContext.Provider>
    );
};

export const useHistory = () => {
    const context = useContext(HistoryContext);
    if (!context) {
        throw new Error('useHistory must be used within a HistoryProvider');
    }
    return context;
};
