import { GITHUB_USERNAME } from "@/lib/content";

interface Day {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionsResponse {
  total: Record<string, number>;
  contributions: Day[];
}

async function getContributions(): Promise<ContributionsResponse | null> {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return (await res.json()) as ContributionsResponse;
  } catch {
    return null;
  }
}

export default async function Contributions() {
  const data = await getContributions();
  const profile = `https://github.com/${GITHUB_USERNAME}`;

  if (!data || data.contributions.length === 0) {
    return (
      <p className="graph-caption">
        contribution graph unavailable · <a href={profile}>github</a>
      </p>
    );
  }

  // Pad the start so the first column begins on a Sunday, like GitHub.
  const firstWeekday = new Date(`${data.contributions[0].date}T00:00:00Z`).getUTCDay();
  const cells: (Day | null)[] = [...Array<null>(firstWeekday).fill(null), ...data.contributions];
  const total = data.total.lastYear ?? data.contributions.reduce((sum, d) => sum + d.count, 0);

  return (
    <section aria-label="GitHub contributions">
      <div className="graph" style={{ gridTemplateColumns: `repeat(${Math.ceil(cells.length / 7)}, 1fr)` }}>
        {cells.map((day, i) =>
          day ? (
            <span
              key={day.date}
              className="cell"
              data-level={day.level}
              title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
            />
          ) : (
            <span key={`pad-${i}`} className="cell cell-empty" />
          ),
        )}
      </div>
      <p className="graph-caption">
        {total} contributions in the last year · <a href={profile}>github</a>
      </p>
    </section>
  );
}
