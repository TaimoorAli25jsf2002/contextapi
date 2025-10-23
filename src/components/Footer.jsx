import React from "react";

/**
 * Footer component
 * Props (optional):
 *  - repoUrl: link to your GitHub repo (falls back to VITE_REPO_URL env var or placeholder)
 *  - liveUrl: link to your Netlify live site (falls back to VITE_NETLIFY_URL env var or empty)
 *
 * Note: Do NOT put API keys here. This footer is just informational.
 */
export default function Footer({ repoUrl, liveUrl, live2Url, live3Url, live4Url }) {
  const repo = repoUrl || import.meta.env.VITE_REPO_URL || "https://github.com/TaimoorAli25jsf2002/react-api-project";
  const live = liveUrl || import.meta.env.VITE_NETLIFY_URL || "https://propsdemo.netlify.app/";
    const live2 = live2Url || import.meta.env.VITE_NETLIFY_URL || "https://usecontextdemo.netlify.app/";
     const live3 = live3Url || import.meta.env.VITE_NETLIFY_URL || "https://reduxappdemo.netlify.app/";
      const live4 = live4Url || import.meta.env.VITE_NETLIFY_URL || "https://zustanddemo.netlify.app/";
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto px-1 py-1 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Left: branding */}
        <div className="text-left">
          <div className="text-xl font-semibold text-cyan-700">Context API Presentation</div>
          <div className="text-sm text-gray-600">Props, Context Api and UseContext Hook</div>
        </div>

        

        {/* Right: links & copyright */}
        <div className="text-right">
          <div className="flex items-center justify-center md:justify-end gap-3 mb-2">
          
            {live ? (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 hover:text-blue-600 underline"
              >
                Props Demo
              </a>
            ) : null}

                   {live2 ? (
              <a
                href={live2}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 hover:text-blue-600 underline"
              >
                UseContext Demo
              </a>
            ) : null}

                   {live3 ? (
              <a
                href={live3}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 hover:text-blue-600 underline"
              >
                Redux Demo
              </a>
            ) : null}

                   {live4 ? (
              <a
                href={live4}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 hover:text-blue-600 underline"
              >
                Zustand Demo
              </a>
            ) : null}


          </div>
          

          <div className="text-xs text-gray-500">
             Navttc , GIFT University , {new Date().getFullYear()}, Presentation By Taimoor Ali
          </div>
        </div>
      </div>
    </footer>
  );
}
