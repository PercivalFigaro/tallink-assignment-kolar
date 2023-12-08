'use client';

const operations = ['+', '/', '%', 'prime'];

const OperationSelector = ({
  selectedOperation,
  onSelect,
}: {
  selectedOperation: string;
  onSelect: (operation: string) => void;
}) => {
  return (
    <select
      name="operations"
      id="operations"
      className="p-1 rounded-md"
      value={selectedOperation}
      onChange={(e) => onSelect(e.target.value)}
    >
      {operations.map((operation) => (
        <option key={operation} value={operation}>
          {operation}
        </option>
      ))}
    </select>
  );
};

export default OperationSelector;
