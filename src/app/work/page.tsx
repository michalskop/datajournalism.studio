import { Heading, Text, Grid, Flex } from '../../once-ui/components';
import Link from 'next/link';

const projects = [
  { id: 'example-project', title: 'Example 1', description: 'Description of Project 1' },
  { id: 'project2', title: 'Project 2', description: 'Description of Project 2' },
  { id: 'project3', title: 'Project 3', description: 'Description of Project 3' },
  { id: 'project4', title: 'Project 4', description: 'Description of Project 4' },
];

export default function Work() {
  return (
    <Flex direction="column">
      <Heading className="pb-12">Our Work</Heading>
      <Text>Explore our data-driven projects and visualizations.</Text>
      
      <Grid columns="repeat(2, 1fr)" gap="24">
        {projects.map((project) => (
          <Flex key={project.id} direction="column">
            <Heading>{project.title}</Heading>
            <Text>{project.description}</Text>
            <Link href={`/work/${project.id}`}>View Project</Link>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
}