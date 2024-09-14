import React from 'react';

const layoutHook = (Component, Layout) => {
  return (props) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default layoutHook;