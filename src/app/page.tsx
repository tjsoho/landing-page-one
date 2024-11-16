import Section1 from './components/sections/section1Hero';
import Section2 from './components/sections/section2Question';
import Section4 from './components/sections/section4Logo';
import Section3 from './components/sections/section3Ready';
import Section5 from './components/sections/section5Angie';
import Section6 from './components/sections/section6Founders';
import Section7 from './components/sections/section7Quote';
import Section8 from './components/sections/section8Solution';
import Section9 from './components/sections/section9Cost';
import Section10 from './components/sections/section10Comments';
import Section11 from './components/sections/section11Chani';
import Section12 from './components/sections/section12Works';
import Section13 from './components/sections/section13Freedom';
import Section14 from './components/sections/section14Workweek';
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
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
      {/* ... other sections */}
    </div>
  );
}
