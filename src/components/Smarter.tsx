import React from 'react';
import CardTwo from './shared/CardTwo';

function Smarter() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="text-center  mb-16">
        <h1 className="font-bold text-6xl">
          Spend smarter at every stage of growth.
        </h1>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-5 max-w-7xl mx-auto">
        <CardTwo
          title="Startups"
          content="Spend smarter worldwide with AI-powered budgets, expenses, payments, and travel."
          image="/startups.webp"
        />
        <CardTwo
          title="Expense management"
          content="Use AI to automate approvals and expense reports. Track in real time."
          image="/midsize.webp"
        />
        <CardTwo
          title="Mid-size companies "
          content="Simplify global travel and expenses with automation that makes compliance easy."
          image="/startups.webp"
        />
      </div>
    </div>
  );
}

export default Smarter;
