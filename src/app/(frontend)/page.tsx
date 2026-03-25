import IsometricHero from '@/components/IsometricHero'
import { PALETTE } from '@/theme/palette'

export default function HomePage() {
  return (
    <div
      className="min-h-dvh overflow-x-hidden overflow-y-auto md:h-dvh md:overflow-hidden"
      style={{
        backgroundColor: PALETTE.cream,
        // Expose palette to CSS if you add utilities later
        ['--yuisa-cream' as string]: PALETTE.cream,
        ['--yuisa-sand' as string]: PALETTE.sand,
        ['--yuisa-taupe' as string]: PALETTE.taupe,
        ['--yuisa-lavender' as string]: PALETTE.lavender,
      }}
    >
      <IsometricHero />
    </div>
  )
}
