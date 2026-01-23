
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-2">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2 mt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="text-blue-600 dark:text-blue-400 mt-0.5">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
