
const Templates =[
    {
        name: 'Blog Title',
        dec: 'An AI tool that generates blogs',
        category: 'Blog',
        icon: '',
        aiPrompt: "Give me 5 blog topic ideas in bullet-wise based on a given niche topic and give me the result in Rich Text editor format",
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter Blog Outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Product Description Generator',
        dec: 'An AI tool that generates product descriptions',
        category: 'E-commerce',
        icon: '',
        aiPrompt: "Generate a detailed product description based on the provided product details",
        slug: 'generate-product-description',
        form: [
            {
                label: 'Enter product name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Enter product features',
                field: 'textarea',
                name: 'productFeatures',
                required: true
            }
        ]
    },
    {
        name: 'Social Media Post Ideas',
        dec: 'An AI tool that generates social media post ideas',
        category: 'Social Media',
        icon: '',
        aiPrompt: "Give me 5 social media post ideas for the given topic",
        slug: 'generate-social-media-post-ideas',
        form: [
            {
                label: 'Enter your topic',
                field: 'input',
                name: 'topic',
                required: true
            }
        ]
    },
    {
        name: 'Email Subject Line Generator',
        dec: 'An AI tool that generates email subject lines',
        category: 'Email Marketing',
        icon: '',
        aiPrompt: "Generate 5 engaging email subject lines based on the provided email content",
        slug: 'generate-email-subject-lines',
        form: [
            {
                label: 'Enter email content',
                field: 'textarea',
                name: 'emailContent',
                required: true
            }
        ]
    },
    {
        name: 'SEO Keyword Suggestions',
        dec: 'An AI tool that provides SEO keyword suggestions',
        category: 'SEO',
        icon: '',
        aiPrompt: "Provide 10 SEO keyword suggestions based on the given topic",
        slug: 'generate-seo-keyword-suggestions',
        form: [
            {
                label: 'Enter your topic',
                field: 'input',
                name: 'topic',
                required: true
            }
        ]
    },
    {
        name: 'Ad Copy Generator',
        dec: 'An AI tool that generates ad copy',
        category: 'Advertising',
        icon: '',
        aiPrompt: "Generate an ad copy based on the provided product details and target audience",
        slug: 'generate-ad-copy',
        form: [
            {
                label: 'Enter product details',
                field: 'textarea',
                name: 'productDetails',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'targetAudience',
                required: true
            }
        ]
    },
    {
        name: 'Resume Builder',
        dec: 'An AI tool that helps build resumes',
        category: 'Career',
        icon: '',
        aiPrompt: "Generate a professional resume based on the provided personal and professional information",
        slug: 'generate-resume',
        form: [
            {
                label: 'Enter your personal information',
                field: 'textarea',
                name: 'personalInfo',
                required: true
            },
            {
                label: 'Enter your professional experience',
                field: 'textarea',
                name: 'professionalExperience',
                required: true
            }
        ]
    },
    {
        name: 'Code Snippet Generator',
        dec: 'An AI tool that generates code snippets',
        category: 'Programming',
        icon: '',
        aiPrompt: "Generate a code snippet for the given programming task in the specified language",
        slug: 'generate-code-snippet',
        form: [
            {
                label: 'Enter the programming task',
                field: 'textarea',
                name: 'task',
                required: true
            },
            {
                label: 'Enter the programming language',
                field: 'input',
                name: 'language',
                required: true
            }
        ]
    }
]

export default  Templates;