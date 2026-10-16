import { ImageResponse } from 'next/og';

export const alt = 'The Global Language Academy (TGLA) | German, French, Japanese, IELTS & PTE Coaching';
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
              fontSize: '22px',
              fontWeight: 800,
              color: '#FFFFFF',
              boxShadow: '0 8px 24px rgba(147, 51, 234, 0.4)',
            }}
          >
            TGLA
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
            Learn • Grow • Go Global
          </span>
          <div
            style={{
              fontSize: '48px',
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: '1040px',
              letterSpacing: '-1px',
            }}
          >
            Master German, French, Japanese, IELTS & PTE
          </div>
          <div style={{ fontSize: '21px', color: '#CBD5E1', marginTop: '6px' }}>
            Small Batches • Certified Goethe, DELF, JLPT & IDP Trainers • Guaranteed Exam Prep
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
          <div style={{ display: 'flex', gap: '20px', fontSize: '16px', color: '#94A3B8' }}>
            <span>German (A1-C2)</span>
            <span>French (DELF/DALF)</span>
            <span>Japanese (JLPT)</span>
            <span>IELTS & PTE</span>
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
            Book Your Consultation
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
