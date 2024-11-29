import React from 'react';
import CombinedAnimation from '../../../components/magicui/hero-anim';
import { RainbowButton } from '../../../components/ui/rainbow-button';

const SpeakershipPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        
        <CombinedAnimation text="Speakership Portfolio" className="mb-12 text-5xl text-white" />

        {/* Presentation Deck Section */}
        <section>
        <div className="text-center">
            <a href="https://speakerdeck.com/fiqryr" target="_blank" rel="noopener noreferrer">
            <p className="text-sm text-gray-300">Click here to visit my SpeakerDeck account for some of my past talks and presentations.</p>
            </a>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-gray-800">
                    <th className="p-3 font-semibold text-white">Event Name</th>
                    <th className="p-3 font-semibold text-white">Event Type</th>
                    <th className="p-3 font-semibold text-white">Organizer</th>
                    <th className="p-3 font-semibold text-white">Event Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="p-3 text-gray-200">Hackathon Judge, Angelhacks Indonesia 2024</td>
                    <td className="p-3 text-gray-200">Hackathon Judge</td>
                    <td className="p-3 text-gray-200">Angelhacks Global and Grab Indonesia</td>
                    <td className="p-3 text-gray-200">2024-07</td>
                </tr>
                <tr>
                    <td className="p-3 text-gray-200">Data Analyst Program for IFG (Indonesia Financial Group)</td>
                    <td className="p-3 text-gray-200">Workshop</td>
                    <td className="p-3 text-gray-200">Rakamin Academy</td>
                    <td className="p-3 text-gray-200">2024-07</td>
                </tr>
                <tr>
                    <td className="p-3 text-gray-200">Closing of Garudahacks 5.0 Indonesia</td>
                    <td className="p-3 text-gray-200">Seminar</td>
                    <td className="p-3 text-gray-200">Garudahacks and Paper.id</td>
                    <td className="p-3 text-gray-200">2024-07</td>
                </tr>
                <tr>
                    <td className="p-3 text-gray-200">Harnessing the Power of Big Data and Artificial Intelligence: How Generation Z Can Contribute to Achieving SDGs</td>
                    <td className="p-3 text-gray-200">Webinar and Talkshow</td>
                    <td className="p-3 text-gray-200">Universitas Padjadjaran (South East Asia Scale)</td>
                    <td className="p-3 text-gray-200">2023-10</td>
                </tr>
                <tr>
                    <td className="p-3 text-gray-200">Data Analyst Program for LKPP Indonesia</td>
                    <td className="p-3 text-gray-200">Workshop</td>
                    <td className="p-3 text-gray-200">Rakamin Academy</td>
                    <td className="p-3 text-gray-200">2023-06</td>
                </tr>
                <tr>
                    <td className="p-3 text-gray-200">The Asterism Fragments of Data Science - Dies Natalis of Faculty</td>
                    <td className="p-3 text-gray-200">Webinar</td>
                    <td className="p-3 text-gray-200">Institut Teknologi Telkom Purwokerto (ITTP)</td>
                    <td className="p-3 text-gray-200">2022-09</td>
                </tr>
                <tr>
                    <td className="p-3 text-gray-200">Dissecting a Programming Language: Python</td>
                    <td className="p-3 text-gray-200">Workshop</td>
                    <td className="p-3 text-gray-200">Ajaib x DQLab</td>
                    <td className="p-3 text-gray-200">2022-08</td>
                </tr>
                <tr>
                    <td className="p-3 text-gray-200">Problem Solving with Data Visualization</td>
                    <td className="p-3 text-gray-200">Webinar</td>
                    <td className="p-3 text-gray-200">Glints.com</td>
                    <td className="p-3 text-gray-200">2021-08</td>
                </tr>
                <tr>
                    <td className="p-3 text-gray-200">Orchestrating The Stellar Journey</td>
                    <td className="p-3 text-gray-200">Webinar</td>
                    <td className="p-3 text-gray-200">SMA Kornita IPB Bogor</td>
                    <td className="p-3 text-gray-200">2021-07</td>
                </tr>
                <tr>
                    <td className="p-3 text-gray-200">The Role of Actuary Science and Data Science in Industry 4.0 Era</td>
                    <td className="p-3 text-gray-200">Webinar</td>
                    <td className="p-3 text-gray-200">Statistics Department FMIPA Universitas Tanjungpura</td>
                    <td className="p-3 text-gray-200">2021-05</td>
                </tr>
                <tr>
                    <td className="p-3 text-gray-200">Passion Playground Festival Vooya</td>
                    <td className="p-3 text-gray-200">Talkshow</td>
                    <td className="p-3 text-gray-200">Vooya.ID</td>
                    <td className="p-3 text-gray-200">2020-11</td>
                </tr>
                <tr>
                    <td className="p-3 text-gray-200">Kickstart Your Data Science Career</td>
                    <td className="p-3 text-gray-200">Webinar</td>
                    <td className="p-3 text-gray-200">Bisasih Community Indonesia</td>
                    <td className="p-3 text-gray-200">2020-11</td>
                </tr>
                <tr>
                    <td className="p-3 text-gray-200">Data Science short-course in BukalapakKeKampus Chapter UGM</td>
                    <td className="p-3 text-gray-200">Workshop</td>
                    <td className="p-3 text-gray-200">Bukalapak and Universitas Gadjah Mada</td>
                    <td className="p-3 text-gray-200">2019-05</td>
                </tr>
                <tr>
                    <td className="p-3 text-gray-200">Deep Dive into Facebook Prophet Model</td>
                    <td className="p-3 text-gray-200">Workshop</td>
                    <td className="p-3 text-gray-200">Indonesia R Community, Machine Learning ID, and Bukalapak</td>
                    <td className="p-3 text-gray-200">2019-06</td>
                </tr>
            </tbody>
            </table>
        </div>
        </section>

         {/* Separator Line */}
         <div className="border-t border-gray-500 my-4 sm:my-6"></div>

        <section className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-white">Elevate Your Next Data & AI Event</h2>
            <p className="text-gray-300 mb-3">Looking for an experienced speaker for your data science, analytics, and engineering event?</p>
            <p className="text-gray-400 mb-6 text-sm">Available for workshops, seminars, and guest lectures at universities, corporate events, and tech conferences</p>
            <RainbowButton href="/resources/contact-form">
                Chat with Me
            </RainbowButton>
        </section>
      </div>
    </div>
  );
};

export default SpeakershipPage;
