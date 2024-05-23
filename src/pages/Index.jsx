import React, { useState } from 'react';
import { Container, VStack, Heading } from '@chakra-ui/react';
import CSVUploader from '../components/CSVUploader';
import DataTable from '../components/DataTable';
import DownloadButton from '../components/DownloadButton';
import Papa from 'papaparse';

const Index = () => {
  const [data, setData] = useState([]);

  const handleUpload = (csvText) => {
    const parsedData = Papa.parse(csvText, { header: false }).data;
    setData(parsedData);
  };

  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl" color="teal.300">CSV Uploader</Heading>
        <CSVUploader onUpload={handleUpload} />
        {data.length > 0 && <DataTable data={data} setData={setData} />}
        {data.length > 0 && <DownloadButton data={data} />}
      </VStack>
    </Container>
  );
};

export default Index;