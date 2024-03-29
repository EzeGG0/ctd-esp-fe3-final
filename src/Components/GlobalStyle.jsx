import React from 'react';

const GlobalStyles = ({ theme, children }) => (
  <>
    <body className={theme}>
        { children }
    </body>
  </>
);

export default GlobalStyles;