import React from 'react';
import Card from './shared/Card';

function Smarter() {
  return (
    <div className="min-h-screen my-20">
      <div className="text-center  mb-10">
        <h1 className="font-bold text-5xl">
          Spend smarter at every stage of growth.
        </h1>
      </div>
      <div className="flex items-center justify-center gap-3 p-5">
        <Card
          title="Corporate cards"
          content="Spend smart globally with powerful cards and built-in controls."
          image="/card.webp"
        />
        <Card
          title="Expense management"
          content="Use AI to automate approvals and expense reports. Track in real time."
          image="/expense.webp"
        />
        <Card
          title="Corporate cards"
          content="Spend smart globally with powerful cards and built-in controls."
          image="/card.webp"
        />
      </div>
    </div>
  );
}

export default Smarter;
