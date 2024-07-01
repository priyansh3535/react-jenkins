import React, { lazy, Suspense } from 'react';

const LazyAboutComponent = lazy(() => import('./AboutComponent'));

const AboutComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAboutComponent {...props} />
  </Suspense>
);

export default AboutComponent;
