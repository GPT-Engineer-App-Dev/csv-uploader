import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Input } from '@chakra-ui/react';

const DataTable = ({ data, setData }) => {
  const handleCellChange = (rowIndex, columnIndex, value) => {
    const newData = [...data];
    newData[rowIndex][columnIndex] = value;
    setData(newData);
  };

  return (
    <Table variant="simple" colorScheme="teal">
      <Thead>
        <Tr>
          {data[0] && data[0].map((_, index) => <Th key={index}>Column {index + 1}</Th>)}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {row.map((cell, columnIndex) => (
              <Td key={columnIndex}>
                <Input
                  value={cell}
                  onChange={(e) => handleCellChange(rowIndex, columnIndex, e.target.value)}
                />
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default DataTable;