import Hero from '../components/hero'
import Prices from '../components/prices'

export default function Home() {
  return (
    <main className="max-w-[1280px] mx-auto">
      <Hero />
      <Prices />
    </main>
  )
}
