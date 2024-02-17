import Carousal from '@/components/Carousal';
import ClosedLoopDark from '@/components/ClosedLoopDark';
import Empower from '@/components/Empower';
import Finance from '@/components/Finance';
import Hero from '@/components/Hero';
import Save from '@/components/Save';
import Smarter from '@/components/Smarter';
import Spend from '@/components/Spend';
import Tabs from '@/components/Tabs';

export default function Home() {
  return (
    <div>
      <Hero />
      <Empower />
      <Spend />
      <Smarter />
      <Finance />
      <Save />
      <Tabs />
      <ClosedLoopDark />
      <Carousal />
    </div>
  );
}
