'use client'
import { useEffect, useState } from 'react'
import PostPreview from './PostPreview'
import { getClient, getAllPosts } from '../lib/sanity.client'
import type { Post } from '../lib/sanity.queries'

export default function SanityBlogPosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    getAllPosts(getClient()).then((data) => {
      setPosts(data.slice(0, 3))
      setLoaded(true)
    })
  }, [])

  if (!loaded) {
    return <div className="text-gray-400">Loading latest posts...</div>
  }

  if (!posts.length) {
    return (
      <div className="rounded-3xl border border-[#E4E7EC] bg-[#F9FAFB] px-6 py-8 text-center text-[#667085]">
        No posts are published yet. Reach out if you'd like recent case studies
        or selected work samples.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostPreview
          key={post._id}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  )
}
