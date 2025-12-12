import React, { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Palette, Globe, Moon, Sun, Loader2, ArrowRight, Dna, FileText, CheckCircle } from 'lucide-react';
import { REPORT_DATA_EN, REPORT_DATA_ZH, PAINTER_STYLES } from './constants';
import { Language, PainterStyle } from './types';

// --- Components ---

// 1. Lucky Wheel Component
const LuckyWheelModal = ({ 
  isOpen, 
  onClose, 
  onSelect 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onSelect: (style: PainterStyle) => void 
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  if (!isOpen) return null;

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    
    // Random spin: at least 5 full rotations (1800 deg) + random segment
    const segmentAngle = 360 / PAINTER_STYLES.length;
    const randomSegment = Math.floor(Math.random() * PAINTER_STYLES.length);
    const extraDegrees = randomSegment * segmentAngle;
    const totalRotation = rotation + 1800 + (360 - (rotation % 360)) + extraDegrees;

    setRotation(totalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      // The styles array is 0-indexed, but the wheel rotates clockwise. 
      // We need to calculate which index is at the top (pointer).
      // Simplified: Just pick the random target we selected.
      onSelect(PAINTER_STYLES[PAINTER_STYLES.length - 1 - randomSegment]);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-xl p-8 shadow-2xl max-w-md w-full relative overflow-hidden">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Choose Your Artist</h2>
        
        <div className="relative w-64 h-64 mx-auto mb-8">
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10 w-4 h-8 bg-red-600 rounded-b-lg shadow-md border-2 border-white"></div>
            
            {/* Wheel */}
            <div 
                className="w-full h-full rounded-full border-4 border-gray-200 shadow-inner wheel-container relative overflow-hidden"
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                {PAINTER_STYLES.map((style, index) => {
                    const angle = 360 / PAINTER_STYLES.length;
                    return (
                        <div 
                            key={style.id}
                            className="absolute top-0 left-1/2 w-1/2 h-full origin-left"
                            style={{ 
                                transform: `rotate(${index * angle}deg)`,
                                transformOrigin: '0% 50%',
                            }}
                        >
                            <div 
                                className="w-full h-full"
                                style={{ 
                                    backgroundColor: index % 2 === 0 ? '#f3f4f6' : '#e5e7eb',
                                    clipPath: 'polygon(0 50%, 100% 0, 100% 100%)'
                                }}
                            >
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        <div className="flex justify-center gap-4">
            <button 
                onClick={spin} 
                disabled={isSpinning}
                className={`px-6 py-3 rounded-full font-bold text-white transition-all ${isSpinning ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 hover:shadow-lg'}`}
            >
                {isSpinning ? 'Spinning...' : 'Spin the Wheel!'}
            </button>
            <button 
                onClick={onClose}
                disabled={isSpinning}
                className="px-6 py-3 rounded-full font-medium text-gray-600 hover:bg-gray-100"
            >
                Close
            </button>
        </div>
      </div>
    </div>
  );
};

// 2. Chart Components
const CustomBarChart = ({ data, title, color }: { data: any[], title: string, color: string }) => (
  <div className="h-[300px] w-full mt-4">
    <h4 className="text-center font-semibold mb-2 opacity-80">{title}</h4>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" width={120} tick={{fontSize: 12}} />
        <Tooltip contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '8px', color: '#333' }} />
        <Bar dataKey="value" fill={color} radius={[0, 4, 4, 0]} animationDuration={1500} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const CustomPieChart = ({ data, title, colors }: { data: any[], title: string, colors: string[] }) => (
  <div className="h-[300px] w-full mt-4">
    <h4 className="text-center font-semibold mb-2 opacity-80">{title}</h4>
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '8px', color: '#333' }} />
        <Legend verticalAlign="bottom" height={36}/>
      </PieChart>
    </ResponsiveContainer>
  </div>
);

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [isDark, setIsDark] = useState(false);
  const [currentStyle, setCurrentStyle] = useState<PainterStyle>(PAINTER_STYLES[0]);
  const [isWheelOpen, setIsWheelOpen] = useState(false);

  const content = lang === 'zh' ? REPORT_DATA_ZH : REPORT_DATA_EN;

  // Derive dynamic classes based on selection
  const appClasses = useMemo(() => {
    let base = `min-h-screen transition-colors duration-500 ${currentStyle.font === 'serif' ? 'font-serif' : currentStyle.font === 'mono' ? 'font-mono' : 'font-sans'} `;
    
    // If it's the default style, respect dark mode. 
    // If it's a painter style, force the painter's palette to ensure artistic integrity.
    if (currentStyle.id === 'default') {
      base += isDark 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-slate-50 text-slate-900';
    } else {
      base += `${currentStyle.palette.background} ${currentStyle.palette.text}`;
    }
    
    return base;
  }, [isDark, currentStyle]);

  const cardClass = useMemo(() => {
    if (currentStyle.id === 'default') {
      return isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-slate-200 shadow-md';
    }
    return `${currentStyle.palette.secondary} ${currentStyle.palette.border} border-2 shadow-lg`;
  }, [isDark, currentStyle]);

  const accentTextClass = useMemo(() => {
     if (currentStyle.id === 'default') return 'text-blue-600 dark:text-blue-400';
     return currentStyle.palette.primary;
  }, [currentStyle]);

  const accentBgClass = useMemo(() => {
    if (currentStyle.id === 'default') return 'bg-blue-600 hover:bg-blue-700 text-white';
    return `${currentStyle.palette.accent} text-white hover:opacity-90`;
  }, [currentStyle]);

  const chartColors = useMemo(() => {
      // Generate colors based on the current palette
      // For default, use standard hex. For painters, we'd ideally map the Tailwind class to Hex, 
      // but for simplicity in Recharts we'll use a standard set or modify based on ID.
      if (currentStyle.id === 'default') return ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
      if (currentStyle.id === 'vangogh') return ['#f4d03f', '#2c5282', '#d35400', '#1e3a5f'];
      if (currentStyle.id === 'mondrian') return ['#ff0000', '#ffff00', '#0000ff', '#000000'];
      return ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#8dd1e1'];
  }, [currentStyle]);

  return (
    <div className={appClasses} style={{ backgroundImage: currentStyle.texture }}>
      {/* Navigation / Header */}
      <nav className={`sticky top-0 z-40 backdrop-blur-md border-b ${currentStyle.id === 'default' ? (isDark ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200') : `${currentStyle.palette.secondary} ${currentStyle.palette.border}` }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <FileText className={currentStyle.id === 'default' ? 'text-blue-500' : currentStyle.palette.primary} />
              <span className={`font-bold text-lg ${accentTextClass}`}>{lang === 'zh' ? 'TFDA 報告' : 'TFDA Report'}</span>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Style Selector */}
              <button 
                onClick={() => setIsWheelOpen(true)}
                className={`p-2 rounded-full transition-colors flex items-center gap-2 px-3 ${currentStyle.id === 'default' ? (isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100') : 'hover:brightness-90 bg-white/20'}`}
                title="Spin for Art Style"
              >
                <Palette size={20} />
                <span className="hidden sm:inline text-sm font-medium">{currentStyle.name}</span>
              </button>

              {/* Theme Toggle (Only active if default style) */}
              {currentStyle.id === 'default' && (
                <button 
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              )}

              {/* Language Toggle */}
              <button 
                onClick={() => setLang(prev => prev === 'en' ? 'zh' : 'en')}
                className={`p-2 rounded-full flex items-center gap-1 font-mono text-sm ${currentStyle.id === 'default' ? (isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100') : 'hover:brightness-90 bg-white/20'}`}
              >
                <Globe size={18} />
                {lang.toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* Title Section */}
        <section className="text-center py-10 space-y-4">
          <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${accentTextClass}`}>
            {content.title}
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            {currentStyle.name !== 'Default (Modern)' && <span className="block text-sm mb-2 font-mono">Art Style: {currentStyle.name}</span>}
            User Survey & Analysis 2024
          </p>
        </section>

        {/* Executive Summary */}
        <section className={`p-8 rounded-2xl ${cardClass}`}>
          <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${accentTextClass}`}>
            <CheckCircle />
            {content.executiveSummary.title}
          </h2>
          <p className="leading-relaxed text-lg">
            {content.executiveSummary.content}
          </p>
        </section>

        {/* Info Grid - Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Chart 1 */}
          <div className={`p-6 rounded-xl ${cardClass}`}>
            <CustomPieChart 
              title={content.charts.demographics.title} 
              data={content.charts.demographics.data} 
              colors={chartColors}
            />
          </div>

          {/* Chart 2 */}
          <div className={`p-6 rounded-xl ${cardClass}`}>
             <CustomBarChart 
               title={content.charts.efficiency.title} 
               data={content.charts.efficiency.data} 
               color={chartColors[0]}
             />
          </div>

          {/* Chart 3 */}
          <div className={`p-6 rounded-xl ${cardClass}`}>
            <CustomPieChart 
              title={content.charts.slowdown.title} 
              data={content.charts.slowdown.data} 
              colors={chartColors}
            />
          </div>

          {/* Chart 4 */}
          <div className={`p-6 rounded-xl ${cardClass}`}>
             <CustomBarChart 
               title={content.charts.improvements.title} 
               data={content.charts.improvements.data} 
               color={chartColors[1]}
             />
          </div>
        </div>

        {/* Full Width AI Section */}
        <section className={`p-8 rounded-2xl ${cardClass}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${accentTextClass}`}>
                <Dna />
                {content.sections.bottlenecks}
              </h2>
              <p className="mb-4 opacity-90 leading-relaxed">
                {lang === 'zh' 
                  ? "審查人員的時間主要消耗在「找資料」和「讀報告」。大量的技術文件和臨床前數據需要時間消化和比對。AI 智慧助理能有效解決此問題。" 
                  : "Reviewers spend most time 'retrieving data' and 'reading reports'. Massive technical documents require significant time to digest. AI assistants are the key solution."}
              </p>
              <div className="space-y-2">
                 <div className="flex items-center gap-2">
                   <div className={`w-3 h-3 rounded-full ${accentBgClass}`}></div>
                   <span>{content.charts.aiTools.data[0].name}</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className={`w-3 h-3 rounded-full ${accentBgClass}`}></div>
                   <span>{content.charts.aiTools.data[1].name}</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className={`w-3 h-3 rounded-full ${accentBgClass}`}></div>
                   <span>{content.charts.aiTools.data[2].name}</span>
                 </div>
              </div>
            </div>
            <div className="h-[350px]">
               <CustomBarChart 
                  title={content.charts.aiTools.title} 
                  data={content.charts.aiTools.data} 
                  color={chartColors[2]} 
               />
            </div>
          </div>
        </section>

        {/* Key Entities */}
        <section>
          <h2 className={`text-2xl font-bold mb-6 ${accentTextClass}`}>{content.sections.entities}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.lists.entities.map((entity) => (
              <div key={entity.id} className={`p-4 rounded-lg border ${cardClass} hover:translate-y-[-2px] transition-transform`}>
                <div className={`text-xs font-bold uppercase mb-1 opacity-60 ${accentTextClass}`}>#{entity.id}</div>
                <h3 className="font-bold text-lg mb-2">{entity.name}</h3>
                <p className="text-sm opacity-75">{entity.context}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Follow-up Questions */}
        <section className={`p-8 rounded-2xl ${cardClass}`}>
          <h2 className={`text-2xl font-bold mb-8 ${accentTextClass}`}>{content.sections.questions}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {content.lists.questions.map((group, idx) => (
              <div key={idx}>
                <h3 className={`text-xl font-semibold mb-4 border-b pb-2 ${currentStyle.palette.border} ${accentTextClass}`}>{group.category}</h3>
                <ul className="space-y-3">
                  {group.items.map((q, qIdx) => (
                    <li key={qIdx} className="flex gap-3 items-start">
                      <ArrowRight size={18} className={`mt-1 flex-shrink-0 opacity-50`} />
                      <span className="leading-snug">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className={`py-8 text-center opacity-60 text-sm ${currentStyle.id === 'default' && isDark ? 'text-gray-400' : ''}`}>
        <p>&copy; 2024 TFDA User Survey Report. Generated with React & Tailwind.</p>
      </footer>

      {/* Modals */}
      <LuckyWheelModal 
        isOpen={isWheelOpen} 
        onClose={() => setIsWheelOpen(false)} 
        onSelect={(style) => {
          setCurrentStyle(style);
          setIsWheelOpen(false);
        }}
      />

    </div>
  );
}