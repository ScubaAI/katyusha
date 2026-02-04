// apps/dashboard/app/page.tsx
import React from 'react';

export default function KatyushaDashboard() {
  return (
    <main className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-640 mx-auto">
        <header className="border-b border-zinc-800 pb-6 mb-8">
          <h1 className="text-4xl font-bold tracking-tighter text-red-500">
            KATYUSHA <span className="text-zinc-500 text-xl font-normal">v1.0</span>
          </h1>
          <p className="text-zinc-400">Autonomous Economic Agent on Solana</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Status Card */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg">
            <h2 className="text-zinc-500 uppercase text-xs font-bold mb-4">Agent Status</h2>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xl font-mono tracking-widest">ACTIVE</span>
            </div>
          </div>

          {/* Treasury Card */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg">
            <h2 className="text-zinc-500 uppercase text-xs font-bold mb-4">Treasury (SOL)</h2>
            <span className="text-3xl font-mono">0.00 <span className="text-sm text-zinc-600">SOL</span></span>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-xl mb-4 text-zinc-300">Recent Autonomous Activity</h2>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 text-center">
            <p className="text-zinc-600 italic">Waiting for the first market analysis cycle...</p>
          </div>
        </section>
      </div>
    </main>
  );
}