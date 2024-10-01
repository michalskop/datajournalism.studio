'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Background, Flex, ToggleButton, Text } from '../once-ui/components';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ];

  const handleClick = (href: string) => {
    router.push(href);
  };

  return (
    <Flex direction="column" className={styles.container} fillWidth fillHeight minHeight={16} position="relative" radius="l">
      <Background
          position="absolute"
          gradient
          lines={false}
          dots={false}
          style={{ zIndex: -1 }}
        />
      <Flex as="header" className={styles.header} align="center" justifyContent="space-between" alignItems="center" style={{ paddingTop: '20px' }}>
      <Flex align="left" gap="16" alignItems="center">
      <a href="/">
        <span style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/images/logo.svg" alt="Datajournalism Studio Logo" style={{ display: 'block' }} />
          <Text size="l">Datajournalism<br />Studio</Text>
        </span>
      </a>
    </Flex>
        <nav>
          <Flex gap="8" justifyContent="center" alignItems="center">
            {menuItems.map((item) => (
              <ToggleButton
                key={item.href}
                onClick={() => handleClick(item.href)}
                size="m"
                label={item.label}
                align="center"
                selected={pathname === item.href}
              />
            ))}
          </Flex>
        </nav>
      </Flex>
      <Flex 
        direction="column"
        padding="16"
        gap="24"
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          width: '100%'
        }}
      >
        <main className={styles.main}>{children}</main>
      </Flex>
      <footer className={styles.footer}>
        <hr/>
        <Text as="p" className="pt-8">+43 609 10 20 33 88 / +420 735 518 529</Text><br/>
        <Text as="p" className="pt-8">Vienna • Prague</Text><br/>
        <Text as="p" className="pt-8">&copy; {new Date().getFullYear()} DataJournalism.studio </Text>
      </footer>
    </Flex>
  );
};

export default Layout;