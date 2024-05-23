import React from 'react';
import { Button, Input, VStack } from '@chakra-ui/react';

const CSVUploader = ({ onUpload }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        onUpload(text);
      };
      reader.readAsText(file);
    }
  };

  return (
    <VStack spacing={4}>
      <Input type="file" accept=".csv" onChange={handleFileUpload} />
      <Button onClick={() => document.querySelector('input[type="file"]').click()}>Upload CSV</Button>
    </VStack>
  );
};

export default CSVUploader;