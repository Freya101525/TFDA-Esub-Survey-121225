export type Language = 'en' | 'zh';

export interface PainterStyle {
  id: string;
  name: string;
  palette: {
    background: string;
    text: string;
    primary: string; // Headlines
    secondary: string; // Cards/Subsections
    accent: string; // Buttons/Highlights
    border: string;
  };
  font: 'sans' | 'serif' | 'mono';
  texture?: string; // Optional CSS gradient or pattern
}

export interface ChartData {
  name: string;
  value: number;
  label?: string;
}

export interface ReportContent {
  title: string;
  executiveSummary: {
    title: string;
    content: string;
  };
  background: {
    title: string;
    content: string;
  };
  charts: {
    demographics: { title: string; data: ChartData[] };
    efficiency: { title: string; data: ChartData[] };
    slowdown: { title: string; data: ChartData[] };
    improvements: { title: string; data: ChartData[] };
    timeConsuming: { title: string; data: ChartData[] };
    aiTools: { title: string; data: ChartData[] };
  };
  sections: {
    bottlenecks: string;
    recommendations: string;
    entities: string;
    questions: string;
  };
  lists: {
    entities: { id: number; name: string; context: string }[];
    questions: { category: string; items: string[] }[];
  }
}