import { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, AlertCircle, ExternalLink } from 'lucide-react';
import { fetchRubicActivities, formatRubicDate, type RubicActivity } from '@/lib/rubic';

type RubicActivitiesProps = {
  token: string;
  title?: string;
  pageSize?: number;
  variant?: 'compact' | 'full';
  showDate?: boolean;
  hideWhenEmpty?: boolean;
};

export default function RubicActivities({
  token,
  title,
  pageSize = 10,
  variant = 'full',
  showDate = true,
  hideWhenEmpty = false,
}: RubicActivitiesProps) {
  const [activities, setActivities] = useState<RubicActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchRubicActivities(token, pageSize)
      .then((data) => {
        setActivities(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [token, pageSize]);

  if (loading) {
    return (
      <div>
        {title && (
          <h3
            className="rounded-xl px-4 py-3 font-display text-base font-700 text-white mb-4"
            style={{ backgroundColor: '#0C1C8C' }}
          >
            {title}
          </h3>
        )}
        <div className="space-y-3">
          {Array.from({ length: variant === 'compact' ? 3 : 4 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="h-3 w-24 bg-slate-200 rounded" />
              <div className="mt-2 h-4 w-3/4 bg-slate-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        {title && (
          <h3
            className="rounded-xl px-4 py-3 font-display text-base font-700 text-white mb-4"
            style={{ backgroundColor: '#0C1C8C' }}
          >
            {title}
          </h3>
        )}
        <div className="flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
          <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            Kunne ikke hente aktiviteter akkurat nå.
          </p>
        </div>
      </div>
    );
  }

  if (activities.length === 0) {
    if (hideWhenEmpty) return null;
    return (
      <div>
        {title && (
          <h3
            className="rounded-xl px-4 py-3 font-display text-base font-700 text-white mb-4"
            style={{ backgroundColor: '#0C1C8C' }}
          >
            {title}
          </h3>
        )}
        <p className="text-sm text-slate-500">Ingen kommende aktiviteter.</p>
      </div>
    );
  }

  return (
    <div>
      {title && (
        <h3
          className="rounded-xl px-4 py-3 font-display text-base font-700 text-white mb-4"
          style={{ backgroundColor: '#0C1C8C' }}
        >
          {title}
        </h3>
      )}

      {variant === 'compact' ? (
        <ul className="space-y-2">
          {activities.map((act, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 hover:border-[#0C1C8C]/30 transition-colors"
            >
              {showDate && act.date && (
                <span className="shrink-0 text-xs text-slate-400 font-500 mt-0.5 w-20">
                  {formatRubicDate(act.date)}
                </span>
              )}
              <a
                href={act.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-sm font-600 text-[#0C1C8C] hover:underline"
              >
                {act.title}
              </a>
              <ExternalLink className="h-3.5 w-3.5 text-slate-300 shrink-0 mt-0.5" />
            </li>
          ))}
        </ul>
      ) : (
        <div className="space-y-4">
          {activities.map((act, i) => (
            <article
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-[#0C1C8C]/30 transition-all duration-200"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                {showDate && act.date && (
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    {formatRubicDate(act.date)}
                  </span>
                )}
                {act.time && (
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    {act.time}
                  </span>
                )}
                {act.location && (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-slate-400" />
                    {act.location}
                  </span>
                )}
              </div>

              <h4 className="mt-2 font-display text-base font-700 text-slate-900 group-hover:text-[#0C1C8C] transition-colors">
                {act.url ? (
                  <a
                    href={act.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {act.title}
                  </a>
                ) : (
                  act.title
                )}
              </h4>

              {act.description && (
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{act.description}</p>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
