import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import Hero from "../../components/Hero";
import PortfolioSection from "../../components/PortfolioSection";
import DarkContext from '../../context/dark';
import FooterContact from '../FooterContact';

import { ServiceWrapper, ContentWrapper } from './styles';

const Service = ({ projects = [], children, loading }) => {
  const { dark } = useContext(DarkContext);
  const { t } = useTranslation();

  return (
    <ServiceWrapper dark={dark}>
      <Hero loadingData={loading} />

      <ContentWrapper>
        <h3>{t("Servicies").toUpperCase()}</h3>

        {children}
      </ContentWrapper>

      {
        projects.length ?
          <PortfolioSection projects={projects} displayAll={false} /> : null
      }

      <FooterContact />

    </ServiceWrapper>
  );
};

export default Service;
