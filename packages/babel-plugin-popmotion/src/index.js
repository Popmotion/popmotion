const REACT_POSE = 'react-pose'

export default function(babel) {
  const { types: t } = babel
  const seen = new WeakSet()

  return {
    name: 'popmotion',
    visitor: {
      Program(path, state) {
        path.traverse({
          ImportDeclaration(path) {
            if (path.get('source.value').node !== REACT_POSE) {
              return
            }

            state.posedImportedName = path
              .get('specifiers')
              .find(specifier =>
                specifier.isImportDefaultSpecifier()
                || specifier.get('imported.name').node === 'default'
              )
              .get('local.name')
              .node

            path
              .get('source')
              .replaceWith(
                t.stringLiteral(`${REACT_POSE}/base`)
              )

            path.stop()
          },
        })
      },
      CallExpression(path, state) {
        if (seen.has(path.node)) {
          return
        }
        seen.add(path.node)

        const calleePath = path.get('callee')

        if (
          !calleePath.isMemberExpression()
          || calleePath.get('object.name').node !== state.posedImportedName
        ) {
          return
        }

        const element = calleePath.get('property.name').node

        calleePath.replaceWith(
          t.callExpression(
            t.identifier(state.posedImportedName),
            [t.stringLiteral(element)],
          )
        )

        path.addComment('leading', '#__PURE__')
      }
    }
  }
}
