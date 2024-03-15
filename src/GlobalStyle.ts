import { getColor } from '@shared/helpers';
import { createGlobalStyle, css } from 'styled-components';

// eslint-disable-next-line lint-local/custom-max-lines-per-function
const setGlobalStyles = (): any => css<any>`
  :root {
    --data-test: true;
    --header-bg-color: #4b6ece;
    --skeleton-wrapper-bg: #f9fafb;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  menu,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    border: 0;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  /* HTML5 hidden-attribute fix for newer browsers */

  *[hidden] {
    display: none;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: white;
    line-height: 1;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  menu,
  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .ant-btn-primary {
    box-shadow: none;
    color: #e8e8e8 !important;

    &:disabled {
      background-color: ${getColor('accentDisabled')};
      border-color: ${getColor('accentDisabled')};
    }
  }

  .ant-checkbox-wrapper {
    color: ${getColor('text')};
  }

  html,
  body,
  #root {
    background-color: ${getColor('bg')};
    font-family: 'Roboto Slab', serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: 400;
    height: 100%;
  }
`;

const GlobalStyle = createGlobalStyle(setGlobalStyles);

export default GlobalStyle;
