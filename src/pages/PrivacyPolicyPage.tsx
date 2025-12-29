
import React from 'react';
import Header from '../components/Header';
import EndFooter from '../components/EndFooter';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Header />

      <main className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-10 border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2e376d] mb-2">
            Privacy & Cookies Policy
          </h1>
          <p className="text-sm text-gray-500">
            Last Updated: October 16, 2025
          </p>
        </div>

        <div className="space-y-12 text-sm leading-relaxed text-gray-700 text-justify">

          {/* 1. Introduction */}
          <section>
            <p className="mb-4 font-medium text-gray-900">
              This Privacy & Cookies Policy ("Policy") replaces our previous policies. Please take the time to review before you continue to use our products and services.
            </p>
            <p className="mb-4">
              The <strong>AI, ML & Robotics International Conference (ROBOTICS-2026)</strong> is an international scientific gathering dedicated to the advancement of technology. For the purpose of applicable data protection laws, the <strong>Data Controller</strong> is the Organizing Committee of ROBOTICS-2026.
            </p>
            <p className="mb-4">
              We are committed to protecting and respecting your privacy. This privacy policy explains the types of personal information we collect, how we use that information, who we share it with, how we protect that information, and your legal rights in relation to your information. We are committed to abiding by this privacy policy, as well as the requirements of applicable laws, in the operation of our business.
            </p>
            <p className="mb-4">
              Please read this policy carefully as it explains our views and practices regarding your personal information and how it is handled. By accessing or browsing our websites, attending our events in person or virtually, you confirm that you have read, understood, and agree to this privacy policy in its entirety.
            </p>
          </section>

          {/* 2. Information we hold */}
          <section>
            <h3 className="text-xl font-bold text-[#2e376d] mb-4 border-l-4 border-[#2e376d] pl-3">
              Information We May Hold About You
            </h3>
            <p className="mb-4">
              This policy covers all personal information collected and used by ROBOTICS-2026. In this policy "personal information" means information that (either in isolation or in combination with other information held by us) enables you to be identified as an individual or recognized directly or indirectly. This may include:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4 ml-4">
              <li>Your name, date of birth, gender, postal address, email address, computer IP address, and phone number.</li>
              <li>Credit card number, payment processing information, and billing details.</li>
              <li>Login information and technical information from the devices you use to receive our services.</li>
              <li>
                Information from or about you which is uploaded to any virtual event platform, or generated on it or recorded through it – for example recordings of speeches or presentations, chat content, questions, poll results, and audio-visual content incorporating your likeness, image, or opinions.
              </li>
            </ul>
          </section>

          {/* 3. Collection */}
          <section>
            <h3 className="text-xl font-bold text-[#2e376d] mb-4 border-l-4 border-[#2e376d] pl-3">
              Collection of Personal Information
            </h3>
            <p className="mb-4">We may collect information about you from different sources detailed below.</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Information you give us</h4>
                <p>
                  When you access and browse our websites (including when you register for an event onsite or virtually or fill in forms on our websites) and when you correspond with us by phone or email or other electronic means, you may give us information about yourself. The information you give us may include your name, payment processing information, postal address, email address, landline and/or mobile telephone number, delivery details, dietary and access requirements, and information about your employment (including your job title, responsibilities, and employer’s details).
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Information we collect about you</h4>
                <p>
                  With regard to each of your visits to our website(s) (including any virtual event platform), we may also use cookies and other technologies to automatically collect the following information:
                </p>
                <ul className="list-disc pl-5 mt-2 ml-4">
                  <li>Technical information, including the Internet protocol (IP) address used to connect your computer to the internet, your login information, browser type and version, time zone setting, and operating systems.</li>
                  <li>Information about your visit, including the full Uniform Resource Locators (URL) clickstreams, products you viewed or searched for, page response times, download errors, and length of visits.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">Information we receive from other sources</h4>
                <p>
                  We may receive information about you from other services that we provide. We also work closely with third parties such as payment processors, hotel booking partners, and app providers and may receive information about you from them. We may also collect information about you from publicly available sources, including publicly available content on social media (e.g. your name, job title, and industry).
                </p>
              </div>
            </div>
          </section>

          {/* 4. Cookies */}
          <section>
            <h3 className="text-xl font-bold text-[#2e376d] mb-4 border-l-4 border-[#2e376d] pl-3">
              Cookies
            </h3>
            <p>
              Our websites use cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse the websites and also allows us to improve our websites. We utilize both essential cookies (required for site functionality) and analytical cookies.
            </p>
          </section>

          {/* 5. Usage Table */}
          <section>
            <h3 className="text-xl font-bold text-[#2e376d] mb-4 border-l-4 border-[#2e376d] pl-3">
              Our Use of Your Personal Information
            </h3>
            <p className="mb-4">We may use your personal information for the following purposes:</p>

            <div className="overflow-x-auto border rounded-lg shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-1/2">
                      Purpose / How we use personal information
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider w-1/2">
                      Legal Basis for Processing
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-xs md:text-sm">
                  {/* Row 1 */}
                  <tr>
                    <td className="px-4 py-3 align-top">
                      <strong>Provide you with goods and services:</strong> We use your info where necessary to perform our obligations under a contract with you (e.g., registration, abstract submission).
                    </td>
                    <td className="px-4 py-3 align-top bg-gray-50">
                      Necessary to perform our contractual obligations to you.
                    </td>
                  </tr>
                   {/* Row 2 */}
                   <tr>
                    <td className="px-4 py-3 align-top">
                      <strong>Ensure requirements are met:</strong> To better understand your requirements and preferences so we can provide a tailored experience.
                    </td>
                    <td className="px-4 py-3 align-top bg-gray-50">
                      Legitimate interest to personalize our events to better meet your needs as a customer.
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr>
                    <td className="px-4 py-3 align-top">
                      <strong>Process payments:</strong> To keep your payments safe and secure and protect against fraudulent transactions.
                    </td>
                    <td className="px-4 py-3 align-top bg-gray-50">
                      Legitimate interest to keep our customers' payments secure.
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr>
                    <td className="px-4 py-3 align-top">
                      <strong>Diagnose server problems:</strong> Using IP addresses to diagnose server issues or rectify technical issues with virtual events.
                    </td>
                    <td className="px-4 py-3 align-top bg-gray-50">
                      We will ask for your consent to the use of cookies before processing.
                    </td>
                  </tr>
                  {/* Row 5 */}
                  <tr>
                    <td className="px-4 py-3 align-top">
                      <strong>Comply with legal requirements:</strong> Health and safety, Trade Sanctions, and financial auditing.
                    </td>
                    <td className="px-4 py-3 align-top bg-gray-50">
                      Legitimate interests to comply with legal requirements to which we are subject.
                    </td>
                  </tr>
                  {/* Row 6 */}
                  <tr>
                    <td className="px-4 py-3 align-top">
                      <strong>Virtual Event Functionality:</strong> To make recordings, chat functionality, and user-generated content available for future attendees.
                    </td>
                    <td className="px-4 py-3 align-top bg-gray-50">
                      Legitimate interest to provide functionality and enhance the experience at a virtual event.
                    </td>
                  </tr>
                   {/* Row 7 */}
                   <tr>
                    <td className="px-4 py-3 align-top">
                      <strong>Badge Scanning:</strong> Where you consent to having your badge scanned at an event by us or a third party (exhibitor/sponsor).
                    </td>
                    <td className="px-4 py-3 align-top bg-gray-50">
                      By allowing your badge to be scanned, you are consenting to your information being processed and shared with that third party.
                    </td>
                  </tr>
                   {/* Row 8 */}
                   <tr>
                    <td className="px-4 py-3 align-top">
                      <strong>News and Publishing:</strong> To provide news, features, video, podcasts, event recordings, and conference proceedings.
                    </td>
                    <td className="px-4 py-3 align-top bg-gray-50">
                      Legitimate interests to provide you with our news and insights content.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 6. Transfers */}
          <section>
            <h3 className="text-xl font-bold text-[#2e376d] mb-4 border-l-4 border-[#2e376d] pl-3">
              Transfers of Personal Information
            </h3>
            <p className="mb-4">
              We may share your personal information with affiliated organizations and selected third parties in connection with the event for direct marketing purposes, in order to enable you to access the services, provide you with customer support, and conduct other activities described in this policy.
            </p>
            <p className="mb-4">
              We use other companies, agents, or contractors ("Service Providers") to perform services on our behalf. For example, we may engage Service Providers to provide market research, marketing, advertising, event management (including logistics, health and safety, and audio-visual services), accommodation bookings, IT, and payment processing. These third parties are contractually bound only to use personal information to perform the services that we hire them to provide.
            </p>
            <p className="mb-4">
              <strong>Badge Scanning & Virtual Interaction:</strong> If you use one of our virtual products or choose to allow your badge to be scanned at an event, we may pass the information you provide to third parties. Generally, this will be via a process whereby you, as the user, visit or interact with a third party (e.g., visit a stand at an exhibition, have your badge scanned). In these cases, the data you provided to us will be given to the sponsor/exhibitor.
            </p>
          </section>

          {/* 7. Storage */}
          <section>
            <h3 className="text-xl font-bold text-[#2e376d] mb-4 border-l-4 border-[#2e376d] pl-3">
              Where We Store Your Data
            </h3>
            <p className="mb-4">
              The data that we collect from you may be transferred to, and stored at, a destination outside the UK or EEA (European Economic Area). It may also be processed by staff operating outside the UK or EEA who work for us or for one of our suppliers. We will take all steps that are mandatory or reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy and applicable data protection laws.
            </p>
          </section>

          {/* 8. Retention & Security */}
          <section className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#2e376d] mb-4 border-l-4 border-[#2e376d] pl-3">
                Data Retention
              </h3>
              <p>
                We store your data for no longer than necessary in relation to the purpose under which such data was collected. This is determined on a case-by-case basis and depends on things such as the nature of the data provided, why it was collected, the legal basis we rely upon, and our relevant legal or operational retention requirements. For example, if you request to delete your account, we still have to retain some data for fraud prevention purposes and financial auditing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#2e376d] mb-4 border-l-4 border-[#2e376d] pl-3">
                Security
              </h3>
              <p>
                We use administrative, technical, and physical measures to safeguard personal information against loss, theft, and unauthorized uses, access, or modifications. Certain areas of our websites may be password protected. Where we have given you (or where you have chosen) a password, you are responsible for keeping this password confidential.
              </p>
            </div>
          </section>

          {/* 9. Your Rights */}
          <section className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-[#2e376d] mb-6">
              Your Rights
            </h3>
            <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:gap-4">
                    <span className="font-bold text-gray-900 min-w-[200px]">Restriction:</span>
                    <span>You have the right to request the restriction or suppression of your personal data. Please contact us at the details below.</span>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4">
                    <span className="font-bold text-gray-900 min-w-[200px]">Revoke Consent:</span>
                    <span>You have the right to object to the processing of your data for direct marketing. You can opt-out by clicking the 'unsubscribe' link in any marketing email.</span>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4">
                    <span className="font-bold text-gray-900 min-w-[200px]">Access:</span>
                    <span>You have the right to ask us whether or not we process your personal data and to request information on the purposes of data processing.</span>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4">
                    <span className="font-bold text-gray-900 min-w-[200px]">Correction/Deletion:</span>
                    <span>You have the right to have your information corrected or deleted. Please send your request to our email and we will action it as soon as possible.</span>
                </div>
                <div className="flex flex-col md:flex-row md:gap-4">
                    <span className="font-bold text-gray-900 min-w-[200px]">Portability:</span>
                    <span>Where we hold personal information about you with your consent or for the performance of a contract, you have the right to ask us to provide that data in a structured, commonly used format.</span>
                </div>
            </div>
          </section>

          {/* 10. Changes & Contact */}
          <section className="border-t border-gray-200 pt-10">
            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <h3 className="text-lg font-bold text-[#2e376d] mb-3">Changes to our privacy policy</h3>
                    <p>
                    We reserve the right to amend this privacy policy at our sole discretion, without prior notice to you. We will notify you of any such changes (including when they will take effect). Your continued use of our services or our websites or attendance at the event following the posting of changes to these terms means that you consent to those changes.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-[#2e376d] mb-3">Contacting Us</h3>
                    <p className="mb-2">
                    If you have any questions about this privacy policy, you can email us at <a href="mailto:secretary@roboticsaisummit.com" className="text-blue-600 font-semibold">secretary@roboticsaisummit.com</a>.
                    </p>
                    <p>
                    If you wish to exercise your rights under applicable data protection law and this privacy policy, please contact us in writing at:
                    </p>
                    <address className="mt-4 not-italic bg-[#f8f9fa] p-4 rounded border border-gray-200 text-gray-600">
                        <strong>The Data Protection Officer</strong><br />
                        ROBOTICS-2026 Organizing Committee<br />
                        secretary@roboticsaisummit.com
                    </address>
                </div>
            </div>
          </section>

        </div>
      </main>

      <EndFooter />
    </div>
  );
};

export default PrivacyPolicyPage;