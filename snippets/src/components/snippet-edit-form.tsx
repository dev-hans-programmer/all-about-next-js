'use client';

import { Editor } from '@monaco-editor/react';
import type { Snippet } from '@prisma/client';
import { useState } from 'react';

interface Props {
   snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: Props) {
   const [code, setCode] = useState(snippet.code);

   const handleEditorChange = (value: string = '') => {
      setCode(value);
   };

   return (
      <div>
         <Editor
            height='40vh'
            theme='vs-dark'
            language='javascript'
            defaultValue={snippet.code}
            options={{
               minimap: { enabled: false },
            }}
            onChange={handleEditorChange}
         />
      </div>
   );
}
