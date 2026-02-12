export default function PixelDecorations() {
  return (
    <div aria-hidden="true">
      {/* Floppy Disk */}
      <div className="pixel-decoration" style={{ top: '30%', left: '4%', animation: 'float 7s ease-in-out infinite' }}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ imageRendering: 'pixelated' }}>
          <rect x="8" y="4" width="48" height="56" rx="3" fill="#484850" stroke="#68686e" strokeWidth="2.5"/>
          <rect x="18" y="4" width="24" height="20" rx="1" fill="#3a3a40"/>
          <rect x="26" y="8" width="12" height="12" rx="1" fill="#58585e"/>
          <rect x="14" y="36" width="36" height="20" rx="2" fill="#52525a"/>
          <line x1="18" y1="42" x2="46" y2="42" stroke="#68686e" strokeWidth="2"/>
          <line x1="18" y1="48" x2="40" y2="48" stroke="#68686e" strokeWidth="2"/>
        </svg>
      </div>

      {/* Monitor */}
      <div className="pixel-decoration" style={{ top: '15%', right: '5%', animation: 'drift 9s ease-in-out infinite' }}>
        <svg width="80" height="72" viewBox="0 0 80 72" fill="none" style={{ imageRendering: 'pixelated' }}>
          <rect x="4" y="4" width="72" height="48" rx="4" fill="#484850" stroke="#68686e" strokeWidth="2.5"/>
          <rect x="10" y="10" width="60" height="36" rx="2" fill="#2a2a30"/>
          <rect x="16" y="18" width="20" height="3" rx="1" fill="#6a8898"/>
          <rect x="16" y="24" width="32" height="3" rx="1" fill="#58585e"/>
          <rect x="16" y="30" width="14" height="3" rx="1" fill="#6a8898"/>
          <rect x="32" y="52" width="16" height="8" fill="#3a3a40"/>
          <rect x="24" y="60" width="32" height="4" rx="2" fill="#3a3a40" stroke="#68686e" strokeWidth="1.5"/>
        </svg>
      </div>

      {/* Keyboard */}
      <div className="pixel-decoration" style={{ bottom: '22%', left: '6%', animation: 'bob 8s ease-in-out infinite' }}>
        <svg width="96" height="48" viewBox="0 0 96 48" fill="none" style={{ imageRendering: 'pixelated' }}>
          <rect x="2" y="2" width="92" height="44" rx="5" fill="#484850" stroke="#68686e" strokeWidth="2"/>
          <rect x="8" y="8" width="10" height="8" rx="2" fill="#52525a" stroke="#5a5a62" strokeWidth="1"/>
          <rect x="22" y="8" width="10" height="8" rx="2" fill="#52525a" stroke="#5a5a62" strokeWidth="1"/>
          <rect x="36" y="8" width="10" height="8" rx="2" fill="#52525a" stroke="#5a5a62" strokeWidth="1"/>
          <rect x="50" y="8" width="10" height="8" rx="2" fill="#52525a" stroke="#5a5a62" strokeWidth="1"/>
          <rect x="64" y="8" width="10" height="8" rx="2" fill="#52525a" stroke="#5a5a62" strokeWidth="1"/>
          <rect x="78" y="8" width="10" height="8" rx="2" fill="#52525a" stroke="#5a5a62" strokeWidth="1"/>
          <rect x="12" y="20" width="10" height="8" rx="2" fill="#52525a" stroke="#5a5a62" strokeWidth="1"/>
          <rect x="26" y="20" width="10" height="8" rx="2" fill="#52525a" stroke="#5a5a62" strokeWidth="1"/>
          <rect x="40" y="20" width="10" height="8" rx="2" fill="#52525a" stroke="#5a5a62" strokeWidth="1"/>
          <rect x="54" y="20" width="10" height="8" rx="2" fill="#52525a" stroke="#5a5a62" strokeWidth="1"/>
          <rect x="68" y="20" width="10" height="8" rx="2" fill="#52525a" stroke="#5a5a62" strokeWidth="1"/>
          <rect x="22" y="32" width="52" height="8" rx="2" fill="#52525a" stroke="#5a5a62" strokeWidth="1"/>
        </svg>
      </div>

      {/* CD / Disc */}
      <div className="pixel-decoration" style={{ top: '45%', right: '4%', animation: 'spin-slow 12s linear infinite' }}>
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" style={{ imageRendering: 'pixelated' }}>
          <circle cx="36" cy="36" r="32" fill="#484850" stroke="#68686e" strokeWidth="2.5"/>
          <circle cx="36" cy="36" r="24" fill="none" stroke="#58585e" strokeWidth="1" opacity="0.6"/>
          <circle cx="36" cy="36" r="16" fill="none" stroke="#6a8898" strokeWidth="1.5" opacity="0.5"/>
          <circle cx="36" cy="36" r="8" fill="#58585e" stroke="#68686e" strokeWidth="2"/>
          <circle cx="36" cy="36" r="3" fill="#6a8898"/>
          <path d="M36 4 A32 32 0 0 1 68 36" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="4"/>
        </svg>
      </div>

      {/* Cursor Arrow */}
      <div className="pixel-decoration" style={{ bottom: '12%', right: '8%', animation: 'float-reverse 6.5s ease-in-out infinite' }}>
        <svg width="40" height="52" viewBox="0 0 40 52" fill="none" style={{ imageRendering: 'pixelated' }}>
          <path d="M4 4 L4 44 L14 34 L24 48 L30 44 L20 30 L34 30 Z" fill="#484850" stroke="#68686e" strokeWidth="2.5" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Document / File */}
      <div className="pixel-decoration" style={{ bottom: '35%', left: '3%', animation: 'drift 10s ease-in-out infinite reverse' }}>
        <svg width="52" height="64" viewBox="0 0 52 64" fill="none" style={{ imageRendering: 'pixelated' }}>
          <path d="M4 4 L36 4 L48 16 L48 60 L4 60 Z" fill="#52525a" stroke="#68686e" strokeWidth="2"/>
          <path d="M36 4 L36 16 L48 16" fill="#3a3a40" stroke="#68686e" strokeWidth="1.5"/>
          <line x1="12" y1="26" x2="40" y2="26" stroke="#68686e" strokeWidth="2"/>
          <line x1="12" y1="34" x2="36" y2="34" stroke="#68686e" strokeWidth="2"/>
          <line x1="12" y1="42" x2="40" y2="42" stroke="#68686e" strokeWidth="2"/>
          <line x1="12" y1="50" x2="28" y2="50" stroke="#68686e" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
}
