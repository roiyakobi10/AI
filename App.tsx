import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#f8fafc] flex items-center justify-center dir-rtl" style={{ direction: 'rtl' }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;700&display=swap');
          .glass-panel {
            background: rgba(30, 41, 59, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
        `}
      </style>

      <div className="glass-panel p-10 rounded-3xl shadow-2xl text-center max-w-md w-full mx-4">
        <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          AI Victory Quest
        </h1>
        <p className="text-lg mb-6 opacity-90">המערכת עלתה בהצלחה!</p>
        
        <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 mb-6">
          <p className="text-green-400 font-mono text-sm">✓ VITE BUILD SUCCESS</p>
        </div>

        <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all">
          המשך לקווסט
        </button>
      </div>
    </div>
  );
}
