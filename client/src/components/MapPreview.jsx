export default function MapPreview() {
    return (
      <div className="relative rounded-3xl overflow-hidden h-[300px] border border-white/10 bg-gradient-to-br from-emerald-500/10 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.2),transparent_60%)]" />
  
        <div className="absolute top-10 left-10 w-5 h-5 bg-yellow-300 rounded-full animate-ping" />
  
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-emerald-400 rounded-full animate-bounce" />
  
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-2xl font-bold text-white/80">
            Live Neighborhood Map
          </h2>
        </div>
      </div>
    );
  }