"use client"
import React, { useState } from 'react';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';

interface FormItem {
    label: string;
    field: 'input' | 'textarea';
    name: string;
    required?: boolean;
}

interface Template {
    name: string;
    dec: string;
    form: FormItem[];
}

interface PROPS {
    selectedTemplate?: Template;
    loading: boolean;
    onFormSubmit: (formData: Record<string, string>) => void;
}

const FormSection = ({ selectedTemplate, loading, onFormSubmit }: PROPS) => {
    const [formData, setFormData] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onFormSubmit(formData);
    };

    return (
        <div className='p-5 bg-white shadow-md border rounded-lg'>
            <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
            <p className='text-gray-600 text-sm'>{selectedTemplate?.dec}</p>
            <form className='mt-6' onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div key={index} className='mb-4'>
                        <label className='block mb-1'>{item.label}</label>
                        {item.field === 'input' && (
                            <input
                                type='text'
                                name={item.name}
                                required={item.required}
                                onChange={handleChange}
                                className='w-full p-2 border rounded'
                            />
                        )}
                        {item.field === 'textarea' && (
                            <textarea
                                name={item.name}
                                required={item.required}
                                onChange={handleChange}
                                className='w-full p-2 border rounded'
                            ></textarea>
                        )}
                    </div>
                ))}
                <Button type='submit' className='w-full py-6' disabled={loading}>
                    {loading ? 'Generating...' : 'Generate Content'}
                </Button>
            </form>
        </div>
    );
};

export default FormSection;
