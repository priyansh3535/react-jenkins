import React, { FC } from 'react';
import { AboutComponentWrapper } from './AboutComponent.styled';

interface AboutComponentProps {}

const AboutComponent: FC<AboutComponentProps> = () => (
 <AboutComponentWrapper data-testid="AboutComponent">
    AboutComponent Component
 </AboutComponentWrapper>
);

export default AboutComponent;
