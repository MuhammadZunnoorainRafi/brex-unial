'use client';
import React from 'react';
import CardTwo from './shared/CardTwo';
import Slider from 'react-slick';

function Carousal() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="text-center  mb-16">
        <h1 className="font-bold text-6xl">
          Insights on AI-powered spend management.
        </h1>
      </div>
      {/* <div className="grid grid-cols-3 place-items-center gap-28 max-w-7xl mx-auto">
        <CardTwo
          title="Startups"
          content="Spend smarter worldwide with AI-powered budgets, expenses, payments, and travel."
          image="/carousal1.webp"
        />
        <CardTwo
          title="Expense management"
          content="Use AI to automate approvals and expense reports. Track in real time."
          image="/carousal2.webp"
        />
        <CardTwo
          title="Mid-size companies "
          content="Simplify global travel and expenses with automation that makes compliance easy."
          image="/carousal3.webp"
        />
      </div> */}
      <Slider {...settings} className=" max-w-7xl mx-auto">
        <CardTwo
          title="Startups"
          content="Spend smarter worldwide with AI-powered budgets, expenses, payments, and travel."
          image="/carousal1.webp"
        />
        <CardTwo
          title="Expense management"
          content="Use AI to automate approvals and expense reports. Track in real time."
          image="/carousal2.webp"
        />
        <CardTwo
          title="Mid-size companies "
          content="Simplify global travel and expenses with automation that makes compliance easy."
          image="/carousal3.webp"
        />
        <CardTwo
          title="Mid-size companies "
          content="Simplify global travel and expenses with automation that makes compliance easy."
          image="/carousal3.webp"
        />
        <CardTwo
          title="Mid-size companies "
          content="Simplify global travel and expenses with automation that makes compliance easy."
          image="/carousal3.webp"
        />
      </Slider>
    </div>
  );
}

export default Carousal;
