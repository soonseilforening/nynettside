export type RubicActivity = {
  date: string;
  time: string;
  title: string;
  url: string;
  description: string;
  location: string;
};

let counter = 0;

export function fetchRubicActivities(token: string, pageSize = 10): Promise<RubicActivity[]> {
  return new Promise((resolve, reject) => {
    const cb = `rubicCb_${Date.now()}_${counter++}`;
    const script = document.createElement('script');
    const timer = window.setTimeout(() => {
      cleanup();
      reject(new Error('Rubic timeout'));
    }, 10000);

    const win = window as unknown as Record<string, unknown>;

    function cleanup() {
      clearTimeout(timer);
      delete win[cb];
      script.remove();
    }

    win[cb] = (data: { html: string }) => {
      cleanup();
      resolve(parseRubicHtml(data.html));
    };

    script.onerror = () => {
      cleanup();
      reject(new Error('Rubic load error'));
    };

    script.src = `https://app.rubic.no/embed/embed.ashx?component=activities&rToken=${encodeURIComponent(
      token
    )}&pageSize=${pageSize}&callback=${cb}`;
    document.body.appendChild(script);
  });
}

function parseRubicHtml(html: string): RubicActivity[] {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return Array.from(doc.querySelectorAll('tbody tr'))
    .map((row) => {
      const cells = row.querySelectorAll('td, th');
      const link = cells[2]?.querySelector('a');
      return {
        date: cells[0]?.textContent?.trim() ?? '',
        time: cells[1]?.textContent?.trim() ?? '',
        title: (link?.textContent ?? cells[2]?.textContent ?? '').trim(),
        url: link?.getAttribute('href') ?? '',
        description: cells[3]?.textContent?.trim() ?? '',
        location: cells[4]?.textContent?.trim() ?? '',
      };
    })
    .filter((a) => a.title);
}

export function formatRubicDate(d: string): string {
  const [dd, mm, yyyy] = d.split('.').map(Number);
  if (!dd || !mm || !yyyy) return d;
  return new Intl.DateTimeFormat('nb-NO', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  }).format(new Date(yyyy, mm - 1, dd));
}
