'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';
import { sectors, Sector, Member, ProfileLink, Publication } from '../data/stakeholders';
import SearchOverlay from './SearchOverlay';

interface NodeDatum {
  id: string;
  type: 'center' | 'sector' | 'member';
  label: string;
  x: number;
  y: number;
  sector?: Sector;
  member?: Member;
  sectorColor?: string;
  tier?: string;
}

interface LinkDatum {
  source: string;
  target: string;
  color: string;
}

interface SelectedInfo {
  type: 'sector' | 'member';
  sector?: Sector;
  member?: Member;
  sectorContext?: Sector;
}

const WIDTH = 1600;
const HEIGHT = 1200;
const CENTER_X = WIDTH / 2;
const CENTER_Y = HEIGHT / 2;

function buildGraph(): { nodes: NodeDatum[]; links: LinkDatum[] } {
  const nodes: NodeDatum[] = [];
  const links: LinkDatum[] = [];

  nodes.push({
    id: 'center',
    type: 'center',
    label: 'CBRT\nIndia TWG',
    x: CENTER_X,
    y: CENTER_Y,
  });

  const sectorAngles = sectors.map((_, i) => (i / sectors.length) * 2 * Math.PI - Math.PI / 2);
  const sectorRadius = 290;

  sectors.forEach((sector, si) => {
    const angle = sectorAngles[si];
    const sx = CENTER_X + sectorRadius * Math.cos(angle);
    const sy = CENTER_Y + sectorRadius * Math.sin(angle);

    nodes.push({
      id: sector.id,
      type: 'sector',
      label: sector.label,
      x: sx,
      y: sy,
      sector,
      sectorColor: sector.color,
    });

    links.push({ source: 'center', target: sector.id, color: sector.color });

    const memberCount = sector.members.length;
    const spread = Math.min(1.4, Math.PI / (memberCount * 0.7));
    const memberRadius = 200;

    sector.members.forEach((member, mi) => {
      const offset = (mi - (memberCount - 1) / 2) * spread;
      const memberAngle = angle + offset * 0.55;
      const mx = sx + memberRadius * Math.cos(memberAngle);
      const my = sy + memberRadius * Math.sin(memberAngle);

      const nodeId = `${sector.id}-${mi}`;
      nodes.push({
        id: nodeId,
        type: 'member',
        label: member.name,
        x: mx,
        y: my,
        member,
        sector,
        sectorColor: sector.color,
        tier: member.priority_tier,
      });

      links.push({ source: sector.id, target: nodeId, color: sector.color });
    });
  });

  return { nodes, links };
}

function isAnchor(tier: string) {
  return tier.toLowerCase().includes('anchor');
}

function isCore(tier: string) {
  return tier.toLowerCase().includes('core') && !isAnchor(tier);
}

export default function MindMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selected, setSelected] = useState<SelectedInfo | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const selectedRef = useRef<SelectedInfo | null>(null);

  selectedRef.current = selected;

  const handleClose = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setSelected(null);
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const { nodes, links } = buildGraph();
    const nodeMap = new Map(nodes.map((n) => [n.id, n]));

    const defs = svg.append('defs');

    // Radial gradient for center node
    const grad = defs.append('radialGradient').attr('id', 'centerGrad');
    grad.append('stop').attr('offset', '0%').attr('stop-color', '#818cf8');
    grad.append('stop').attr('offset', '100%').attr('stop-color', '#4f46e5');

    // Glow filter
    const glowFilter = defs.append('filter').attr('id', 'glow').attr('x', '-50%').attr('y', '-50%').attr('width', '200%').attr('height', '200%');
    glowFilter.append('feGaussianBlur').attr('stdDeviation', '6').attr('result', 'coloredBlur');
    const feMerge = glowFilter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    const softGlow = defs.append('filter').attr('id', 'softGlow').attr('x', '-30%').attr('y', '-30%').attr('width', '160%').attr('height', '160%');
    softGlow.append('feGaussianBlur').attr('stdDeviation', '3').attr('result', 'coloredBlur');
    const sm = softGlow.append('feMerge');
    sm.append('feMergeNode').attr('in', 'coloredBlur');
    sm.append('feMergeNode').attr('in', 'SourceGraphic');

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 2.5])
      .on('zoom', (event) => {
        g.attr('transform', event.transform.toString());
      });

    svg.call(zoom);

    const g = svg.append('g');

    // Initial zoom to fit
    const vw = svgRef.current.clientWidth || 1200;
    const vh = svgRef.current.clientHeight || 800;
    const scale = Math.min(vw / WIDTH, vh / HEIGHT) * 0.92;
    const tx = (vw - WIDTH * scale) / 2;
    const ty = (vh - HEIGHT * scale) / 2;
    svg.call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(scale));

    // Draw links
    const linkGroup = g.append('g').attr('class', 'links');
    links.forEach((link) => {
      const src = nodeMap.get(link.source)!;
      const tgt = nodeMap.get(link.target)!;
      const isSectorLink = src.id === 'center';
      linkGroup.append('line')
        .attr('x1', src.x).attr('y1', src.y)
        .attr('x2', tgt.x).attr('y2', tgt.y)
        .attr('stroke', link.color)
        .attr('stroke-width', isSectorLink ? 2.5 : 1.2)
        .attr('stroke-opacity', isSectorLink ? 0.6 : 0.35)
        .attr('class', 'connector-animated');
    });

    // Draw nodes
    const nodeGroup = g.append('g').attr('class', 'nodes');

    nodes.forEach((node) => {
      const ng = nodeGroup.append('g')
        .attr('transform', `translate(${node.x},${node.y})`)
        .attr('cursor', node.type !== 'center' ? 'pointer' : 'default')
        .attr('data-id', node.id);

      if (node.type === 'center') {
        // Pulse ring
        ng.append('circle')
          .attr('r', 72)
          .attr('fill', 'none')
          .attr('stroke', '#818cf8')
          .attr('stroke-width', 2)
          .attr('opacity', 0.4)
          .attr('class', 'pulse-ring');

        ng.append('circle')
          .attr('r', 64)
          .attr('fill', 'url(#centerGrad)')
          .attr('filter', 'url(#glow)')
          .attr('class', 'center-glow');

        // CBI logo ring
        ng.append('circle')
          .attr('r', 64)
          .attr('fill', 'none')
          .attr('stroke', '#818cf8')
          .attr('stroke-width', 1.5)
          .attr('stroke-opacity', 0.5);

        const lines = node.label.split('\n');
        lines.forEach((line, i) => {
          ng.append('text')
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('y', (i - (lines.length - 1) / 2) * 18)
            .attr('fill', '#fff')
            .attr('font-size', i === 0 ? 17 : 14)
            .attr('font-weight', i === 0 ? 800 : 500)
            .attr('letter-spacing', '0.5px')
            .text(line);
        });

        // "50 Members" badge
        ng.append('text')
          .attr('text-anchor', 'middle')
          .attr('y', 40)
          .attr('fill', '#a5b4fc')
          .attr('font-size', 10)
          .attr('font-weight', 500)
          .text('44 Candidates • 5 Sectors');

      } else if (node.type === 'sector') {
        const color = node.sectorColor!;
        const r = 50;

        ng.append('circle')
          .attr('r', r + 6)
          .attr('fill', color)
          .attr('fill-opacity', 0.12)
          .attr('stroke', color)
          .attr('stroke-width', 1)
          .attr('stroke-opacity', 0.3);

        ng.append('circle')
          .attr('r', r)
          .attr('fill', '#1e293b')
          .attr('stroke', color)
          .attr('stroke-width', 2.5);

        // Icon
        ng.append('text')
          .attr('text-anchor', 'middle')
          .attr('y', -12)
          .attr('font-size', 22)
          .text(node.sector!.icon);

        // MFA badge
        ng.append('rect')
          .attr('x', -22)
          .attr('y', 2)
          .attr('width', 44)
          .attr('height', 16)
          .attr('rx', 8)
          .attr('fill', color)
          .attr('fill-opacity', 0.25)
          .attr('stroke', color)
          .attr('stroke-width', 1)
          .attr('stroke-opacity', 0.5);

        ng.append('text')
          .attr('text-anchor', 'middle')
          .attr('y', 14)
          .attr('fill', color)
          .attr('font-size', 9)
          .attr('font-weight', 700)
          .attr('letter-spacing', '0.5px')
          .text(node.sector!.mfa);

        // Member count
        ng.append('text')
          .attr('text-anchor', 'middle')
          .attr('y', 32)
          .attr('fill', '#94a3b8')
          .attr('font-size', 9)
          .text(`${node.sector!.members.length} members`);

        // Label outside circle
        const labelLines = node.label.split('\n');
        const labelY = r + 18;
        labelLines.forEach((line, i) => {
          ng.append('text')
            .attr('text-anchor', 'middle')
            .attr('y', labelY + i * 14)
            .attr('fill', '#e2e8f0')
            .attr('font-size', 11)
            .attr('font-weight', 600)
            .text(line);
        });

        ng.on('click', (event) => {
          event.stopPropagation();
          setSelected({ type: 'sector', sector: node.sector! });
        });

        ng.on('mouseenter', () => setHoveredId(node.id));
        ng.on('mouseleave', () => setHoveredId(null));

      } else {
        // Member node
        const color = node.sectorColor!;
        const tier = node.tier || '';
        const anchor = isAnchor(tier);
        const core = isCore(tier);
        const r = anchor ? 22 : core ? 17 : 13;
        const strokeColor = color;
        const strokeW = anchor ? 2.5 : core ? 2 : 1.5;
        const strokeOp = anchor ? 1 : core ? 0.8 : 0.5;
        const hasPhoto = !!(node.member?.photo);
        const clipId = `clip-${node.id}`;

        if (anchor) {
          ng.append('circle')
            .attr('r', r + 6)
            .attr('fill', color)
            .attr('fill-opacity', 0.1)
            .attr('stroke', color)
            .attr('stroke-width', 1)
            .attr('stroke-opacity', 0.3);
        }

        if (hasPhoto) {
          // Define clip path for circular photo
          defs.append('clipPath')
            .attr('id', clipId)
            .append('circle')
            .attr('r', r - 0.5);

          // Background circle
          ng.append('circle')
            .attr('r', r)
            .attr('fill', '#1e293b')
            .attr('stroke', strokeColor)
            .attr('stroke-width', strokeW)
            .attr('stroke-opacity', strokeOp);

          // Photo image clipped to circle
          ng.append('image')
            .attr('href', node.member!.photo!)
            .attr('x', -r)
            .attr('y', -r)
            .attr('width', r * 2)
            .attr('height', r * 2)
            .attr('clip-path', `url(#${clipId})`)
            .attr('preserveAspectRatio', 'xMidYMin slice');
        } else {
          ng.append('circle')
            .attr('r', r)
            .attr('fill', anchor ? color : core ? '#1e293b' : '#0f172a')
            .attr('fill-opacity', anchor ? 0.3 : 1)
            .attr('stroke', strokeColor)
            .attr('stroke-width', strokeW)
            .attr('stroke-opacity', strokeOp);

          if (anchor) {
            ng.append('text')
              .attr('text-anchor', 'middle')
              .attr('dominant-baseline', 'middle')
              .attr('font-size', 10)
              .attr('fill', color)
              .text('⚓');
          }
        }

        // Anchor badge overlay (on top of photo)
        if (hasPhoto && anchor) {
          ng.append('circle')
            .attr('cx', r - 4).attr('cy', r - 4)
            .attr('r', 6)
            .attr('fill', '#1e293b')
            .attr('stroke', color)
            .attr('stroke-width', 1);
          ng.append('text')
            .attr('x', r - 4).attr('y', r - 4)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('font-size', 7)
            .text('⚓');
        }

        // Name label
        const words = node.label.split(' ');
        const nameLines: string[] = [];
        let currentLine = '';
        words.forEach((word) => {
          const testLine = currentLine ? `${currentLine} ${word}` : word;
          if (testLine.length > 16) {
            if (currentLine) nameLines.push(currentLine);
            currentLine = word;
          } else {
            currentLine = testLine;
          }
        });
        if (currentLine) nameLines.push(currentLine);

        const nameFontSize = 9;
        const nameY = r + 6;
        nameLines.slice(0, 3).forEach((line, i) => {
          ng.append('text')
            .attr('text-anchor', 'middle')
            .attr('y', nameY + i * 11)
            .attr('fill', '#cbd5e1')
            .attr('font-size', nameFontSize)
            .attr('font-weight', anchor ? 600 : 400)
            .text(line);
        });

        ng.on('click', (event) => {
          event.stopPropagation();
          setSelected({ type: 'member', member: node.member!, sectorContext: node.sector });
        });

        ng.on('mouseenter', () => setHoveredId(node.id));
        ng.on('mouseleave', () => setHoveredId(null));
      }
    });

    // Click on background to deselect
    svg.on('click', () => setSelected(null));

    return () => {
      svg.selectAll('*').remove();
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', background: '#0f172a' }}>
      {/* Header */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
        padding: '12px 20px',
        background: 'linear-gradient(to bottom, rgba(15,23,42,0.95), transparent)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        pointerEvents: 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'linear-gradient(135deg, #818cf8, #4f46e5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16, fontWeight: 800, color: '#fff',
          }}>C</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#e2e8f0', lineHeight: 1.2 }}>
              CBRT India TWG — Stakeholder Map
            </div>
            <div style={{ fontSize: 11, color: '#64748b', lineHeight: 1.2 }}>
              Climate Bonds Initiative · USISA Programme · Jay Shah · May 2026
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {sectors.map((s) => (
            <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: s.color }} />
              <span style={{ fontSize: 10, color: '#94a3b8' }}>{s.mfa}</span>
            </div>
          ))}
          <button
            onClick={() => setSearchOpen(true)}
            style={{
              pointerEvents: 'all',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 8, padding: '5px 12px',
              color: '#94a3b8', cursor: 'pointer', fontSize: 12,
              display: 'flex', alignItems: 'center', gap: 6,
            }}
          >
            🔍 Search <kbd style={{ fontSize: 9, color: '#475569', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 3, padding: '1px 4px' }}>⌘K</kbd>
          </button>
        </div>
      </div>

      {/* Legend */}
      <div style={{
        position: 'absolute', bottom: 16, left: 16, zIndex: 10,
        background: 'rgba(15,23,42,0.85)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 10, padding: '10px 14px',
        backdropFilter: 'blur(8px)',
      }}>
        <div style={{ fontSize: 9, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Legend</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { label: 'Tier 1 — Anchor', color: '#818cf8', r: 10, filled: true, icon: '⚓' },
            { label: 'Tier 1 — Core', color: '#64748b', r: 8, filled: false },
            { label: 'Tier 2 — Technical / Advisory', color: '#475569', r: 6, filled: false },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width={20} height={20}>
                <circle cx={10} cy={10} r={item.r}
                  fill={item.filled ? item.color : 'transparent'}
                  fillOpacity={item.filled ? 0.3 : 1}
                  stroke={item.color} strokeWidth={1.5} />
                {item.icon && (
                  <text x={10} y={14} textAnchor="middle" fontSize={8} fill={item.color}>{item.icon}</text>
                )}
              </svg>
              <span style={{ fontSize: 10, color: '#94a3b8' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Zoom hint */}
      <div style={{
        position: 'absolute', bottom: 16, right: selected ? 420 : 16, zIndex: 10,
        background: 'rgba(15,23,42,0.75)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 8, padding: '6px 12px',
        fontSize: 10, color: '#64748b',
        backdropFilter: 'blur(4px)',
        transition: 'right 0.3s ease',
      }}>
        🖱 Scroll to zoom · Drag to pan · Click nodes to explore
      </div>

      <svg ref={svgRef} style={{ width: '100%', height: '100%' }} />

      {/* Detail panel */}
      {selected && (
        <DetailPanel info={selected} onClose={handleClose} />
      )}

      {/* Search overlay */}
      {searchOpen && (
        <SearchOverlay
          onSelect={(member, sector) => setSelected({ type: 'member', member, sectorContext: sector })}
          onClose={() => setSearchOpen(false)}
        />
      )}
    </div>
  );
}

function DetailPanel({ info, onClose }: { info: SelectedInfo; onClose: () => void }) {
  if (info.type === 'sector' && info.sector) {
    const sector = info.sector;
    const tier1 = sector.members.filter(m => m.priority_tier.includes('Tier 1'));
    const tier2 = sector.members.filter(m => m.priority_tier.includes('Tier 2'));
    return (
      <div className="slide-in" style={{
        position: 'absolute', top: 0, right: 0, bottom: 0,
        width: 400, zIndex: 20,
        background: 'rgba(15,23,42,0.97)',
        borderLeft: `2px solid ${sector.color}`,
        backdropFilter: 'blur(16px)',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{
          padding: '20px 20px 16px',
          borderBottom: `1px solid rgba(255,255,255,0.07)`,
          background: `linear-gradient(135deg, ${sector.color}18, transparent)`,
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <span style={{ fontSize: 32 }}>{sector.icon}</span>
              <div>
                <div style={{ fontSize: 10, color: sector.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>
                  {sector.mfa}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#f1f5f9', lineHeight: 1.3 }}>
                  {sector.label.replace('\n', ' ')}
                </div>
                <div style={{ fontSize: 11, color: '#64748b', marginTop: 3 }}>
                  {sector.members.length} candidate members
                </div>
              </div>
            </div>
            <button onClick={onClose} style={{
              background: 'rgba(255,255,255,0.06)', border: 'none', borderRadius: 6,
              color: '#94a3b8', cursor: 'pointer', fontSize: 16, padding: '4px 8px', lineHeight: 1,
            }}>✕</button>
          </div>
        </div>

        {/* Tier stats */}
        <div style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: 12, flexShrink: 0 }}>
          <div style={{ flex: 1, background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: 8, padding: '8px 12px', textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#fbbf24' }}>{tier1.length}</div>
            <div style={{ fontSize: 9, color: '#92400e', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Tier 1</div>
          </div>
          <div style={{ flex: 1, background: 'rgba(148,163,184,0.06)', border: '1px solid rgba(148,163,184,0.15)', borderRadius: 8, padding: '8px 12px', textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#94a3b8' }}>{tier2.length}</div>
            <div style={{ fontSize: 9, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Tier 2</div>
          </div>
        </div>

        {/* Members list */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
          {[
            { label: 'Tier 1 — Priority Anchors & Core', members: tier1, color: '#fbbf24' },
            { label: 'Tier 2 — Technical & Advisory', members: tier2, color: '#94a3b8' },
          ].map(({ label, members, color }) => members.length > 0 && (
            <div key={label}>
              <div style={{ padding: '10px 20px 6px', fontSize: 9, color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {label}
              </div>
              {members.map((m) => (
                <MemberListItem key={m.name} member={m} sector={info.sector!} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (info.type === 'member' && info.member) {
    const member = info.member;
    const sector = info.sectorContext;
    const color = sector?.color || '#818cf8';
    const tier1 = member.priority_tier.includes('Tier 1');
    const anchorMember = isAnchor(member.priority_tier);

    return (
      <div className="slide-in" style={{
        position: 'absolute', top: 0, right: 0, bottom: 0,
        width: 400, zIndex: 20,
        background: 'rgba(15,23,42,0.97)',
        borderLeft: `2px solid ${color}`,
        backdropFilter: 'blur(16px)',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{
          padding: '20px 20px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          background: `linear-gradient(135deg, ${color}15, transparent)`,
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
            {/* Photo avatar */}
            <MemberAvatar member={member} color={color} size={68} />

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', gap: 6, marginBottom: 6, flexWrap: 'wrap', alignItems: 'center' }}>
                {sector && (
                  <span style={{
                    fontSize: 9, padding: '2px 8px', borderRadius: 10,
                    background: `${color}20`, color, border: `1px solid ${color}40`,
                    fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
                  }}>{sector.mfa}</span>
                )}
                <span style={{
                  fontSize: 9, padding: '2px 8px', borderRadius: 10, fontWeight: 700, letterSpacing: '0.05em',
                  background: tier1 ? 'rgba(234,179,8,0.15)' : 'rgba(148,163,184,0.1)',
                  color: tier1 ? '#fbbf24' : '#94a3b8',
                  border: `1px solid ${tier1 ? 'rgba(234,179,8,0.3)' : 'rgba(148,163,184,0.2)'}`,
                }}>
                  {member.priority_tier}
                </span>
                {anchorMember && (
                  <span style={{
                    fontSize: 9, padding: '2px 8px', borderRadius: 10,
                    background: 'rgba(99,102,241,0.15)', color: '#818cf8',
                    border: '1px solid rgba(99,102,241,0.3)',
                    fontWeight: 700,
                  }}>⚓ Anchor</span>
                )}
              </div>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#f1f5f9', lineHeight: 1.3, marginBottom: 3 }}>
                {member.name}
              </div>
              <div style={{ fontSize: 11, color: '#94a3b8', lineHeight: 1.4, marginBottom: 3 }}>
                {member.title}
              </div>
              <div style={{ fontSize: 11, color, fontWeight: 600, lineHeight: 1.3 }}>
                {member.organisation}
              </div>
            </div>
            <button onClick={onClose} style={{
              background: 'rgba(255,255,255,0.06)', border: 'none', borderRadius: 6,
              color: '#94a3b8', cursor: 'pointer', fontSize: 16, padding: '4px 8px', lineHeight: 1, flexShrink: 0,
              alignSelf: 'flex-start',
            }}>✕</button>
          </div>

          <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
            {member.gender && (
              <span style={{ fontSize: 10, color: '#64748b', display: 'flex', alignItems: 'center', gap: 3 }}>
                {member.gender === 'Female' ? '♀' : '♂'} {member.gender}
              </span>
            )}
            {member.city && (
              <span style={{ fontSize: 10, color: '#64748b', display: 'flex', alignItems: 'center', gap: 3 }}>
                📍 {member.city}
              </span>
            )}
            {member.type && (
              <span style={{ fontSize: 10, color: '#64748b', display: 'flex', alignItems: 'center', gap: 3 }}>
                🏛 {member.type}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px' }}>
          <InfoSection icon="🎯" title="TWG Role" color={color}>
            <p style={{ fontSize: 12, color: '#e2e8f0', margin: 0, lineHeight: 1.6 }}>{member.cbrt_twg_role}</p>
          </InfoSection>

          {member.sector_expertise && (
            <InfoSection icon="🔬" title="Sector Expertise" color={color}>
              <p style={{ fontSize: 12, color: '#cbd5e1', margin: 0, lineHeight: 1.6 }}>{member.sector_expertise}</p>
            </InfoSection>
          )}

          {member.ar_relevance && (
            <InfoSection icon="🌍" title="A&R Relevance" color={color}>
              <p style={{ fontSize: 12, color: '#cbd5e1', margin: 0, lineHeight: 1.6 }}>{member.ar_relevance}</p>
            </InfoSection>
          )}

          {member.key_projects && (
            <InfoSection icon="📋" title="Key Projects / Programmes" color={color}>
              <p style={{ fontSize: 12, color: '#cbd5e1', margin: 0, lineHeight: 1.6 }}>{member.key_projects}</p>
            </InfoSection>
          )}

          {member.status && (
            <InfoSection icon="✅" title="Engagement Status" color={color}>
              <p style={{ fontSize: 12, color: '#86efac', margin: 0, lineHeight: 1.6 }}>{member.status}</p>
            </InfoSection>
          )}

          {member.notes && (
            <InfoSection icon="📝" title="Assessment Notes" color={color}>
              <p style={{ fontSize: 12, color: '#cbd5e1', margin: 0, lineHeight: 1.6 }}>{member.notes}</p>
            </InfoSection>
          )}

          {/* Rich profile links */}
          {member.profiles && member.profiles.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 5 }}>
                🔗 Profiles & Online Presence
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {member.profiles.map((p: ProfileLink, i: number) => (
                  <a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      padding: '7px 10px', borderRadius: 8,
                      background: 'rgba(255,255,255,0.04)',
                      border: `1px solid ${color}25`,
                      textDecoration: 'none',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = `${color}15`)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
                  >
                    <span style={{ fontSize: 14, flexShrink: 0 }}>{p.icon || '🔗'}</span>
                    <span style={{ fontSize: 11, color, fontWeight: 500, flex: 1 }}>{p.label}</span>
                    <span style={{ fontSize: 10, color: '#475569' }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Key publications */}
          {member.publications && member.publications.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 5 }}>
                📄 Key Publications
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {member.publications.map((pub: Publication, i: number) => (
                  <a key={i} href={pub.url} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'block', padding: '8px 10px', borderRadius: 8,
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      textDecoration: 'none',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
                  >
                    <div style={{ fontSize: 11, color: '#e2e8f0', lineHeight: 1.5, marginBottom: 3 }}>{pub.title}</div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                      {pub.year && <span style={{ fontSize: 9, color: color, fontWeight: 600, background: `${color}20`, padding: '1px 6px', borderRadius: 4 }}>{pub.year}</span>}
                      {pub.journal && <span style={{ fontSize: 9, color: '#64748b', fontStyle: 'italic' }}>{pub.journal}</span>}
                      <span style={{ fontSize: 9, color: '#475569', marginLeft: 'auto' }}>↗ Open</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Contact */}
          {(member.email || member.phone || (!member.profiles && member.website)) && (
            <div style={{
              marginTop: 16, padding: '12px 14px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 10,
            }}>
              <div style={{ fontSize: 9, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                Contact
              </div>
              {member.email && (
                <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 4 }}>
                  ✉ <a href={`mailto:${member.email}`} style={{ color: '#818cf8', textDecoration: 'none' }}>{member.email}</a>
                </div>
              )}
              {member.phone && (
                <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 4 }}>📞 {member.phone}</div>
              )}
              {!member.profiles && member.website && member.website !== 'nan' && (
                <div style={{ fontSize: 11, color: '#94a3b8' }}>
                  🌐 <a href={`https://${member.website.replace(/^https?:\/\//, '')}`} target="_blank" rel="noopener noreferrer" style={{ color: '#818cf8', textDecoration: 'none' }}>{member.website}</a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}

function MemberAvatar({ member, color, size = 40 }: { member: Member; color: string; size?: number }) {
  const [imgError, setImgError] = useState(false);
  const initials = member.name
    .replace(/^Dr\s+|^Mr\s+|^Ms\s+/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

  if (member.photo && !imgError) {
    return (
      <div style={{
        width: size, height: size, borderRadius: '50%', flexShrink: 0,
        overflow: 'hidden',
        border: `2.5px solid ${color}`,
        boxShadow: `0 0 0 2px ${color}30`,
      }}>
        <img
          src={member.photo}
          alt={member.name}
          onError={() => setImgError(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />
      </div>
    );
  }

  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', flexShrink: 0,
      background: `linear-gradient(135deg, ${color}30, ${color}15)`,
      border: `2px solid ${color}60`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.3, fontWeight: 700, color,
      letterSpacing: '-0.5px',
    }}>
      {initials}
    </div>
  );
}

function MemberListItem({ member, sector }: { member: Member; sector: Sector }) {
  const [expanded, setExpanded] = useState(false);
  const anchor = isAnchor(member.priority_tier);
  const core = isCore(member.priority_tier);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      style={{
        margin: '2px 12px',
        padding: '10px 14px',
        borderRadius: 8,
        cursor: 'pointer',
        background: expanded ? `${sector.color}12` : 'transparent',
        border: `1px solid ${expanded ? sector.color + '30' : 'transparent'}`,
        transition: 'all 0.15s',
      }}
      onMouseEnter={(e) => { if (!expanded) (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)'; }}
      onMouseLeave={(e) => { if (!expanded) (e.currentTarget as HTMLDivElement).style.background = 'transparent'; }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <MemberAvatar member={member} color={sector.color} size={34} />
          {anchor && (
            <span style={{
              position: 'absolute', bottom: -2, right: -2,
              fontSize: 9, background: '#1e293b', borderRadius: '50%',
              lineHeight: 1, padding: 1,
            }}>⚓</span>
          )}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#e2e8f0', lineHeight: 1.3 }}>{member.name}</div>
          <div style={{ fontSize: 10, color: '#64748b', marginTop: 2, lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {member.organisation}
          </div>
          <div style={{ fontSize: 10, color: sector.color, marginTop: 2, fontWeight: 500 }}>{member.cbrt_twg_role}</div>
        </div>
        <span style={{ fontSize: 10, color: '#475569', flexShrink: 0 }}>{expanded ? '▲' : '▼'}</span>
      </div>
      {expanded && (
        <div className="fade-in" style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {member.sector_expertise && (
            <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 6, lineHeight: 1.5 }}>
              <span style={{ color: '#64748b', fontWeight: 600 }}>Expertise: </span>{member.sector_expertise}
            </div>
          )}
          {member.notes && (
            <div style={{ fontSize: 11, color: '#94a3b8', lineHeight: 1.5 }}>
              <span style={{ color: '#64748b', fontWeight: 600 }}>Notes: </span>{member.notes}
            </div>
          )}
          <div style={{ marginTop: 8, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {member.city && <span style={{ fontSize: 9, color: '#64748b' }}>📍 {member.city}</span>}
            {member.email && (
              <a href={`mailto:${member.email}`} onClick={e => e.stopPropagation()}
                style={{ fontSize: 9, color: '#818cf8', textDecoration: 'none' }}>✉ {member.email}</a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function InfoSection({ icon, title, color, children }: { icon: string; title: string; color: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 5 }}>
        {icon} {title}
      </div>
      {children}
    </div>
  );
}
