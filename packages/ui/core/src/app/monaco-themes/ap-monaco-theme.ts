const getVariableValue = (variableName: string) => {
  const monacoRoot = document.querySelector('body');
  if (monacoRoot) {
    const varnameValue = getComputedStyle(monacoRoot).getPropertyValue(
      `--${variableName}`
    );
    return varnameValue;
  }
  return '';
};
export const apMonacoTheme = {
  base: 'vs',
  inherit: true,
  rules: [
    {
      background: '#FFFFFF',
      token: '',
    },
    {
      foreground: getVariableValue('code-editor-red'),
      token: 'string',
    },
    {
      foreground: '#1c00cf',
      token: 'constant.numeric',
    },
    {
      foreground: getVariableValue('code-editor-purple'),
      token: 'keyword',
    },
    { token: 'type', foreground: '#000000' },
    {
      foreground: '#0055AA',
      token: 'keyword.operator',
    },
    {
      foreground: getVariableValue('code-editor-purple'),
      token: 'constant.language',
    },
    {
      foreground: '#990000',
      token: 'support.class.exception',
    },
    {
      foreground: '#0055AA',
      token: 'entity.name.function',
    },
    {
      fontStyle: 'bold underline',
      token: 'entity.name.type',
    },
    {
      fontStyle: 'italic',
      token: 'variable.parameter',
    },
    {
      foreground: '#007400',
      token: 'comment',
    },
    {
      foreground: '#ff0000',
      token: 'invalid',
    },
    {
      background: 'e71a1100',
      token: 'invalid.deprecated.trailing-whitespace',
    },
    {
      foreground: '#0055AA',
      background: 'fafafafc',
      token: 'text source',
    },
    {
      foreground: getVariableValue('code-editor-purple'),
      token: 'meta.tag',
    },
    {
      foreground: '770088',
      token: 'declaration.tag',
    },
    {
      foreground: '#0055AA',
      fontStyle: 'bold',
      token: 'support',
    },
    {
      foreground: getVariableValue('code-editor-purple'),
      token: 'storage',
    },
    {
      fontStyle: 'bold underline',
      token: 'entity.name.section',
    },
    {
      foreground: '#0055AA',
      fontStyle: 'bold',
      token: 'entity.name.function.frame',
    },
    {
      foreground: '#333333',
      token: 'meta.tag.preprocessor.xml',
    },
    {
      foreground: '#994500',
      fontStyle: 'italic',
      token: 'entity.other.attribute-name',
    },
    {
      foreground: '#881280',
      token: 'entity.name.tag',
    },
    {
      foreground: '881280',
      token: 'entity.name.tag',
    },
    { token: 'string.key.json', foreground: '#000000' },
    {
      token: 'string.value.json',
      foreground: getVariableValue('code-editor-blue'),
    },
  ],
  colors: {
    'editor.foreground': '#0055AA',
    'editor.background': '#ffffff',
    'editor.selectionBackground': '#BAD6FD',
    'editor.lineHighlightBackground': '#0000001A',
    'editorCursor.foreground': '#000000',
    'editorWhitespace.foreground': '#B3B3B3F4',
    'editorLineNumber.foreground': '#999999',
    'editorGutter.background': '#F5F5F5',
  },
};
