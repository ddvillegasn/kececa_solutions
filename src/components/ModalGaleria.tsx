import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

interface ModalGaleriaProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
  description: string;
}

export default function ModalGaleria({ isOpen, onClose, images, title, description }: ModalGaleriaProps) {
  const [current, setCurrent] = useState(0);
  if (!isOpen) return null;

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full p-0 relative animate-fade-in flex flex-col" style={{ maxHeight: '95vh' }}>
        <div className="flex-shrink-0 p-6 border-b border-gray-200 dark:border-gray-800 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-500 z-10">×</button>
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 text-center">{title}</h2>
        </div>
        <div className="overflow-y-auto px-8 py-6" style={{ maxHeight: '80vh' }}>
          {/* Galería de imágenes arriba */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative flex items-center justify-center mb-2 w-full max-w-3xl mx-auto min-h-[320px]">
              <button onClick={prev} className="absolute left-0 px-3 py-2 text-3xl text-gray-600 hover:text-blue-600 z-10">❮</button>
              <img src={images[current]} alt={title + ' galería'} className="max-h-[70vh] max-w-3xl rounded-xl mx-auto object-contain bg-white shadow w-full" style={{maxWidth:'100%'}} />
              <button onClick={next} className="absolute right-0 px-3 py-2 text-3xl text-gray-600 hover:text-blue-600 z-10">❯</button>
            </div>
            <div className="flex justify-center gap-2 mb-2">
              {images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setCurrent(idx)}
                  className={`w-4 h-4 rounded-full border-2 ${idx === current ? 'bg-blue-600 border-blue-600' : 'bg-gray-300 border-gray-400'}`}
                  aria-label={`Ver imagen ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          {/* Texto profesional debajo de la galería */}
          <div className="prose prose-blue dark:prose-invert max-w-3xl mb-2 text-left mx-auto text-base leading-relaxed" style={{whiteSpace: 'normal'}}>
            <ReactMarkdown
              components={{
                p: ({node, ...props}) => <p {...props} className="mb-2 mt-0" />,
                ul: ({node, ...props}) => <ul {...props} className="list-disc pl-5 mb-2 mt-0" />,
                li: ({node, ...props}) => <li {...props} className="mb-1 mt-0" />,
                h2: ({node, ...props}) => <h2 {...props} className="text-lg font-bold mt-2 mb-1" />,
                a: ({node, ...props}) => <a {...props} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" />,
                strong: ({node, ...props}) => <strong {...props} className="font-semibold" />,
                em: ({node, ...props}) => <em {...props} className="italic" />,
                br: () => <br />,
              }}
            >
              {description}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
