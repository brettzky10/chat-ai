import React from "react";
import {
  IconBriefcase,
  IconBulb,
  IconSchool,
  IconWriting,
  IconMoodSmile,
  IconHeart,
} from "@tabler/icons-react";
import ReactCountryFlag from "react-country-flag"

const categories = [
  { icon: "US", label: "English" },
  { icon: "ES", label: "Español" },
  { icon: "CN", label: "中國人" },
  { icon: "FR", label: "Français" },
  { icon: "DE", label: "Deutsch" },
  { icon: "IN", label: "हिंदी" },
  { icon: "", label: "many more..." },
];

const CategoryLinks: React.FC = () => {
  return (
    <div className="mt-10 sm:mt-20 items-center">
      {categories.map(({ icon, label }) => (
        <a
          key={label}
          className="m-1 py-2 px-3 inline-flex 
          items-center gap-x-2 text-sm font-medium 
          rounded-lg border border-gray-200 
          bg-white text-gray-800 shadow-sm hover:bg-gray-50
           disabled:opacity-50 disabled:pointer-events-none
            dark:bg-neutral-900 dark:border-neutral-700
             dark:text-white dark:hover:bg-neutral-800"
          href="#"
        >
          <ReactCountryFlag countryCode={icon} svg />
          {label}
        </a>
      ))}
    </div>
  );
};

export default CategoryLinks;