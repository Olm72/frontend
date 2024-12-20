import React, { useState, useEffect, startTransition } from 'react';
import { Suspense } from 'react';

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Datos cargados");
    }, 2000);
  });
}

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    startTransition(() => {
      fetchData().then(result => {
        setData(result);
      });
    });
  }, []);

  if (!data) {
    throw new Promise(resolve => {
      setTimeout(() => resolve(), 2000);
    });
  }

  return <div>{data}</div>;
}

export default ExampleComponent;