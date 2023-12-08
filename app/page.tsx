'use client';

import { useState } from 'react';
import Header from './components/Header';
import InputFields from './components/InputFields';
import Table from './components/Table';

export default function Home() {
  const [historyData, setHistoryData] = useState<HistoryEntry[]>([]);

  const addEntry = (entry: HistoryEntry) => {
    setHistoryData((prevHistory) => [...prevHistory, entry]);
  };

  return (
    <main className="flex min-h-[calc(100vh-2rem)] flex-col items-center">
      <Header />
      <InputFields onAddEntry={addEntry} />
      <Table history={historyData} />
    </main>
  );
}
