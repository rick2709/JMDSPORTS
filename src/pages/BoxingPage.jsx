import SportPage from '../components/SportPage'
import { SPORTS_CONFIG } from '../config/sports'

export default function BoxingPage({ navigate }) {
  return <SportPage sport={SPORTS_CONFIG.find((s) => s.id === 'boxing')} navigate={navigate} />
}
