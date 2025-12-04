import React from 'react';

interface FieldMappingPageProps {
  data: Record<string, any>;
}

const FieldMappingPage: React.FC<FieldMappingPageProps> = ({ data }) => {
  return (
    <div>
      <h1>Field Mapping Page</h1>
      <ul>
        {Object.keys(data).map((key) => (
          <li key={key}>
            <strong>{key}</strong>: {JSON.stringify(data[key], null, 2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FieldMappingPage;