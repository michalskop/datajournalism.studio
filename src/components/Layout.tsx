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
    <Flex direction="column" className={styles.container}>
      <Background
        position="absolute"
        gradient
        style={{ zIndex: -1, top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <Flex as="header" className={styles.header} align="center" justifyContent="space-between">
        <Flex align="center" gap="16" alignItems="center">
          <img
            src="/images/logo.svg"
            alt="Datajournalism Studio Logo"
            style={{ display: 'block' }}
          />
          <Text size="l">Datajournalism.Studio</Text>
        </Flex>
        <nav>
          <Flex gap="8" justifyContent="center">
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
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <Text>&copy; {new Date().getFullYear()} Datajournalism.Studio. All rights reserved.</Text>
      </footer>
    </Flex>
  );
};

export default Layout;