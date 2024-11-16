import Section1 from './components/sections/section1Hero';
import Section2 from './components/sections/section2Question';
import Section4 from './components/sections/section4Logo';
import Section3 from './components/sections/section3Ready';
import Section5 from './components/sections/section5Angie';
import Section6 from './components/sections/section6Founders';
import Section7 from './components/sections/section7Quote';
import Section8 from './components/sections/section8Solution';
// ... import other sections as needed

export default function Home() {
  return (
    <div className="w-full">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      {/* ... other sections */}
    </div>
  );
}
