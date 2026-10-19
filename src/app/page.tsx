import React from 'react';
import { PRODUCTS } from '@/data/products';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#2C3E3B] p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light text-[#397A78] mb-6 text-center">
        “Lúc này, điều gì bên trong bạn đang cần được lắng nghe?”
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Một bài trắc nghiệm ngắn giúp bạn nhận diện những nhu cầu nổi bật ở thời điểm hiện tại.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-medium text-[#397A78] mb-2">{PRODUCTS.book_tinh_lang.name}</h2>
          <p className="text-gray-600 mb-4">{PRODUCTS.book_tinh_lang.description}</p>
          <span className="text-xl font-semibold text-[#D9856D]">{PRODUCTS.book_tinh_lang.launchPrice.toLocaleString()} VNĐ</span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-medium text-[#397A78] mb-2">{PRODUCTS.book_vu_tru.name}</h2>
          <p className="text-gray-600 mb-4">{PRODUCTS.book_vu_tru.description}</p>
          <span className="text-xl font-semibold text-[#D9856D]">{PRODUCTS.book_vu_tru.launchPrice.toLocaleString()} VNĐ</span>
        </div>
      </div>
    </main>
  );
}
