import { useState } from 'react';

export const useFaqAccordion = () => {
  const [activeFaqItems, setActiveFaqItems] = useState<string[]>([]);

  const toggleFaqItem = (id: string) => {
    if (activeFaqItems.includes(id)) {
      setActiveFaqItems(activeFaqItems.filter(item => item !== id));
    } else {
      setActiveFaqItems([...activeFaqItems, id]);
    }
  };

  return {
    activeFaqItems,
    toggleFaqItem
  };
};