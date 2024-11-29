import React from 'react';
import { GradualSpacing } from '@/components/magicui/gradual-spacing';
import CombinedAnimation from '@/components/magicui/hero-anim';
import { RainbowButton } from '@/components/ui/rainbow-button';

const AcademicsPage: React.FC = () => {
  return (
    <div className="space-y-16">
      <CombinedAnimation text="Academics" className="mb-12 text-5xl text-white" />
      {/* Education Section */}
      <section>
        <GradualSpacing text="Education" className="text-3xl font-semibold mb-6 text-white" />
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-6">
          <img src="/images/speakership/speaker_unpad_logo.png" alt="University Logo" className="w-24 h-24 object-contain" />
          <div>
            <h3 className="text-2xl font-medium text-white">Bachelor of Statistics</h3>
            <p className="text-gray-300">Universitas Padjadjaran, 2013</p>
            <p className="mt-2 text-gray-200"><strong>Thesis:</strong> The Application of Generalized Space Time Autoregressive Integrated (GSTARI) Model in Consumer Price Index (CPI) Forecasting in Four Cities of West Java Province Indonesia</p>
            <p className="mt-2 text-gray-200"><a href="https://scholar.google.co.id/citations?user=dxZ3G84AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Google Scholar</a></p>
          </div>
        </div>
      </section>

      {/* Academic Contributions Section */}
      <section>
        <GradualSpacing text="Academic Contributions" className="text-3xl font-semibold mb-6 text-white" />
        <ul className="space-y-4">
        <li className="bg-gray-800 rounded-lg shadow p-4">
            <h3 className="text-xl font-medium text-white">Advisory Board at Universitas Padjadjaran</h3>
            <p className="text-gray-300">Faculty of Mathematics and Natural Science Universitas Padjadjaran - Indonesia | November 2022</p>
            <ul className="list-disc list-inside mt-2 text-gray-200">
              <li>Suggest, recommend, and provide feedback about the department education curriculum by incorporating the latest industry-ready standards and the department identity and goal while implementing the OBE (Outcome-Based Education) method.</li>
              <li>Document: <a href="https://drive.google.com/file/d/1pjqVhxDs2UP9VOsnj_Ero2VwnxRl9Yzb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Surat Pengangkatan/Official Letter of Appointment</a></li>
            </ul>
          </li>
          <li className="bg-gray-800 rounded-lg shadow p-4">
            <h3 className="text-xl font-medium text-white">Guest Lecturer at Universitas Negeri Malang</h3>
            <p className="text-gray-300">Faculty of Mathematics and Natural Science Universitas Negeri Malang - Indonesia | December 2022</p>
            <ul className="list-disc list-inside mt-2 text-gray-200">
              <li>Course: Computational Thinking, attended by 50+ master degree students.</li>
              <li>Lecturer class of <a href="https://scholar.google.co.id/citations?hl=en&user=TLOoaa4AAAAJ" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Deny Setiawan, M.Pd.</a></li>
              <li>Topics were about the introduction of artificial intelligence and its implementation in students majors.</li>
            </ul>
          </li>
          <li className="bg-gray-800 rounded-lg shadow p-4">
            <h3 className="text-xl font-medium text-white">Guest Lecturer at Institut Teknologi Bandung</h3>
            <p className="text-gray-300">School of Business Management Institut Teknologi Bandung - Indonesia | April 2021</p>
            <ul className="list-disc list-inside mt-2 text-gray-200">
              <li>Course: MB1201 - Business Statistics: Statistics as Decision, Business, and Marketing Science in the Disruptive Industry, attended by 300+ bachelor degree students.</li>
              <li>Lecturer class of <a href="https://scholar.google.co.id/citations?user=ku9d3YgAAAAJ&hl=id&oi=ao" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Meditya Wasesa, Ph.D.</a></li>
              <li>Topics were about business innovation, disruption, and statistical application in industries.</li>
            </ul>
          </li>
          <li className="bg-gray-800 rounded-lg shadow p-4">
            <h3 className="text-xl font-medium text-white">CRAN Project Contribution: gstar Package</h3>
            <p className="text-gray-300">Comprehensive R Archive Network (CRAN) | June 2019</p>
            <ul className="list-disc list-inside mt-2 text-gray-200">
              <li>Developed and deployed an academic package for statistics on the CRAN Project, named gstar.</li>
              <li>Multivariate time series analysis based on Generalized Space-Time Autoregressive Model by Ruchjana et al.(2012) <a href="https://doi.org/10.1063%2F1.4724118" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">doi:10.1063/1.4724118</a></li>
              <li>Documents: <a href="https://cran.r-project.org/web/packages/gstar/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">CRAN Package</a> | <a href="https://drive.google.com/file/d/1pYAJMu0qPKrTabdoqJljfWRDqVdLmCP3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Hak Kekayaan Intelektual (HKI) / Intellectual Property Rights (IPR)</a></li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Research Paper Contributions Section */}
      <section>
        <GradualSpacing text="Research Paper" className="text-3xl font-semibold mb-6 text-white" />
        <ul className="space-y-4">
        <li className="bg-gray-800 rounded-lg shadow p-4">
          <h3 className="text-xl font-medium text-white">Oral Presentation at the International Federation of Classification Society (IFCS) Conference 2019</h3>
          <p className="text-gray-300">Thessaloniki Concert Hall, Greece | August 2019</p>
          <p className="text-gray-300">Access: <a href="https://link.springer.com/book/10.1007/978-3-030-60104-1" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Conference Proceedings</a> | <a href="https://www.flickr.com/photos/artion/albums/72157711054627826/page2" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Photo Documentation</a> | <a href="https://drive.google.com/file/d/1cdL07v-VMeYraMRYd8-T1pvlfurMfF51/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Certificate</a></p>
          <ul className="list-disc list-inside mt-2 text-gray-200">
            <li>Title: Double helix multi-stage text classification model to enhance chat user experience in e-commerce website</li>
            <li>Presented as the representative of PT.Bukalapak.com at the 16th Conference of the International Federation of Classification Societies. This presentation was part of a select data research project on Natural Language Processing (NLP).</li>
          </ul>
        </li>

        <li className="bg-gray-800 rounded-lg shadow p-4">
          <h3 className="text-xl font-medium text-white">Oral Presentation at the Indonesian Student Association Scientific Conference (ISASC) 2017</h3>
          <p className="text-gray-300">Osaka University, Japan | October 2017</p>
          <p className="text-gray-300">Access: <a href="https://drive.google.com/file/d/146VaRZrIC8aERQJ40PoLMmiwnUzmsfJy/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Photo Documentation</a> | <a href="https://drive.google.com/file/d/1yCr8BpvQQfpEJFg9IzKd3TFCEqcsfol5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Certificate</a></p>
          <ul className="list-disc list-inside mt-2 text-gray-200">
          <li>Two research papers selected from the top 10 out of 94 submissions, covering topics in Humanities, Social Science, Politics, and Economics.</li>
            <li>Title 1: Application of Geographically Weighted Regression on Abating Poverty Problem in Indonesia Through 2030</li>
            <li>Title 2: Indonesian Foreign Debt Optimization by QHM-ARIMA (Quadruple Helix Model, Autoregressive Integrated Moving Average) through 2030 as an Indonesian Demographic Bonus</li>
          </ul>
        </li>

        <li className="bg-gray-800 rounded-lg shadow p-4">
          <h3 className="text-xl font-medium text-white">Poster Presentation at the Conference of Indonesian Student Association in Korea (CISAK) 2017</h3>
          <p className="text-gray-300">UST Daejeon, South Korea | July 2017</p>
          <p className="text-gray-300">Access: <a href="https://scholar.google.co.id/citations?view_op=view_citation&hl=en&user=dxZ3G84AAAAJ&citation_for_view=dxZ3G84AAAAJ:u-x6o8ySG0sC" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Research Paper</a> | <a href="https://www.linkedin.com/posts/fiqryrevadiansyah_finally-weve-been-finished-our-conference-activity-6294910440778620928-7dMp?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Photo Documentation</a>  | <a href="https://drive.google.com/file/d/1xCHTsLT9ZzHRuZ_HEh8xcPZjndlgjw3y/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Certificate</a></p>
          <ul className="list-disc list-inside mt-2 text-gray-200">
            <li>Application of Geographically Weighted Regression on Abating Poverty Problems in Indonesia Through 2030</li>
            <li>Selected as one of 88 research papers presented as a poster at the Conference of the Indonesian Student Association, held at the University of Science and Technology.</li>
          </ul>
        </li>
        </ul>
      </section>

      {/* Separator Line */}
      <div className="border-t border-gray-500 my-4 sm:my-6"></div>

      {/* Inquiry Form */}
      <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-white">Collaborate on Cutting-Edge Data Research and Solutions</h2>
          <p className="text-gray-300 mb-3">Interested in advancing your projects in data science, analytics, or data engineering?</p>
          <p className="text-gray-400 mb-6 text-sm">Let’s explore innovative strategies together—whether it’s driving data automation, enhancing data governance, or pioneering machine learning solutions. I’m excited to connect with new people and discuss impactful, industry-driven research ideas.</p>
          <RainbowButton href="/resources/contact-form">
              Chat with Me
          </RainbowButton>
      </section>
    </div>
  );
};

export default AcademicsPage;