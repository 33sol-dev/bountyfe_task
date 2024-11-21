// src/components/Companies.js

import React, { useEffect, useState } from 'react';

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Mock fetching companies
    console.log('Mock: Fetching companies');
    setCompanies([
      { id: 1, name: 'Brand A' },
      { id: 2, name: 'Community B' },
    ]);
  }, []);

  return (
    <div>
      <h2>Companies/Communities</h2>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Companies;
