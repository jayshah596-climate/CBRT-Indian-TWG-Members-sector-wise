'use client';

import { useState, useEffect, useRef } from 'react';
import { sectors, Sector, Member } from '../data/stakeholders';

interface Result {
  member: Member;
  sector: Sector;
}

interface Props {
  onSelect: (member: Member, sector: Sector) => void;
  onClose: () => void;
}

export default function SearchOverlay({ onSelect, onClose }: Props) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Result[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const found: Result[] = [];
    for (const sector of sectors) {
      for (const member of sector.members) {
        if (
          member.name.toLowerCase().includes(q) ||
          member.organisation.toLowerCase().includes(q) ||
          member.cbrt_twg_role.toLowerCase().includes(q) ||
          member.sector_expertise.toLowerCase().includes(q) ||
          member.city.toLowerCase().includes(q)
        ) {
          found.push({ member, sector });
          if (found.length >= 12) break;
        }
      }
      if (found.length >= 12) break;
    }
    setResults(found);
  }, [query]);

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 50,
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        paddingTop: 80,
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: 560, maxHeight: '60vh',
          background: '#1e293b',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 14,
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 16, color: '#64748b' }}>🔍</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search members, organisations, expertise..."
            style={{
              flex: 1, background: 'none', border: 'none', outline: 'none',
              fontSize: 14, color: '#e2e8f0',
            }}
            onKeyDown={(e) => { if (e.key === 'Escape') onClose(); }}
          />
          <kbd style={{ fontSize: 10, color: '#475569', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: '2px 6px' }}>ESC</kbd>
        </div>

        {results.length > 0 && (
          <div style={{ overflowY: 'auto', maxHeight: 400 }}>
            {results.map(({ member, sector }) => (
              <div
                key={`${sector.id}-${member.number}`}
                onClick={() => { onSelect(member, sector); onClose(); }}
                style={{
                  padding: '12px 16px', cursor: 'pointer',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ flexShrink: 0, marginTop: 2, fontSize: 18 }}>{sector.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>{member.name}</div>
                  <div style={{ fontSize: 11, color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{member.organisation}</div>
                  <div style={{ fontSize: 10, color: sector.color, marginTop: 2 }}>{member.cbrt_twg_role}</div>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <span style={{
                    fontSize: 9, padding: '2px 7px', borderRadius: 8,
                    background: `${sector.color}20`, color: sector.color,
                    border: `1px solid ${sector.color}40`, fontWeight: 600,
                  }}>{sector.label.replace('\n', ' ')}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div style={{ padding: '24px 16px', textAlign: 'center', color: '#475569', fontSize: 13 }}>
            No members found for &quot;{query}&quot;
          </div>
        )}

        {!query && (
          <div style={{ padding: '16px', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {sectors.map((s) => (
              <button
                key={s.id}
                onClick={() => setQuery(s.label.replace('\n', ' '))}
                style={{
                  padding: '6px 12px', borderRadius: 20,
                  background: `${s.color}15`, color: s.color,
                  border: `1px solid ${s.color}40`,
                  cursor: 'pointer', fontSize: 11, fontWeight: 600,
                  display: 'flex', alignItems: 'center', gap: 5,
                }}
              >
                {s.icon} {s.label.replace('\n', ' ')}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
