import { PainterStyle, ReportContent } from './types';

// --- 1. Report Data (Bilingual) ---

export const REPORT_DATA_ZH: ReportContent = {
  title: "TFDA電子化送件使用者調查綜合報告",
  executiveSummary: {
    title: "I. 執行摘要",
    content: "本報告彙整 41 筆有效回饋。多數使用者肯定系統在資料存取與追蹤的優勢（平均效率評分 4.05/5），但「系統穩定性」、「介面操作便利性」及「大量檔案處理速度」是核心痛點。使用者對導入 AI 期望極高，特別是自動摘要、文件比對與不一致性標記。未來需優先處理效能問題並策略性導入 AI。"
  },
  background: {
    title: "II. 調查背景與結構",
    content: "受訪者以 TFDA 承辦人為主 (61%)，多數使用系統 1-3 年。調查旨在優化醫療器材查驗登記流程，了解作業瓶頸與 AI 需求。"
  },
  charts: {
    demographics: {
      title: "受訪者職務分佈",
      data: [
        { name: "TFDA 承辦人", value: 25 },
        { name: "CDE", value: 7 },
        { name: "TFDA 覆核", value: 5 },
        { name: "工研院", value: 4 },
      ]
    },
    efficiency: {
      title: "審查效率提升認同度 (1-5分)",
      data: [
        { name: "5分 (非常同意)", value: 9 },
        { name: "4分", value: 17 },
        { name: "3分", value: 8 },
        { name: "2分", value: 3 },
        { name: "1分", value: 0 },
      ]
    },
    slowdown: {
      title: "尖峰時段系統變慢頻率",
      data: [
        { name: "偶爾發生", value: 24 },
        { name: "經常發生", value: 11 },
        { name: "很少發生", value: 5 },
        { name: "從未發生", value: 1 },
      ]
    },
    improvements: {
      title: "最需改進的部分 (Top 3)",
      data: [
        { name: "介面操作便利性", value: 10 },
        { name: "資料呈現/上傳速度", value: 9 },
        { name: "審查進度提醒", value: 7 },
      ]
    },
    timeConsuming: {
      title: "最耗時環節",
      data: [
        { name: "資料檢索", value: 17 },
        { name: "技術文件審查", value: 17 },
        { name: "同類器材比對", value: 13 },
        { name: "標籤說明書審查", value: 12 },
      ]
    },
    aiTools: {
      title: "最需要的 AI 工具",
      data: [
        { name: "自動摘要", value: 14 },
        { name: "不一致性標記", value: 13 },
        { name: "類似產品比對", value: 11 },
        { name: "預審摘要生成", value: 7 },
      ]
    }
  },
  sections: {
    bottlenecks: "IV. 審查作業瓶頸",
    recommendations: "V. 綜合建議",
    entities: "VI. 關鍵實體 (20 Entities)",
    questions: "VII. 20 個綜合追蹤問題"
  },
  lists: {
    entities: [
      { id: 1, name: "審查資料檢索速度", context: "表現優異功能排名第一" },
      { id: 2, name: "介面操作的便利性", context: "最需改進部分排名第一" },
      { id: 3, name: "資料呈現與上傳速度", context: "系統變慢的直接原因" },
      { id: 4, name: "大量送審資料的檢索", context: "最耗時環節之一" },
      { id: 5, name: "技術文件審查", context: "AI 自動摘要的首要目標" },
      { id: 6, name: "同類器材比對", context: "AI 協助處理的重點" },
      { id: 7, name: "尖峰時段變慢", context: "85% 使用者曾遭遇" },
      { id: 8, name: "自動摘要", context: "最有幫助的 AI 工具 No.1" },
      { id: 9, name: "自動不一致性標記", context: "提升審查精準度" },
      { id: 10, name: "自動比對類似產品", context: "解決耗時問題" },
      { id: 11, name: "案件進度追蹤", context: "系統結構性優勢" },
      { id: 12, name: "公文系統介接", context: "強烈待改進需求" },
      { id: 13, name: "檔案檔名顯示", context: "介面設計痛點" },
      { id: 14, name: "審查進度提醒", context: "主要改進需求" },
      { id: 15, name: "離線版功能", context: "建議關閉以防格式混亂" },
      { id: 16, name: "標籤說明書審查", context: "與紙本政策衝突" },
      { id: 17, name: "紙本作業衝突", context: "展延案件流程中斷" },
      { id: 18, name: "預審摘要生成", context: "協助快速掌握核心" },
      { id: 19, name: "資料組織性", context: "電子送件優勢" },
      { id: 20, name: "TFDA/CDE 交互查詢", context: "跨單位協作需求" },
    ],
    questions: [
      {
        category: "A. 系統效能與操作",
        items: [
          "TFDA 是否有架構升級計畫以改善介面便利性與速度？",
          "如何透過負載平衡或雲端擴展解決尖峰時段變慢？",
          "如何重新設計檔案管理介面以解決檔名顯示與點閱紀錄問題？",
          "能否提升檔案上傳限制或增加前置檢查機制？",
          "是否導入針對補件與公文時程的自動化提醒？"
        ]
      },
      {
        category: "B. 流程與整合",
        items: [
          "與公文系統介接的具體時間表為何？",
          "是否設計決行後有限制修正機制以符合紙本紀錄？",
          "是否有中長期計畫將所有文件全面電子化以解決紙本衝突？",
          "TFDA/CDE 資料庫交互查詢的計畫與同步頻率為何？",
          "是否有計畫增強廠商上傳介面的強制性檢查？"
        ]
      },
      {
        category: "C. AI 工具導入",
        items: [
          "自動摘要技術將優先應用於哪類文件？準確性如何評估？",
          "自動標記不一致性是否涵蓋跨文件與法規比對？",
          "類似產品比對的資料庫來源與維度如何規劃？",
          "是否設置專案小組與工研院合作開發專屬 AI 模型？",
          "自動生成審查意見的定位是草擬還是事實陳述？"
        ]
      },
      {
        category: "D. 政策與規範",
        items: [
          "是否重新評估並限制電子送件離線版功能？",
          "如何解決免附紙本政策導致的列印成本轉嫁？",
          "如何設計有效的系統回饋機制？",
          "未來是否針對承辦人/覆核/CDE 設計客製化介面？",
          "是否導入案件知識圖譜以利延續審查紀錄？"
        ]
      }
    ]
  }
};

export const REPORT_DATA_EN: ReportContent = {
  title: "TFDA E-Submission User Survey Report",
  executiveSummary: {
    title: "I. Executive Summary",
    content: "Based on 41 valid responses, this report highlights that while the e-submission system is praised for data access and tracking (Efficiency Score 4.05/5), 'System Stability', 'Interface Usability', and 'Massive File Processing' remain critical pain points. There is high demand for AI integration, specifically for Automatic Summarization, Inconsistency Flagging, and Product Comparison. Efficiency and Interface optimization must be prioritized."
  },
  background: {
    title: "II. Background & Demographics",
    content: "Respondents are primarily TFDA Case Officers (61%), with most using the system for 1-3 years. The survey aims to optimize the medical device registration process and identify AI needs."
  },
  charts: {
    demographics: {
      title: "Respondent Roles",
      data: [
        { name: "TFDA Officer", value: 25 },
        { name: "CDE", value: 7 },
        { name: "TFDA Reviewer", value: 5 },
        { name: "ITRI", value: 4 },
      ]
    },
    efficiency: {
      title: "Efficiency Rating (1-5)",
      data: [
        { name: "5 (High)", value: 9 },
        { name: "4", value: 17 },
        { name: "3", value: 8 },
        { name: "2", value: 3 },
        { name: "1 (Low)", value: 0 },
      ]
    },
    slowdown: {
      title: "System Slowdown Frequency",
      data: [
        { name: "Occasional", value: 24 },
        { name: "Frequent", value: 11 },
        { name: "Rare", value: 5 },
        { name: "Never", value: 1 },
      ]
    },
    improvements: {
      title: "Top Improvement Areas",
      data: [
        { name: "Interface Usability", value: 10 },
        { name: "Data Speed", value: 9 },
        { name: "Notifications", value: 7 },
      ]
    },
    timeConsuming: {
      title: "Most Time-Consuming Tasks",
      data: [
        { name: "Data Retrieval", value: 17 },
        { name: "Tech Doc Review", value: 17 },
        { name: "Comparison", value: 13 },
        { name: "Labeling Review", value: 12 },
      ]
    },
    aiTools: {
      title: "Desired AI Tools",
      data: [
        { name: "Auto Summary", value: 14 },
        { name: "Inconsistency Flag", value: 13 },
        { name: "Product Comparison", value: 11 },
        { name: "Pre-review Summary", value: 7 },
      ]
    }
  },
  sections: {
    bottlenecks: "IV. Bottlenecks & AI Needs",
    recommendations: "V. Recommendations",
    entities: "VI. 20 Key Entities",
    questions: "VII. 20 Follow-up Questions"
  },
  lists: {
    entities: [
      { id: 1, name: "Data Retrieval Speed", context: "Top rated feature." },
      { id: 2, name: "Interface Usability", context: "Top improvement need." },
      { id: 3, name: "Upload/Render Speed", context: "Cause of slowdowns." },
      { id: 4, name: "Mass Data Retrieval", context: "Time-consuming task." },
      { id: 5, name: "Tech Doc Review", context: "Target for AI Summary." },
      { id: 6, name: "Peer Comparison", context: "Target for AI Comparison." },
      { id: 7, name: "Peak Slowdown", context: "Affected 85% of users." },
      { id: 8, name: "Auto Summary", context: "Most wanted AI tool." },
      { id: 9, name: "Inconsistency Flag", context: "For accuracy." },
      { id: 10, name: "Auto Comparison", context: "Solves manual effort." },
      { id: 11, name: "Progress Tracking", context: "System strength." },
      { id: 12, name: "Internal Integration", context: "Critical need." },
      { id: 13, name: "File Naming", context: "UX pain point." },
      { id: 14, name: "Progress Alerts", context: "Improvement area." },
      { id: 15, name: "Offline Version", context: "Version control risk." },
      { id: 16, name: "Label Review", context: "Policy conflict." },
      { id: 17, name: "Paperwork Conflict", context: "Workflow break." },
      { id: 18, name: "Pre-review Summary", context: "Quick insight." },
      { id: 19, name: "Data Organization", context: "Digital advantage." },
      { id: 20, name: "Cross-Agency Query", context: "Collaboration." },
    ],
    questions: [
      {
        category: "A. Performance & UX",
        items: [
          "Is there a plan for architecture upgrade for speed?",
          "How to handle peak-time load balancing?",
          "How to redesign file management UX?",
          "Can we improve upload validation?",
          "Can granular notifications be added?"
        ]
      },
      {
        category: "B. Workflow Integration",
        items: [
          "Timeline for internal doc system integration?",
          "Can we allow post-approval minor edits?",
          "Plan for full digitalization (paperless)?",
          "Plan for CDE/TFDA database syncing?",
          "Plan for mandatory upload validation?"
        ]
      },
      {
        category: "C. AI Adoption",
        items: [
          "Which docs will AI summary target first?",
          "Will inconsistency checking cover regulations?",
          "What is the data source for product comparison?",
          "Will there be a dedicated AI task force?",
          "Is AI output for drafting or fact-checking?"
        ]
      },
      {
        category: "D. Policy",
        items: [
          "Will offline version be restricted?",
          "How to handle printing costs for officers?",
          "How to implement an effective feedback loop?",
          "Will there be role-based UI customization?",
          "Will a knowledge graph be introduced?"
        ]
      }
    ]
  }
};

// --- 2. Painter Styles (20 Distinct Styles) ---

export const PAINTER_STYLES: PainterStyle[] = [
  {
    id: 'default',
    name: 'Default (Modern)',
    palette: { background: 'bg-slate-50', text: 'text-slate-900', primary: 'text-blue-900', secondary: 'bg-white', accent: 'bg-blue-600', border: 'border-slate-200' },
    font: 'sans'
  },
  {
    id: 'vangogh',
    name: 'Van Gogh',
    palette: { background: 'bg-[#1e3a5f]', text: 'text-[#f4d03f]', primary: 'text-[#e6b800]', secondary: 'bg-[#2c5282]', accent: 'bg-[#d35400]', border: 'border-[#f4d03f]' },
    font: 'serif',
    texture: 'linear-gradient(45deg, #1e3a5f 25%, #2c5282 25%, #2c5282 50%, #1e3a5f 50%, #1e3a5f 75%, #2c5282 75%, #2c5282 100%)'
  },
  {
    id: 'monet',
    name: 'Monet',
    palette: { background: 'bg-[#e0f2f1]', text: 'text-[#4a6fa5]', primary: 'text-[#6a8caf]', secondary: 'bg-[#f0fcf9]', accent: 'bg-[#b2dfdb]', border: 'border-[#80cbc4]' },
    font: 'serif'
  },
  {
    id: 'picasso',
    name: 'Picasso (Cubism)',
    palette: { background: 'bg-[#d6ccc2]', text: 'text-[#1a1a1a]', primary: 'text-[#8d6e63]', secondary: 'bg-[#f5f5f5]', accent: 'bg-[#bf360c]', border: 'border-[#3e2723]' },
    font: 'sans'
  },
  {
    id: 'mondrian',
    name: 'Mondrian',
    palette: { background: 'bg-white', text: 'text-black', primary: 'text-black', secondary: 'bg-white', accent: 'bg-[#ff0000]', border: 'border-black' },
    font: 'sans',
    texture: 'repeating-linear-gradient(0deg, transparent, transparent 49px, #000 49px, #000 51px), repeating-linear-gradient(90deg, transparent, transparent 49px, #000 49px, #000 51px)'
  },
  {
    id: 'dali',
    name: 'Dali',
    palette: { background: 'bg-[#f4a460]', text: 'text-[#4e342e]', primary: 'text-[#3e2723]', secondary: 'bg-[#ffcc80]', accent: 'bg-[#d84315]', border: 'border-[#8d6e63]' },
    font: 'serif'
  },
  {
    id: 'hokusai',
    name: 'Hokusai',
    palette: { background: 'bg-[#e3f2fd]', text: 'text-[#0d47a1]', primary: 'text-[#1565c0]', secondary: 'bg-[#bbdefb]', accent: 'bg-[#d32f2f]', border: 'border-[#1976d2]' },
    font: 'serif'
  },
  {
    id: 'warhol',
    name: 'Andy Warhol',
    palette: { background: 'bg-[#ffff00]', text: 'text-[#000000]', primary: 'text-[#ff00ff]', secondary: 'bg-[#00ffff]', accent: 'bg-[#ff00ff]', border: 'border-black' },
    font: 'sans'
  },
  {
    id: 'kahlo',
    name: 'Frida Kahlo',
    palette: { background: 'bg-[#c8e6c9]', text: 'text-[#1b5e20]', primary: 'text-[#b71c1c]', secondary: 'bg-[#a5d6a7]', accent: 'bg-[#d81b60]', border: 'border-[#2e7d32]' },
    font: 'sans'
  },
  {
    id: 'davinci',
    name: 'Da Vinci',
    palette: { background: 'bg-[#eecfa1]', text: 'text-[#3e2723]', primary: 'text-[#5d4037]', secondary: 'bg-[#f5deb3]', accent: 'bg-[#8d6e63]', border: 'border-[#5d4037]' },
    font: 'serif'
  },
  {
    id: 'klimt',
    name: 'Klimt',
    palette: { background: 'bg-[#212121]', text: 'text-[#ffd700]', primary: 'text-[#ffecb3]', secondary: 'bg-[#424242]', accent: 'bg-[#ffab00]', border: 'border-[#ffd700]' },
    font: 'serif'
  },
  {
    id: 'munch',
    name: 'Edvard Munch',
    palette: { background: 'bg-[#ffab91]', text: 'text-[#37474f]', primary: 'text-[#d84315]', secondary: 'bg-[#ffccbc]', accent: 'bg-[#455a64]', border: 'border-[#d84315]' },
    font: 'sans'
  },
  {
    id: 'okeeffe',
    name: 'Georgia O\'Keeffe',
    palette: { background: 'bg-[#fce4ec]', text: 'text-[#880e4f]', primary: 'text-[#c2185b]', secondary: 'bg-[#f8bbd0]', accent: 'bg-[#e91e63]', border: 'border-[#f06292]' },
    font: 'sans'
  },
  {
    id: 'rembrandt',
    name: 'Rembrandt',
    palette: { background: 'bg-[#3e2723]', text: 'text-[#d7ccc8]', primary: 'text-[#efebe9]', secondary: 'bg-[#4e342e]', accent: 'bg-[#ffab00]', border: 'border-[#8d6e63]' },
    font: 'serif'
  },
  {
    id: 'matisse',
    name: 'Henri Matisse',
    palette: { background: 'bg-[#e1f5fe]', text: 'text-[#01579b]', primary: 'text-[#d50000]', secondary: 'bg-[#b3e5fc]', accent: 'bg-[#ffea00]', border: 'border-[#0288d1]' },
    font: 'sans'
  },
  {
    id: 'pollock',
    name: 'Jackson Pollock',
    palette: { background: 'bg-[#eceff1]', text: 'text-[#263238]', primary: 'text-[#37474f]', secondary: 'bg-[#cfd8dc]', accent: 'bg-[#263238]', border: 'border-[#546e7a]' },
    font: 'sans',
    texture: 'radial-gradient(circle, #333 1px, transparent 1px), radial-gradient(circle, #333 1px, transparent 1px)'
  },
  {
    id: 'renoir',
    name: 'Renoir',
    palette: { background: 'bg-[#fff3e0]', text: 'text-[#5d4037]', primary: 'text-[#e65100]', secondary: 'bg-[#ffe0b2]', accent: 'bg-[#fb8c00]', border: 'border-[#ffb74d]' },
    font: 'serif'
  },
  {
    id: 'cezanne',
    name: 'Cézanne',
    palette: { background: 'bg-[#dcedc8]', text: 'text-[#33691e]', primary: 'text-[#558b2f]', secondary: 'bg-[#f1f8e9]', accent: 'bg-[#ef6c00]', border: 'border-[#7cb342]' },
    font: 'serif'
  },
  {
    id: 'hopper',
    name: 'Edward Hopper',
    palette: { background: 'bg-[#cfd8dc]', text: 'text-[#263238]', primary: 'text-[#37474f]', secondary: 'bg-[#b0bec5]', accent: 'bg-[#006064]', border: 'border-[#546e7a]' },
    font: 'sans'
  },
  {
    id: 'basquiat',
    name: 'Basquiat',
    palette: { background: 'bg-[#212121]', text: 'text-[#ffffff]', primary: 'text-[#ffff00]', secondary: 'bg-[#000000]', accent: 'bg-[#ff0000]', border: 'border-[#ffffff]' },
    font: 'mono'
  }
];