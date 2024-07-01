import React, { FC } from 'react';
import { HomeComponentWrapper } from './HomeComponent.styled';

interface HomeComponentProps {}

const HomeComponent: FC<HomeComponentProps> = () => (
 <HomeComponentWrapper data-testid="HomeComponent">
    HomeComponent Component
 </HomeComponentWrapper>
);

export default HomeComponent;
