import React, { FC, useEffect, useState } from 'react'
import Prism from 'prismjs'
import './styles.sass'

import 'prismjs/plugins/line-numbers/prism-line-numbers'
// import 'prismjs/themes/prism.css'

const language = 'javascript'

// @ts-ignore
Prism.manual = true

export const Editor: FC = () => {
    const [editorContent, setEditorContent] = useState('console.log("Hello world");')

    useEffect(() => {
        Prism.highlightAll()
    }, [editorContent])

    return (
        <div className="editor">
            <textarea
                className="code-input"
                value={editorContent}
                onChange={e => setEditorContent(e.target.value)}
            />
            <pre className="code-output line-numbers">
                <code className={`language-${language}`}>{editorContent}</code>
            </pre>
        </div>
    )
}
