import { ImageResponse } from 'next/og'

// Open Graph Image (1200x630)
export const alt = 'INTEGRADAV - Soluciones Digitales en Colombia'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          padding: '80px',
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'flex',
            }}
          >
            INTEGRADAV
          </div>
        </div>
        
        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            color: '#e2e8f0',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.4,
          }}
        >
          Desarrollo Web, Chatbots IA y Automatización
        </div>
        
        {/* Location */}
        <div
          style={{
            fontSize: 24,
            color: '#94a3b8',
            marginTop: '30px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          📍 Colombia | Soluciones Digitales para PYMES
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
