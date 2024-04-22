'use client';

import { ChangeEvent, useState } from 'react';

export default function UploadButton() {
  const [fileContent, setFileContent] = useState<any>('');

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e: ProgressEvent<FileReader>) {
      if (e.target?.result) {
        setFileContent(e.target?.result);
        console.dir(e.target?.result, { depth: null });
      }
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" accept=".html" onChange={handleFileUpload} />
      <div id='parent_bookmark_container' dangerouslySetInnerHTML={{ __html: fileContent }} className='bg-white w-1/2 [&_a:hover]:underline'></div>
    </div>
  );
}