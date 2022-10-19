import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t, i18n } = useTranslation('main');
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <div className={cls.links}>
        /
      </div>
    </div>
  );
};