import React from 'react';
import { Button } from '@chakra-ui/react';
import { CSVLink } from 'react-csv';

const DownloadButton = ({ data }) => {
  const headers = data[0] ? data[0].map((_, index) => ({ label: `Column ${index + 1}`, key: index })) : [];

  return (
    <Button colorScheme="teal">
      <CSVLink data={data} headers={headers} filename="edited_data.csv">
        Download CSV
      </CSVLink>
    </Button>
  );
};

export default DownloadButton;