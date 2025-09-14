"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FileText, Clock, Zap, TrendingUp, CheckCircle, ArrowRight, Brain, Code, Server, Database } from 'lucide-react';

const MultimodalOCRCaseStudy = () => {
  const [activeTab, setActiveTab] = useState('receipt');

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-24">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-xs text-white/70 font-medium">AI-Powered Innovation</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Multimodal OCR Revolution
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto">
              How Google Gemini Flash transformed document processing with 90% time reduction
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
              <Zap className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-400 mb-1">90%</div>
              <div className="text-sm text-white/60">Time Reduction</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-400 mb-1">95%</div>
              <div className="text-sm text-white/60">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
              <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-400 mb-1">10s</div>
              <div className="text-sm text-white/60">Per Document</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-400 mb-1">10x</div>
              <div className="text-sm text-white/60">Throughput</div>
            </div>
          </div>
      
          {/* Executive Summary */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Executive Summary
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed">
          This case study presents an innovative solution to the challenge of manual data entry in personal finance management. 
          By harnessing the power of Google Gemini Multimodal Large Language Model (LLM), we developed an advanced Optical Character Recognition (OCR) system 
          that not only extracts transaction data but also performs intelligent categorization. The result is a remarkable 90% reduction in document processing time, 
          from 10 minutes to just 10 seconds per document, while maintaining a high accuracy rate of 95%.
              </p>
            </div>
          </section>

          {/* Before and After Comparison */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Live Demonstration
              </span>
            </h2>

            {/* Tab Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'receipt'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                    : 'bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 hover:border-purple-400/30'
                }`}
                onClick={() => setActiveTab('receipt')}
              >
                <FileText className="inline-block w-4 h-4 mr-2" />
                Receipt Processing
              </button>
              <button
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'non-receipt'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                    : 'bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 hover:border-purple-400/30'
                }`}
                onClick={() => setActiveTab('non-receipt')}
              >
                <FileText className="inline-block w-4 h-4 mr-2" />
                Error Handling
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <h3 className="text-xl font-bold text-white">
                    Input: {activeTab === 'receipt' ? 'Receipt' : 'Non-Receipt'} Image
                  </h3>
                </div>
                <div className="bg-black/40 rounded-xl p-4 h-[500px] overflow-y-auto border border-purple-400/10">
                  <div className="relative w-full h-full min-h-[400px]">
                    <Image
                      src={activeTab === 'receipt' ? "/images/articles/resources-casestudies-multimodal-receipt.png" : "/images/articles/resources-casestudies-multimodal-wrong_picture.jpeg"}
                      alt={activeTab === 'receipt' ? "Receipt" : "Non-Receipt Image"}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Output Section */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <h3 className="text-xl font-bold text-white">
                    Output: Structured JSON
                  </h3>
                </div>
                <div className="bg-black/40 rounded-xl p-4 h-[500px] overflow-y-auto border border-purple-400/10">
                  <pre className="text-sm text-green-400/90 font-mono whitespace-pre-wrap">
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

          {/* Technical Architecture */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technical Architecture
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <Brain className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Core AI Model</h3>
                <p className="text-white/70 text-sm">Google Gemini Multimodal LLM</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <Code className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Backend Framework</h3>
                <p className="text-white/70 text-sm">FastAPI (Python-based, asynchronous)</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <Server className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Server</h3>
                <p className="text-white/70 text-sm">Uvicorn (ASGI server implementation)</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <Code className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Programming Language</h3>
                <p className="text-white/70 text-sm">Python 3.9+</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <FileText className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Image Processing</h3>
                <p className="text-white/70 text-sm">OpenCV and Pillow libraries</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <Database className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Data Format</h3>
                <p className="text-white/70 text-sm">JSON with Swagger UI docs</p>
              </div>
            </div>
          </section>

          {/* System Capabilities */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                System Capabilities
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Intelligent Amount Detection",
                  description: "Context-aware algorithms to accurately identify and extract transaction amounts"
                },
                {
                  title: "Account Classification",
                  description: "Automatically categorizes transactions into appropriate account types"
                },
                {
                  title: "Transaction Categorization",
                  description: "Machine learning to classify expenses into predefined or custom categories"
                },
                {
                  title: "Credit/Debit Classification",
                  description: "Distinguishes between income and expenses based on transaction context"
                },
                {
                  title: "High Accuracy",
                  description: "Achieves 95%+ accuracy in data extraction and categorization"
                },
                {
                  title: "Real-time Processing",
                  description: "Near-instantaneous results enabling immediate financial insights"
                },
                {
                  title: "Multi-format Support",
                  description: "Processes receipts, invoices, and bank statements"
                },
                {
                  title: "Multilingual Support",
                  description: "Able to process documents in multiple languages"
                },
                {
                  title: "Custom Classification Rules",
                  description: "Customized rule engine for user-defined categorization logic"
                }
              ].map((capability, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{capability.title}</h3>
                      <p className="text-white/70 text-sm">{capability.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Workflow */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technical Workflow
              </span>
            </h2>
            <p className="text-white/80 text-center mb-8 max-w-3xl mx-auto">
              Our system employs a sophisticated multi-stage process to transform raw document images into structured, actionable financial data:
            </p>

            {/* Process Diagram */}
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 mb-8 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/articles/resources-casestudies-multimodal-diagram.png"
                  alt="Multimodal OCR Process Diagram"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Process Steps */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400 font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Document Preprocessing</h3>
                </div>
                <p className="text-white/80 mb-4">The system optimizes the input image for analysis through:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-white/70 text-sm">Adaptive thresholding for enhanced contrast</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-white/70 text-sm">Gaussian denoising to reduce image noise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-white/70 text-sm">Affine transformations for perspective correction and deskewing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-white/70 text-sm">Resolution standardization to 300 DPI for consistent processing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400 font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Intelligent Document Analysis</h3>
                </div>
                <p className="text-white/80 mb-4">Gemini processes and understands documents through a comprehensive approach:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-white/70 text-sm"><strong className="text-white/90">Visual Layout Analysis:</strong> Identifies document structure, key regions, and information hierarchy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-white/70 text-sm"><strong className="text-white/90">Contextual Understanding:</strong> Uses NLP to comprehend semantic meaning of text and relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-white/70 text-sm"><strong className="text-white/90">Intelligent Matching:</strong> Employs fuzzy matching for variations in merchant names and items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-white/70 text-sm"><strong className="text-white/90">Financial Classification:</strong> Auto-categorizes transactions into Charts of Accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-white/70 text-sm"><strong className="text-white/90">Error Detection:</strong> Validates data against patterns and flags inconsistencies</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400 font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Structured Data Output</h3>
                </div>
                <p className="text-white/80">The system generates a standardized JSON output with complete transaction details, merchant information, and intelligent categorization as demonstrated in the live examples above.</p>
              </div>
            </div>
          </section>

          {/* Performance Metrics and Business Impact */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Performance & Business Impact
              </span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <h3 className="text-xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Key Performance Indicators
                  </span>
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm"><strong className="text-purple-400">Processing Time:</strong> Reduced from 10 minutes to 10 seconds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm"><strong className="text-purple-400">Accuracy Rate:</strong> 95% (compared to manual entry)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm"><strong className="text-purple-400">Error Reduction:</strong> 95% decrease in data entry errors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm"><strong className="text-purple-400">Throughput:</strong> Capacity increased from 6 to 60 docs/hour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm"><strong className="text-purple-400">Scalability:</strong> Linear scaling with added resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm"><strong className="text-purple-400">Price:</strong> Estimated Rp 1,000 per 50 pages</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <h3 className="text-xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Business Benefits
                  </span>
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">90% reduction in manual data entry costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">Improved data consistency and reliability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">Real-time financial insights for faster decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">Enhanced customer satisfaction via quick processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">Human resources freed for higher-value tasks</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Separator with Gradient */}
          <div className="relative my-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-400/20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-black px-4">
                <span className="text-purple-400">✦</span>
              </span>
            </div>
          </div>

          {/* Conclusion */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Conclusion
                </span>
              </h2>
              <p className="text-white/80 leading-relaxed text-center max-w-4xl mx-auto">
          The implementation of our Multimodal OCR system, powered by Google Gemini LLM, has revolutionized the document processing workflow in personal finance management. 
          The 90% reduction in processing time, coupled with high accuracy and automated classification, demonstrates the transformative impact of advanced AI technologies in financial document processing. 
          This case study underscores the potential of multimodal AI models to solve complex, real-world challenges, paving the way for more efficient and accurate financial management systems.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MultimodalOCRCaseStudy;
