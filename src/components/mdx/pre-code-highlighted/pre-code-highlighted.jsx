import { Highlight, themes } from 'prism-react-renderer'

export default function PreCodeHighlighted({ codeString, language }) {
  return (
    <Highlight
      code={codeString}
      language={language}
      theme={themes.nightOwlLight}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div
          className={[
            'my-4 -mx-3 md:-mx-8 bg-gray-50 flex px-2 rounded overflow-auto shadow',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <pre
            className={[
              className,
              'inline-block m-0! p-2 text-start w-full overflow-auto',
            ]
              .filter(Boolean)
              .join(' ')}
            style={style}
          >
            {tokens.map((line, i) => (
              <div
                {...getLineProps({ line, key: i })}
                className='table-row'
                key={i.toString()}
              >
                <span className='table-cell text-end pe-4 select-none opacity-50'>
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span
                    {...getTokenProps({ token, key })}
                    key={key.toString()}
                  />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
}
