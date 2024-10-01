import { Heading, Text, Button, Flex } from '../../../once-ui/components';
import Link from 'next/link';
import Layout from '../../../components/Layout';

// This is a mock function to get project data. In a real application,
// you would fetch this data from an API or database.
function getProjectData(id: string) {
  const projects = {
    project1: { title: 'Project 1', description: 'Detailed description of Project 1' },
    project2: { title: 'Project 2', description: 'Detailed description of Project 2' },
    project3: { title: 'Project 3', description: 'Detailed description of Project 3' },
    project4: { title: 'Project 4', description: 'Detailed description of Project 4' },
  };
  return projects[id as keyof typeof projects] || null;
}

export default function Project({ params }: { params: { id: string } }) {
  const project = getProjectData(params.id);

  if (!project) {
    return (
      <Layout>
        <Heading>Project Not Found</Heading>
        <Text>Sorry, the project you're looking for doesn't exist.</Text>
        <Link href="/work" passHref><Button variant="primary" size="m" label="Back to Work" /></Link>
      </Layout>
    );
  }

  return (
    <Layout>
      <Flex direction="column">
        <Heading>{project.title}</Heading>
        <Text>{project.description}</Text>
        <Link href="/work" passHref><Button variant="primary" size="m" label="Back to Work" /></Link>
      </Flex>
    </Layout>
  );
}

// This function generates the static params for all projects
export function generateStaticParams() {
  return [
    { id: 'project1' },
    { id: 'project2' },
    { id: 'project3' },
    { id: 'project4' },
  ];
}