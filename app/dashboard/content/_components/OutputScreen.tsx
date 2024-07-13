import React, { useRef, useEffect, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { Editor } from '@toast-ui/react-editor';

interface Props {
    aioutput: string;
}

const OutputScreen = ({ aioutput }: Props) => {
    const [copied, setCopied] = useState(false);
    const editorRef = useRef<any>(null);

    useEffect(() => {
        const editorInstance = editorRef.current?.getInstance();
        if (editorInstance && aioutput) {
            editorInstance.setMarkdown(aioutput);
        }
    }, [aioutput]);

    const handleCopy = () => {
        const editorInstance = editorRef.current?.getInstance();
        if (editorInstance) {
            const markdownContent = editorInstance.getMarkdown();
            navigator.clipboard.writeText(markdownContent).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Hide notification after 2 seconds
            });
        }
    };

    return (
        <div className='bg-white shadow-lg border'>
            <div className='flex justify-between items-center p-5'>
                <h2>Your Result</h2>
                <Button onClick={handleCopy}><Copy />Copy</Button>
            </div>
            {copied && <div className="p-3"><h2 className='bg-green-400 text-white p-3 rounded-xl  font-bold'>Copied to clipboard!</h2></div>}
            <Editor
                ref={editorRef}
                initialValue="Your Result's Appear Here"
                height="600px"
                initialEditType="wysiwyg"
                useCommandShortcut={true}
            />
        </div>
    );
};

export default OutputScreen;
