'use client';
import { useState } from 'react';
import { findHighestPrimeBetween } from '../utils/primes';
import OperationSelector from './OperationSelector';

const InputFields = ({
  onAddEntry,
}: {
  onAddEntry: (entry: HistoryEntry) => void;
}) => {
  const [operandA, setOperandA] = useState('0');
  const [operandB, setOperandB] = useState('0');
  const [selectedOperation, setSelectedOperation] = useState('+');

  const handleCalculate = (event: React.FormEvent) => {
    event.preventDefault();
    if (operandA === '' || operandB === '') {
      alert('Operands can not be empty!');
      return;
    }

    const firstOperand = parseFloat(operandA);
    const secondOperand = parseFloat(operandB);

    let result: string | number = '';
    switch (selectedOperation) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '/':
        if (secondOperand === 0) {
          result = '∞';
        } else {
          result = parseFloat((firstOperand / secondOperand).toFixed(3));
        }
        break;
      case '%':
        // Modulo calculation might be inaccurate with floats due to how JS works
        result = parseFloat((firstOperand % secondOperand).toFixed(3));
        break;
      case 'prime':
        // Compares both numbers for whichever is highest and returns prime closest to that
        result = findHighestPrimeBetween(firstOperand, secondOperand);
        break;
      default:
        break;
    }

    const historyEntry: HistoryEntry = {
      operandA: firstOperand,
      operandB: secondOperand,
      operation: selectedOperation,
      result: result === '' ? 'Not available' : result,
    };

    onAddEntry(historyEntry);
  };

  return (
    <form onSubmit={handleCalculate} className="w-full m-4">
      <div className="flex gap-4 justify-center">
        <input
          type="number"
          step="any"
          className="text-sm p-1 rounded-md"
          value={operandA}
          onChange={(e) => setOperandA(e.target.value)}
        />
        <OperationSelector
          selectedOperation={selectedOperation}
          onSelect={setSelectedOperation}
        />
        <input
          type="number"
          step="any"
          value={operandB}
          className="text-sm p-1 rounded-md"
          onChange={(e) => setOperandB(e.target.value)}
        />
        <button className="bg-blue-400 pl-4 pr-4 rounded-lg">Calculate</button>
      </div>
    </form>
  );
};

export default InputFields;
