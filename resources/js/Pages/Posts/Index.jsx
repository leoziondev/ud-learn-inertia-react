import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Posts({ auth, posts }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Posts
                </h2>
            }
        >
            <Head title="Posts">
                <meta name="description" content="Posts index" />
            </Head>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden ">
                        <div className='space-y-4'>
                            {posts.data.map((post) => {
                                return (
                                    <div className="p-6 text-gray-900 bg-white shadow-sm sm:rounded-lg" key={post.id}>
                                        <p>{post.body}</p>
                                        <small>Author: {post.user.name}</small>
                                    </div>
                                )
                            })}
                        </div>
                        
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
