interface WindowFrameProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function WindowFrame({ title, children, className = '' }: WindowFrameProps) {
  return (
    <div className={`window-frame ${className}`}>
      <div className="window-titlebar">
        <div className="window-controls">
          <span className="window-dot dot-close" />
          <span className="window-dot dot-minimize" />
          <span className="window-dot dot-maximize" />
        </div>
        <span className="window-title">{title}</span>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
}
