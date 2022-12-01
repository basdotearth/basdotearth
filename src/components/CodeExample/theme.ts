const theme = {
  container: {
    minHeight: '30rem',
  },
  error: {
    background: 'rgb(var(--accent))',
    color: 'rgb(var(--fg))',
  },
  console: {
    background: 'rgb(var(--charcoal))',
    color: 'rgb(var(--cream))',
  },
  divider: {
    width: 0,
    background: 'transparent',
    dividerBackground: 'transparent',
    containerWidth: 0,
  },
  editor: {
    fontFamily: 'Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace',
    backgroundColor: 'rgb(var(--charcoal))',
    color: 'rgb(var(--fg))',
  },
  tabs: {
    tabHeader: {
      background: 'transparent',
      panelBackground: 'transparent',
      color: 'rgb(var(--fg))',
      borderBottom: '1px solid rgb(var(--fg))',
    },
    tabPanel: {
      phoneHeight: '10em',
    },
    selectedTab: {
      borderBottom: 'transparent',
    },
  },
};

export default theme;
