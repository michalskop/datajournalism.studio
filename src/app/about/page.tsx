import { Heading, Text, Avatar } from '../../once-ui/components';

export default function About() {
  return (
    <main>
      <Heading as="h1" onSolid="accent-strong" className="font-display font-strong font-l neutral-on-background-strong pb-32" style={{ textAlign: 'center' }}>The Team</Heading>
      <Avatar size="xl" src="/images/katerina.webp"/> 
      <Heading as="h2" className="warning-on-background-weak py-16">
      Kateřina Mahdalová</Heading>
      <Heading as="h3" className="orange-on-background-weak">The Storyteller</Heading>
      <Text as="p" className="p-16 font-body font-m">
        Kateřina is an award-winning data journalist with over a decade of experience in transforming complex datasets into compelling narratives. 
      </Text>
      <Text as="p" className="p-16 font-body font-m">
        Katerina is also the founder and editor-in-chief of <a href="https://www.datovazurnalistika.cz" className="info-on-background-weak">Datová žurnalistika</a>, a pioneering platform dedicated to advancing data journalism in the Czech Republic and beyond.
      </Text>
      <Text as="p" className="p-16 font-body font-m">
        With a diverse educational background spanning creative writing, media studies, and journalism from institutions including Charles University, Bangor University, and UC San Diego, Katerina brings a unique blend of analytical skills and storytelling prowess to her work in data journalism.
      </Text>
      <div className="p-16"> </div>
      
      <Avatar size="xl" src="/images/michal-skop.webp"/> 
      <Heading as="h2" className="warning-on-background-weak py-16">
        Michal Škop</Heading>
      <Heading as="h3" className="orange-on-background-weak">The Data Magician</Heading>
      <Text as="p" className="p-16 font-body font-m">
      Dr. Michal Škop is a multifaceted data scientist, demographer, and political analyst with over 15 years of experience in transforming complex data into actionable insights and engaging public tools.
    </Text>
    <Text as="p" className="p-16 font-body font-m">
      As the Director of NGO <a href="https://kohovolit.eu" className="info-on-background-weak">KohoVolit.eu</a> since 2009, Michal has been at the forefront of developing innovative <a href="https://volebnikalkulacka.cz" className="info-on-background-weak">Volební kalkulačka</a> in Czechia, <a href="https://volebnakalkulacka.sk"  className="info-on-background-weak">Volebná kalkulačka</a> in Slovakia, <a href="https://wahlrechner.at"  className="info-on-background-weak">Wahlrechner</a> in Austria, and <a href="https://voksmonitor.hu"  className="info-on-background-weak">Voksmonitor</a> in Hungary, which have empowered voters across Central Europe to make informed decisions.
    </Text>
    <Text as="p" className="p-16 font-body font-m">
      His academic career includes positions as a Researcher or Lecturer at the Universidad de Salamanca's Instituto de Iberoamérica in Spain, Charles Univeristy, Palacky University and University of Hradec Králové in Czechia, stay at Max Planck Institute for Demography in Rostock, Germany.
    </Text>

    </main>
  );
}