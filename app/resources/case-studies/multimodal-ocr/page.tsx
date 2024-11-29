"use client";

import React, { useState } from 'react';

const MultimodalOCRCaseStudy = () => {
  const [activeTab, setActiveTab] = useState('receipt');

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Case Study: Leveraging Multimodal OCR to Achieve 90% Reduction in Document Processing Time</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Executive Summary</h2>
        <p className="mb-4">
          This case study presents an innovative solution to the challenge of manual data entry in personal finance management. 
          By harnessing the power of Google's Gemini Multimodal Large Language Model (LLM), we developed an advanced Optical Character Recognition (OCR) system 
          that not only extracts transaction data but also performs intelligent categorization. The result is a remarkable 90% reduction in document processing time, 
          from 10 minutes to just 10 seconds per document, while maintaining a high accuracy rate of 95%.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Before and After Comparison</h2>
        <div className="mb-4">
          <button
            className={`px-4 py-2 mr-2 ${activeTab === 'receipt' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab('receipt')}
          >
            Receipt Image
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'non-receipt' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab('non-receipt')}
          >
            Non-Receipt Image
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Input: {activeTab === 'receipt' ? 'Receipt' : 'Non-Receipt'} Image</h3>
            <div className="bg-gray-800 p-4 rounded-lg h-[500px] overflow-y-auto">
              <img 
                src={activeTab === 'receipt' ? "/images/articles/resources-casestudies-multimodal-receipt.png" : "/images/articles/resources-casestudies-multimodal-wrong_picture.jpeg"} 
                alt={activeTab === 'receipt' ? "Receipt" : "Non-Receipt Image"} 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Output: Structured JSON</h3>
            <div className="bg-gray-800 p-4 rounded-lg h-[500px] overflow-y-auto">
              <pre className="text-sm text-gray-200 whitespace-pre-wrap">
                {activeTab === 'receipt' ? `{
  "status": 200,
  "success": true,
  "message": "Success",
  "data": {
    "merchant": {
      "name": "Maketh",
      "address": "Jl. Danau Agung 2 Blok C18 No 15A, Kota Jakarta Utara, DKI Jakarta, 14350",
      "phone": "+6281291685555",
      "tax_id": null,
      "category": "cafe"
    },
    "transaction": {
      "date": "2024-11-06",
      "time": "16:09",
      "invoice_number": "9XU9Z6",
      "subtotal": 325000,
      "tax": 52000,
      "total": 377000,
      "payment_method": "BCA",
      "currency": "Rp"
    },
    "items": [
      {
        "description": "Hot Cappuccino",
        "quantity": 1,
        "unit_price": 45000,
        "total": 45000,
        "coa_category": "cafe"
      },
      {
        "description": "Yakiniku Don",
        "quantity": 1,
        "unit_price": 65000,
        "total": 65000,
        "coa_category": "cafe"
      },
      {
        "description": "Chicken Katsu Curry",
        "quantity": 1,
        "unit_price": 65000,
        "total": 65000,
        "coa_category": "cafe"
      },
      {
        "description": "Fish Matah",
        "quantity": 1,
        "unit_price": 65000,
        "total": 65000,
        "coa_category": "cafe"
      },
      {
        "description": "London Fog",
        "quantity": 1,
        "unit_price": 45000,
        "total": 45000,
        "coa_category": "cafe"
      },
      {
        "description": "Iced Tea",
        "quantity": 2,
        "unit_price": 20000,
        "total": 40000,
        "coa_category": "cafe"
      }
    }
    "summary": {
      "coa_totals": {
        "cafe": 377000
      }
    }
  },
  "error": null,
  "metadata": {
    "has_logo": true,
    "receipt_type": "receipt",
    "image_quality": "good",
    "confidence_score": 0.95
  },
}` : `{
  "status": 400,
  "success": false,
  "message": "Invalid document type detected",
  "data": null,
  "error": {
    "code": "DOC_TYPE_ERROR",
    "details": "Document appears to be a medical record. System only processes receipts and invoices.",
    "detected_type": "medical_record",
    "allowed_types": ["receipt", "invoice"],
    "timestamp": "2024-11-29T14:23:45Z"
  },
  "metadata": {
    "image_quality": "good",
    "confidence_score": 0.92,
    "file_name": "document_scan.jpg"
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technical Architecture</h2>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Core AI Model:</strong> Google Gemini Multimodal LLM</li>
          <li><strong>Backend Framework:</strong> FastAPI (Python-based, asynchronous)</li>
          <li><strong>Server:</strong> Uvicorn (ASGI server implementation)</li>
          <li><strong>Programming Language:</strong> Python 3.9+</li>
          <li><strong>Image Processing:</strong> OpenCV and Pillow libraries</li>
          <li><strong>Data Serialization:</strong> JSON</li>
          <li><strong>API Documentation:</strong> Swagger UI (via FastAPI)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">System Capabilities</h2>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Intelligent Amount Detection:</strong> Utilizes context-aware algorithms to accurately identify and extract transaction amounts.</li>
          <li><strong>Account Classification:</strong> Automatically categorizes transactions into appropriate account types (e.g., checking, savings, credit card).</li>
          <li><strong>Transaction Categorization:</strong> Employs machine learning to classify expenses into predefined or custom categories.</li>
          <li><strong>Credit/Debit Classification:</strong> Distinguishes between income and expenses based on transaction context.</li>
          <li><strong>High Accuracy:</strong> Achieves 95%+ accuracy in data extraction and categorization.</li>
          <li><strong>Real-time Processing:</strong> Provides near-instantaneous results, enabling immediate financial insights.</li>
          <li><strong>Multi-format Support:</strong> Processes various document types including receipts, invoices, and bank statements.</li>
          <li><strong>Multilingual Support:</strong> Able to process documents in multiple languages</li>
          <li><strong>Custom Classification Rules:</strong> Able to cater customized rule engine for user-defined categorization logic</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technical Workflow: From Document to Structured Data</h2>
        <div className="mb-6">
          <p className="mb-4">
            Our system employs a sophisticated multi-stage process to transform raw document images into structured, actionable financial data:
          </p>
          <img 
            src="/images/articles/resources-casestudies-multimodal-diagram.png" 
            alt="Multimodal OCR Process Diagram" 
            className="w-full max-w-2xl mx-auto my-6"
          />
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Document Preprocessing</h3>
              <p>The system optimizes the input image for analysis through:</p>
              <ul className="list-disc pl-6 mb-2">
                <li>Adaptive thresholding for enhanced contrast</li>
                <li>Gaussian denoising to reduce image noise</li>
                <li>Affine transformations for perspective correction and deskewing</li>
                <li>Resolution standardization to 300 DPI for consistent processing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Intelligent Document Analysis</h3>
              <p>Gemini processes and understands documents through a comprehensive approach:</p>
              <ul className="list-disc pl-6 mb-2">
                <li>Visual Layout Analysis: Identifies document structure, key regions, and information hierarchy</li>
                <li>Contextual Understanding: Uses natural language processing to comprehend the semantic meaning of text and its relationships</li>
                <li>Intelligent Matching: Employs fuzzy matching algorithms to handle variations in merchant names and item descriptions</li>
                <li>Financial Classification: Automatically categorizes transactions into appropriate Charts of Accounts and wallet destinations</li>
                <li>Error Detection: Validates extracted data against expected patterns and flags potential inconsistencies</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Structured Data Output</h3>
              <p className="mb-2">The system generates a standardized JSON output as shown in the "Before and After Comparison" section above.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Performance Metrics and Business Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 text-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Key Performance Indicators</h3>
            <ul className="list-disc pl-6">
              <li>Processing Time: Reduced from 10 minutes to 10 second per document</li>
              <li>Accuracy Rate: 95% (compared to manual entry)</li>
              <li>Error Reduction: 95% decrease in data entry errors</li>
              <li>Throughput: Capacity increased from 6 to 60 documents per hour</li>
              <li>Scalability: Linear scaling with added computational resources</li>
              <li>Price: Estimated Rp 1,000 per 50 pages</li>
            </ul>
          </div>
          <div className="bg-gray-800 text-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Business Benefits</h3>
            <ul className="list-disc pl-6">
              <li>90% reduction in manual data entry costs</li>
              <li>Improved data consistency and reliability</li>
              <li>Real-time financial insights enabling faster decision-making</li>
              <li>Enhanced customer satisfaction through quicker processing</li>
              <li>Freed up human resources for higher-value tasks</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p>
          The implementation of our Multimodal OCR system, powered by Google's Gemini Flash LLM, has revolutionized the document processing workflow in personal finance management. 
          The 90% reduction in processing time, coupled with high accuracy and automated classification, demonstrates the transformative impact of advanced AI technologies in financial document processing. 
          This case study underscores the potential of multimodal AI models to solve complex, real-world challenges, paving the way for more efficient and accurate financial management systems.
        </p>
      </section>
    </div>
  );
};

export default MultimodalOCRCaseStudy;
