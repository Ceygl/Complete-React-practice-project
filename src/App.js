import Header from './components/Header';
import Table from './components/TableComp/Table';
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState(null);

  const calculateHandler = (formData) => {
    setFormData(formData);
  };

  const yearlyData = [];

  if (formData){
    let currentSavings = +formData["current-savings"];
    const yearlyContribution = +formData["yearly-contribution"];
    const expectedReturn = +formData["expected-return"] / 100;
    const duration = +formData["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
  };

  
  };

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} />
      {!formData && <p>No investment found to calculate!</p>}
      {formData && <Table data={yearlyData} initialInvestment={formData['current-savings']}/>}
    </div>
  );
};

export default App;
