import React, { useState } from 'react';

function App() {
  const [pipelineStatus, setPipelineStatus] = useState('Idle');
  const [logs, setLogs] = useState([]);

  const runPipeline = () => {
    setPipelineStatus('Deploying...');
    setLogs([]);

    const pipelineSteps = [
      "Initializing Vite build production optimization...",
      "Running: npm run build ... compilation successful.",
      "Creating automated snapshot: backups/index_backup_" + new Date().toISOString().slice(0,10) + ".html",
      "Copying assets to local Nginx root directory...",
      "Executing local Nginx configuration reload... Done.",
      "Syncing with GitHub cloud via token authentication...",
      "GitHub Webhook triggered for shrikantchourasiya/devops_mobile",
      "🚀 Vercel CI/CD Build Completed! React Production App is Live."
    ];

    pipelineSteps.forEach((log, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${log}`]);
        
        if (index === pipelineSteps.length - 1) {
          setPipelineStatus('Success');
        }
      }, index * 800);
    });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ maxWidth: '650px', width: '100%', backgroundColor: '#1e293b', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.4)', marginTop: '20px' }}>
        <h1 style={{ color: '#38bdf8', fontSize: '24px', textAlign: 'center', margin: '0 0 5px 0' }}>⚡ Shrikant's React DevOps Hub</h1>
        <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '14px', marginBottom: '25px' }}>Vite + React App Integrated with Automated Mobile CI/CD</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
          <div style={{ background: '#0f172a', padding: '12px', borderRadius: '8px', fontSize: '13px', border: '1px solid #334155' }}><strong>📱 Tech Stack:</strong> Vite + React.js</div>
          <div style={{ background: '#0f172a', padding: '12px', borderRadius: '8px', fontSize: '13px', border: '1px solid #334155' }}><strong>🌐 Local Server:</strong> Nginx on Termux</div>
          <div style={{ background: '#0f172a', padding: '12px', borderRadius: '8px', fontSize: '13px', border: '1px solid #334155' }}><strong>🛠️ Automation:</strong> Bash Shell Scripts</div>
          <div style={{ background: '#0f172a', padding: '12px', borderRadius: '8px', fontSize: '13px', border: '1px solid #334155' }}><strong>🚀 Cloud Deployment:</strong> Vercel CI/CD</div>
        </div>

        <div style={{ background: '#334155', padding: '15px', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold', fontSize: '16px', marginBottom: '20px', borderLeft: pipelineStatus === 'Success' ? '5px solid #4ade80' : pipelineStatus === 'Deploying...' ? '5px solid #fbcfe8' : '5px solid #64748b', color: pipelineStatus === 'Success' ? '#4ade80' : pipelineStatus === 'Deploying...' ? '#fbcfe8' : '#f8fafc' }}>
          Pipeline Status: {pipelineStatus}
        </div>

        <button 
          onClick={runPipeline}
          style={{ width: '100%', background: '#0284c7', color: 'white', border: 'none', padding: '14px', fontSize: '16px', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' }}
        >
          Trigger Mobile CI/CD Pipeline
        </button>

        <div style={{ background: '#020617', padding: '15px', borderRadius: '8px', fontFamily: 'Courier New, monospace', fontSize: '13px', color: '#38bdf8', minHeight: '180px', marginTop: '25px', border: '1px solid #334155', textAlign: 'left' }}>
          <div style={{ color: '#64748b', marginBottom: '10px' }}>// Pipeline logs will appear here...</div>
          {logs.map((log, index) => (
            <div key={index} style={{ color: '#4ade80', marginBottom: '6px' }}>{log}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
