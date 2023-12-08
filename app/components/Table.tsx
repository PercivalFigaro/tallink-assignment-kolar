const HistoryTable = ({ history }: { history: HistoryEntry[] }) => {
  const headers = ['Operand A', 'Operation', 'Operand B', 'Result'];

  return (
    <div className="m-4 rounded-lg overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-900 uppercase bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th className="py-3 px-6" key={index}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {history && history.length === 0 && (
            <tr className="bg-white border-b">
              <td className="py-4 px-6 text-center" colSpan={4}>
                No entries!
              </td>
            </tr>
          )}
          {history.map((entry, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="py-4 px-6">{entry.operandA}</td>
              <td className="py-4 px-6">{entry.operation}</td>
              <td className="py-4 px-6">{entry.operandB}</td>
              <td className="py-4 px-6">{entry.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
