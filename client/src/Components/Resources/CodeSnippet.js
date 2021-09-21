import React from 'react'

const CodeSnippet = (props) => {
    return (
        <div className='mb-3'>
            <code>{props.children}</code>
        </div>
    )
}

export default CodeSnippet
