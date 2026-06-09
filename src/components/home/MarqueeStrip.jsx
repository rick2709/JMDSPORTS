import { useTheme } from '../../context/ThemeContext'

const brands = ['WILSON', 'BABOLAT', 'HEAD', 'NIKE', 'PRINCE', 'YONEX', 'DUNLOP', 'TECHNIFIBRE']

export default function MarqueeStrip() {
  const { isDark } = useTheme()
  const repeated = [...brands, ...brands]

  return (
    <div
      className="overflow-hidden py-4"
      style={{
        backgroundColor: isDark ? '#0D0D0D' : '#1A3C2E',
        borderTop: isDark ? '1px solid #2A2A2A' : '1px solid #15301f',
        borderBottom: isDark ? '1px solid #2A2A2A' : '1px solid #15301f',
        transition: 'background-color 0.4s ease',
      }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((brand, i) => (
          <span
            key={i}
            className="inline-flex items-center mx-8 font-heading text-lg tracking-[0.2em]"
            style={{ color: '#C8F135' }}
          >
            {brand}
            <span className="ml-8" style={{ color: 'rgba(200,241,53,0.25)' }}>•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
