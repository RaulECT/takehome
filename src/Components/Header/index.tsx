import React from 'react';

type HeaderProps = {
  title: string;
};

export const Header: React.FC<HeaderProps> = ({ title }) => (
  <h1>{title}</h1>
);
