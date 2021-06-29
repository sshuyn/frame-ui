import React, { useContext, useEffect, useLayoutEffect } from 'react';

import ServicesPageWrapper from "../../components/ServicesPageWrapper";
import DarkContext from '../../context/dark';
import HeadersContext from '../../context/headers';
import ProjectsContext from '../../context/projects';

import useRequest from '../../hooks/useRequest';
import generateURL from '../../urls';

import { ServiceDevelopmentPageWrapper, Description, Title } from "./styles";

const ServiceDevelopmentPage = () => {
  const { data, error, loading } = useRequest(generateURL(2));
  const { dark } = useContext(DarkContext);
  const { projects, setProjects } = useContext(ProjectsContext);
  const { setHeaders } = useContext(HeadersContext);

  useEffect(() => {
    if (data) {
      setProjects([...Object.values(data.proyectos)]);
      setHeaders([data.encabezado_vimeo]);
    }
  }, [data]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <ServiceDevelopmentPageWrapper dark={dark}>

      <ServicesPageWrapper projects={projects}>

        <Title>Desarrollo de contenido digital multiplataforma</Title>
        <Description>
          En los últimos años hemos enfocado nuestra creatividad y estrategia de producción en la creación de contenidos short forms para medios digitales. Nuestro contenido original en YouTube alcanzó + de 11M de suscriptores y + de 200M de vistas en 3 años. Somos 1 de las 10 Youtube Network que existen en Argentina y service provider de Google en la región.
        </Description>

      </ServicesPageWrapper>

    </ServiceDevelopmentPageWrapper>
  );
};

export default ServiceDevelopmentPage;
