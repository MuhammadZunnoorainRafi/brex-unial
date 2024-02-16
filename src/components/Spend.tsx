import Card from './shared/Card';

function Spend() {
  return (
    <div className="min-h-screen my-20">
      <div className="text-center space-y-4 mb-10">
        <h1 className="font-bold text-5xl">All your spend. One platform.</h1>
        <p className="font-semibold text-xl text-gray-600">
          Everything you need to control spend before it happens and empower
          teams confidently.
        </p>
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
        <Card
          title="Corporate cards"
          content="Spend smart globally with powerful cards and built-in controls."
          image="/card.webp"
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

export default Spend;
