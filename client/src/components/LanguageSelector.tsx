// // File: src/components/LanguageSelector.tsx
// import React, { ChangeEvent } from 'react';
// import { useTranslation } from 'react-i18next';
// import i18n from '../i18n'; 

// import { Globe } from 'lucide-react';

// function LanguageSelector(): JSX.Element {

//   const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
//     const selectedLang = e.target.value;
//     i18n.changeLanguage(selectedLang); // Sử dụng instance đúng
//     localStorage.setItem('lang', selectedLang);
//   };

//   return (
//     <div className="inline-flex items-center gap-2 border border-gray-300 px-4 py-2 rounded bg-white text-sm shadow-md">
//       <Globe className="w-5 h-5 text-gray-600" />
//       <select
//         onChange={handleChange}
//         value={i18n.language}
//         className="bg-white text-gray-800 text-sm px-2 py-1 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-gray-500 transition duration-200"
//       >
//         <option value="en">English</option>
//         <option value="vi">Tiếng Việt</option>
//       </select>
//     </div>
//   );
// }

// export default LanguageSelector;


import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

import { Globe } from 'lucide-react';

function LanguageSelector(): JSX.Element {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    localStorage.setItem('lang', selectedLang);
  };

  return (
    <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200">
      <Globe className="w-5 h-5 text-gray-600" />
      <select
        onChange={handleChange}
        value={i18n.language}
        className="bg-transparent text-gray-800 text-sm font-medium focus:outline-none"
      >
        <option value="vi">Tiếng Việt</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}

export default LanguageSelector;

