import { ImageResponse } from 'next/og';

export const alt = 'The Global Language Academy (GLA) | IELTS, PTE & German Language Coaching';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #00122E 0%, #051A3C 60%, #4B245E 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '60px 80px',
          color: 'white',
        }}
      >
        {/* Top Header Branding */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: '#9333EA',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '26px',
              fontWeight: 800,
              color: '#FFFFFF',
              boxShadow: '0 8px 24px rgba(147, 51, 234, 0.4)',
            }}
          >
            GLA
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '26px', fontWeight: 800, letterSpacing: '-0.5px' }}>
              The Global Language Academy
            </span>
            <span style={{ fontSize: '14px', color: '#C084FC', fontWeight: 600 }}>
              tglalearning.com
            </span>
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <span
            style={{
              fontSize: '16px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '2.5px',
              color: '#C084FC',
            }}
          >
            Certified Language & Skill Coaching
          </span>
          <div
            style={{
              fontSize: '52px',
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: '1000px',
              letterSpacing: '-1px',
            }}
          >
            Master IELTS, PTE & German Language (A1 – C2)
          </div>
          <div style={{ fontSize: '22px', color: '#CBD5E1', marginTop: '6px' }}>
            5-7 Students Batch Cap • Certified Goethe & IDP Trainers • Guaranteed Exam Success
          </div>
        </div>

        {/* Bottom Footer Callout */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: '24px',
          }}
        >
          <div style={{ display: 'flex', gap: '24px', fontSize: '18px', color: '#94A3B8' }}>
            <span>Goethe A1 - C2</span>
            <span>IELTS Band 7.5+</span>
            <span>PTE Academic 79+</span>
          </div>
          <div
            style={{
              background: '#9333EA',
              padding: '12px 28px',
              borderRadius: '999px',
              fontSize: '18px',
              fontWeight: 700,
              color: '#FFFFFF',
            }}
          >
            Book Free Demo Class
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
