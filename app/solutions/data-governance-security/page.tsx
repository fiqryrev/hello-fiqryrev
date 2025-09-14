'use client';

import React from 'react';
import { Shield, Lock, Eye, FileCheck, AlertTriangle, Key, Database, Users, CheckCircle, ArrowRight, Sparkles, Server, GitBranch, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const DataGovernanceSecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-24">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-xs text-white/70 font-medium">Data Governance & Compliance</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Data Governance & Security
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto">
              Ensure data quality, compliance, and security with AI-powered governance and engineering solutions
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-400 mb-1">100%</div>
              <div className="text-sm text-white/60">Compliance Rate</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
              <Lock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-400 mb-1">256-bit</div>
              <div className="text-sm text-white/60">Encryption</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
              <Eye className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-400 mb-1">24/7</div>
              <div className="text-sm text-white/60">Monitoring</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
              <AlertTriangle className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-400 mb-1">Zero</div>
              <div className="text-sm text-white/60">Breaches</div>
            </div>
          </div>

          {/* Compliance Frameworks */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Indonesian Compliance & Data Regulations
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* UU PDP Compliance */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">UU PDP Compliance</h3>
                    <span className="text-xs text-purple-400">Indonesian Data Protection Act 2022</span>
                  </div>
                </div>
                <p className="text-white/70 mb-6">
                  Full compliance with Indonesian Personal Data Protection Law (UU No. 27 Tahun 2022).
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Personal data classification & mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Data subject rights implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Cross-border data transfer compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Data breach notification (72 hours)</span>
                  </li>
                </ul>
              </div>

              {/* Financial Services Compliance */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">OJK & BI Regulations</h3>
                    <span className="text-xs text-purple-400">Financial Data Governance</span>
                  </div>
                </div>
                <p className="text-white/70 mb-6">
                  Compliance with Indonesian financial sector data regulations and reporting requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Data localization requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">SLIK reporting automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Transaction data governance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Regulatory reporting pipelines</span>
                  </li>
                </ul>
              </div>

              {/* Industry Standards */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">ISO 27001 & 27701</h3>
                    <span className="text-xs text-purple-400">Data Security Standards</span>
                  </div>
                </div>
                <p className="text-white/70 mb-6">
                  International standards for information security and privacy management.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Data security controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Privacy impact assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Data risk management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-white/60">Continuous compliance monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* AI-Powered Data Governance */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Data Governance Automation
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Automated Data Quality */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">AI Data Quality Management</h3>
                </div>
                <p className="text-white/70 mb-6">
                  Automated data profiling, validation, and cleansing using machine learning algorithms.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Auto Profiling</h4>
                    <p className="text-xs text-white/60">Pattern detection</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Anomaly Detection</h4>
                    <p className="text-xs text-white/60">ML-based alerts</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Smart Validation</h4>
                    <p className="text-xs text-white/60">Rule generation</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Auto Remediation</h4>
                    <p className="text-xs text-white/60">Self-healing data</p>
                  </div>
                </div>
              </div>

              {/* CI/CD Automation */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <GitBranch className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">DataOps CI/CD Pipeline</h3>
                </div>
                <p className="text-white/70 mb-6">
                  Automated testing, validation, and deployment for data pipelines and transformations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">dbt Testing</h4>
                    <p className="text-xs text-white/60">Automated checks</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Schema Validation</h4>
                    <p className="text-xs text-white/60">Contract testing</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Data Scanning</h4>
                    <p className="text-xs text-white/60">PII detection</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Auto Deploy</h4>
                    <p className="text-xs text-white/60">GitOps workflow</p>
                  </div>
                </div>
              </div>

              {/* Metadata Automation */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Intelligent Metadata Management</h3>
                </div>
                <p className="text-white/70 mb-6">
                  AI-powered data cataloging, lineage tracking, and documentation generation.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Auto Tagging</h4>
                    <p className="text-xs text-white/60">Smart classification</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Lineage Tracking</h4>
                    <p className="text-xs text-white/60">Automated mapping</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Doc Generation</h4>
                    <p className="text-xs text-white/60">AI documentation</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Impact Analysis</h4>
                    <p className="text-xs text-white/60">Change prediction</p>
                  </div>
                </div>
              </div>

              {/* Compliance Automation */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Automated Compliance Monitoring</h3>
                </div>
                <p className="text-white/70 mb-6">
                  Continuous compliance checking and automated report generation for regulations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Policy Engine</h4>
                    <p className="text-xs text-white/60">Rule automation</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Audit Scripts</h4>
                    <p className="text-xs text-white/60">Auto validation</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Report Gen</h4>
                    <p className="text-xs text-white/60">Auto documentation</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Alert System</h4>
                    <p className="text-xs text-white/60">Violation detection</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Data Security Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Data Security & Protection Services
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Data Encryption */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Data Encryption & Masking</h3>
                </div>
                <p className="text-white/70 mb-6">
                  End-to-end encryption for sensitive data with dynamic masking and tokenization.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">At Rest</h4>
                    <p className="text-xs text-white/60">Column-level encryption</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">In Transit</h4>
                    <p className="text-xs text-white/60">API encryption</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Data Masking</h4>
                    <p className="text-xs text-white/60">Dynamic obfuscation</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Tokenization</h4>
                    <p className="text-xs text-white/60">PII protection</p>
                  </div>
                </div>
              </div>

              {/* Data Access Control */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Data Access Governance</h3>
                </div>
                <p className="text-white/70 mb-6">
                  Fine-grained access control at database, table, and column level with audit trails.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Row-Level Security</h4>
                    <p className="text-xs text-white/60">Policy-based access</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Column Masking</h4>
                    <p className="text-xs text-white/60">Sensitive data hiding</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Query Audit</h4>
                    <p className="text-xs text-white/60">Access logging</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Temp Access</h4>
                    <p className="text-xs text-white/60">Time-bound permissions</p>
                  </div>
                </div>
              </div>

              {/* Data Loss Prevention */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Data Loss Prevention (DLP)</h3>
                </div>
                <p className="text-white/70 mb-6">
                  Protect sensitive data from unauthorized access, leakage, or exfiltration.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Classification</h4>
                    <p className="text-xs text-white/60">Auto data tagging</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Monitoring</h4>
                    <p className="text-xs text-white/60">Real-time detection</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Prevention</h4>
                    <p className="text-xs text-white/60">Block & quarantine</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Response</h4>
                    <p className="text-xs text-white/60">Incident handling</p>
                  </div>
                </div>
              </div>

              {/* Data Monitoring */}
              <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-400/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Data Observability & Monitoring</h3>
                </div>
                <p className="text-white/70 mb-6">
                  Real-time data pipeline monitoring with anomaly detection and quality alerts.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Pipeline Health</h4>
                    <p className="text-xs text-white/60">SLA monitoring</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Data Freshness</h4>
                    <p className="text-xs text-white/60">Latency tracking</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Volume Tracking</h4>
                    <p className="text-xs text-white/60">Throughput metrics</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3 border border-purple-400/10">
                    <h4 className="text-sm font-bold text-purple-400 mb-1">Cost Analytics</h4>
                    <p className="text-xs text-white/60">Usage optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Data Governance */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Data Governance Framework
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Database,
                  title: "Data Catalog",
                  description: "Centralized metadata management and data discovery"
                },
                {
                  icon: GitBranch,
                  title: "Data Lineage",
                  description: "Track data flow and transformations across systems"
                },
                {
                  icon: FileCheck,
                  title: "Data Quality",
                  description: "Automated quality checks and validation rules"
                },
                {
                  icon: Users,
                  title: "Data Stewardship",
                  description: "Ownership assignment and accountability"
                },
                {
                  icon: Shield,
                  title: "Privacy Management",
                  description: "PII detection and privacy controls"
                },
                {
                  icon: Server,
                  title: "Master Data Management",
                  description: "Single source of truth for critical data"
                }
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300">
                    <Icon className="w-8 h-8 text-purple-400 mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/60 text-sm">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Implementation Process */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Implementation Approach
              </span>
            </h2>
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { step: "1", title: "Assessment", desc: "Security posture analysis" },
                  { step: "2", title: "Strategy", desc: "Governance framework design" },
                  { step: "3", title: "Implementation", desc: "Controls deployment" },
                  { step: "4", title: "Training", desc: "Team enablement" },
                  { step: "5", title: "Monitoring", desc: "Continuous improvement" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-purple-400 font-bold">{item.step}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Data Governance Technology Stack
              </span>
            </h2>
            <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-md border border-purple-400/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-sm font-bold text-purple-400 mb-3">Data Catalog</h3>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• DataHub</li>
                    <li>• Apache Atlas</li>
                    <li>• OpenMetadata</li>
                    <li>• Dataplex (GCP)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-purple-400 mb-3">Quality Tools</h3>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Great Expectations</li>
                    <li>• Soda</li>
                    <li>• dbt tests</li>
                    <li>• Monte Carlo</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-purple-400 mb-3">Observability</h3>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Datadog</li>
                    <li>• Grafana</li>
                    <li>• Elementary</li>
                    <li>• DataFold</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-purple-400 mb-3">Security</h3>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Privacera</li>
                    <li>• Immuta</li>
                    <li>• BigID</li>
                    <li>• Collibra</li>
                  </ul>
                </div>
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

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-400/10 border border-purple-400/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-white/70 font-medium">Secure Your Data</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Protect Your Most Valuable Asset
                </span>
              </h2>

              <p className="text-white/80 mb-3 text-lg">
                Implement enterprise-grade security and governance
              </p>

              <p className="text-white/60 mb-8 text-base max-w-2xl mx-auto">
                Whether you need compliance implementation, security hardening, or governance frameworks,
                I'll help you protect your data while maintaining operational efficiency.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/resources/contact-form"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300"
                >
                  Start Security Assessment
                </Link>
                <Link
                  href="/resources/case-studies"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataGovernanceSecurityPage;