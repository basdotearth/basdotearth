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
    width: 2,
    background: 'rgba(var(--fg) / 20%)',
    dividerBackground: 'transparent',
    containerWidth: 1,
  },
  editor: {
    fontFamily: 'Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace',
    backgroundColor: 'rgb(var(--charcoal))',
    color: 'rgb(var(--fg))',
  },
  tabs: {
    tabHeader: {
      background: 'transparent',
      panelBackground: 'rgba(var(--fg) / 20%)',
      color: 'rgb(var(--fg))',
      borderBottom: 'rgb(var(--fg))',
    },
    tabPanel: {
      phoneHeight: '10em',
    },
    selectedTab: {
      borderBottom: '2px solid rgb(var(--accent))',
    },
  },
};

export default theme;
