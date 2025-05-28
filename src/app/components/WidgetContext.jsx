'use client'; 

import { createContext, useContext, useState } from 'react';

const WidgetContext = createContext(); 

export function WidgetProvider({ children }) {
  const initialSlots = Array(10).fill(null); 
  const [widgets, setWidgets] = useState(initialSlots); 

  function setWidget(slotIndex, widget) {
    setWidgets(prev => {
      const updated = [...prev];
      updated[slotIndex] = widget; 
      return updated;
    });
  }

  function removeWidget(slotIndex) {
    setWidgets(prev => {
      const updated = [...prev];
      updated[slotIndex] = null; 
      return updated;
    });
  }

  return (
    <WidgetContext.Provider value={{ widgets, setWidget, removeWidget }}>
      {children} 
    </WidgetContext.Provider>
  );
}

export function useWidgets() {
  return useContext(WidgetContext); 
}
