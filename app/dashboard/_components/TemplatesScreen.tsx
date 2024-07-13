'use client'
import React, { useEffect, useState } from 'react';
import Templates from '@/app/(data)/Templates';
import Link from 'next/link';

const TemplatesScreen = ({ userSearchInput }: any) => {
    const [templatelist, settemplatelist] = useState(Templates);

    useEffect(() => {
        if (userSearchInput) {
            const filteredTemplates = Templates.filter((template: any) =>
                template.name.toLowerCase().includes(userSearchInput.toLowerCase())
            );
            settemplatelist(filteredTemplates);
        } else {
            settemplatelist(Templates);
        }
    }, [userSearchInput]);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
            {templatelist.map((item: any, index: number) => (
                <Link key={index} href={'/dashboard/content/'+item?.slug}>
                    <div className='p-5 shadow-md hover:scale-110 rounded-md border gap-3 cursor-pointer bg-white flex flex-col'>
                        <h2 className='font-medium text-lg'>{item.name}</h2>
                        <p className='text-gray-500 line-clamp-3'>{item.dec}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default TemplatesScreen;
