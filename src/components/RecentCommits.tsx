import Link from "next/link";
import { FaCodeBranch, FaExternalLinkAlt, FaExclamationTriangle } from "react-icons/fa";

interface KatibCommit {
  repo: string;
  message: string;
  hash: string;
  url: string;
  additions: number;
  deletions: number;
}

interface LanguageStat {
  name: string;
  percent: number;
  color: string;
}
const GITHUB_USERNAME = "klsova";

const LANG_COLORS: Record<string, string> = {
  "TypeScript": "#3178c6",
  "JavaScript": "#f1e05a",
  "Python": "#3572A5",
  "HTML": "#e34c26",
  "CSS": "#563d7c",
  "Java": "#b07219",
  "C#": "#178600",
  "Vue": "#41b883",
  "Shell": "#89e051",
  "Go": "#00ADD8",
  "Rust": "#dea584",
  "Swift": "#ffac45",
  "Kotlin": "#A97BFF",
  "PHP": "#4F5D95",
  "Ruby": "#701516",
  "C++": "#f34b7d",
  "C": "#555555",
};

async function getCommits(token: string) {
  try {
    const res = await fetch(
      `https://katib.jasoncameron.dev/commits/latest?username=${GITHUB_USERNAME}&limit=4`, 
      { 
        headers: { 
            "Authorization": `Bearer ${token}`,
            "User-Agent": "Portfolio-App"
        },
        next: { revalidate: 300 } 
      }
    );

    if (!res.ok) return { commits: [] };

    const data = await res.json();
    
    const rawList = [data, ...(data.parentCommits || [])].slice(0, 4);

    const commits = rawList.map((item: any) => ({
        repo: item.repo || data.repo || "repo",
        message: item.messageHeadline || "Commit",
        hash: item.oid ? item.oid.substring(0, 7) : "-------",
        url: item.commitUrl || "#",
        additions: item.additions || 0,
        deletions: item.deletions || 0,
    }));

    return { commits };
  } catch (error) {
    return { commits: [] };
  }
}

async function getGlobalLanguages(token: string) {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30&type=owner`,
      {
        headers: { 
            "Authorization": `Bearer ${token}`,
            "Accept": "application/vnd.github.v3+json"
        },
        next: { revalidate: 3600 }
      }
    );

    if (!res.ok) return [];

    const repos = await res.json();
    if (!Array.isArray(repos)) return [];

    const langCounts: Record<string, number> = {};
    let total = 0;

    repos.forEach((repo: any) => {
      if (repo.language && !repo.fork) {
        langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
        total++;
      }
    });

    if (total === 0) return [];

    const languages: LanguageStat[] = Object.keys(langCounts)
      .map(lang => ({
        name: lang,
        percent: parseFloat(((langCounts[lang] / total) * 100).toFixed(1)),
        color: LANG_COLORS[lang] || "#cccccc"
      }))
      .sort((a, b) => b.percent - a.percent);

    return languages;

  } catch (error) {
    return [];
  }
}

export default async function RecentCommits() {
  const token = process.env.GITHUB_TOKEN;
  const cleanToken = token ? token.replace(/"/g, '').trim() : "";

  if (!cleanToken) {
     return (
        <div className="commits-card">
            <div style={{ padding: '1rem', color: '#e07060', textAlign: 'center' }}>
                <FaExclamationTriangle /> Missing GITHUB_TOKEN
            </div>
        </div>
     );
  }

  const [commitsData, languages] = await Promise.all([
    getCommits(cleanToken),
    getGlobalLanguages(cleanToken)
  ]);

  const { commits } = commitsData;

  return (
    <div className="commits-card">
      <div className="commits-header">
        <FaCodeBranch className="header-icon" />
        <span>Recent Commits</span>
        <Link 
            href="https://katib.jasoncameron.dev/" 
            target="_blank" 
            className="header-info hover-highlight"
            title="Powered by Katib API"
        >
            [info]
        </Link>
      </div>

      <div className="commits-list">
        {(!commits || commits.length === 0) && (
             <div style={{ padding: '1rem', color: '#706058', textAlign: 'center', fontSize: '0.9rem' }}>
                No recent commits found.
            </div>
        )}

        {commits.map((commit: KatibCommit, index: number) => {
          const repoName = commit.repo.includes('/') ? commit.repo.split('/')[1] : commit.repo;
          const shortMsg = commit.message.length > 50 ? commit.message.substring(0, 50) + "..." : commit.message;

          return (
            <div key={commit.hash || index} className="commit-item">
              <span className="repo-name">{repoName}:</span>
              <span className="commit-msg" title={commit.message}>{shortMsg}</span>
              <span className="commit-stats">
                 <span className="additions">+{commit.additions}</span> 
                 / 
                 <span className="deletions">-{commit.deletions}</span>
              </span>
            </div>
          );
        })}
      </div>

      <div className="commits-footer">
        <Link href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" className="github-link">
          View on GitHub <FaExternalLinkAlt style={{ fontSize: '0.7rem' }} />
        </Link>
        
        <div className="language-bar" style={{ display: 'flex', width: '100%', height: '10px', marginTop: 'auto' }}>
            {languages.map((lang, index) => {
                const isFirst = index === 0;
                const isLast = index === languages.length - 1;

                return (
                <div 
                    key={lang.name}
                    className="lang-segment"
                    style={{ 
                        flexGrow: lang.percent, 
                        background: lang.color,
                        height: '100%',
                        borderTopLeftRadius: isFirst ? '6px' : '0',
                        borderBottomLeftRadius: isFirst ? '6px' : '0',
                        borderTopRightRadius: isLast ? '6px' : '0',
                        borderBottomRightRadius: isLast ? '6px' : '0'
                    }}
                >
                    <div className="custom-tooltip">
                        {lang.name} <span style={{ opacity: 0.6 }}>|</span> {lang.percent}%
                    </div>
                </div>
                );
            })}
            
            {/* Fallback if empty */}
            {languages.length === 0 && (
                <div style={{ width: '100%', background: '#b07848', height: '100%', borderRadius: '6px', opacity: 0.3 }} />
            )}
        </div>
      </div>
    </div>
  );
}