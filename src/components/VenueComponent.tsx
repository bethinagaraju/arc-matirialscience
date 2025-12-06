import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, Navigation, Building2 } from 'lucide-react';

function VenueComponent() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="p-4 md:p-6">
        
        {/* Section Header */}
        {/* <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-6">
          <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600">
            <Building2 className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Conference Venue</h2>
            <p className="text-gray-500 text-sm">Where innovation meets history</p>
          </div>
        </div> */}

        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Left Column: Details */}
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                  Official Venue
                </span>
              </div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Crowne Plaza - St. Peter's Rome</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Located in a green area near the Villa Doria Pamphili park, this prestigious 4-star superior hotel offers state-of-the-art conference facilities, a spa, and easy access to Vatican City.
              </p>


              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <MapPin className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Address</span>
                    <span className="text-gray-800 font-medium">Via Aurelia Antica, 415, 00165 Roma RM, Italy</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Phone className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Phone</span>
                    <a href="tel:+390666304000" className="text-gray-800 font-medium hover:text-indigo-600 transition-colors">
                      +39 06 6630 4000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Mail className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Email</span>
                    <a href="mailto:info.rome@crowneplaza.com" className="text-gray-800 font-medium hover:text-indigo-600 transition-colors">
                      info.rome@crowneplaza.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-auto">
              <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200">
                <Navigation className="w-4 h-4" /> Get Directions
              </button>
              <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:text-indigo-600 transition-colors">
                <ExternalLink className="w-4 h-4" /> Visit Website
              </button>
            </div>


                          <div className="mb-4 mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800 font-medium mb-2">Important Note:</p>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• The Hotel staff will only provide general information about the hotel and guest rooms; and are not responsible for any specific details about the conference.</li>
                  <li>• Please mention the conference name, dates along with the organizer "Magnus Group", if you wish to contact the hotel reception.</li>
                </ul>
              </div>
          </div>

          {/* Right Column: Map */}
          <div className="relative h-full min-h-[400px] lg:min-h-auto rounded-2xl overflow-hidden shadow-inner border border-gray-200 bg-gray-100">
            <iframe
              title="Venue Map"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Crowne+Plaza+Rome+-+St.+Peter's&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full object-cover"
            ></iframe>
            
            {/* Map Overlay Button (Optional visual flair) */}
            <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg text-xs font-bold text-gray-700 flex items-center gap-2 pointer-events-none">
              <MapPin className="w-4 h-4 text-red-500 fill-current" />
              Live Location
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default VenueComponent;