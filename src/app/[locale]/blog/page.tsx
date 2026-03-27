import { BlogListingClient } from "@/components/blog/BlogListingClient";
import { getAllPosts } from "@/lib/blog";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Next Gen Capital",
  description: "Expert guides on pensions, health insurance, tax advantages, and navigating Germany as an expat.",
};

export default function BlogListingPage({ params: { locale } }: { params: { locale: string } }) {
  const posts = getAllPosts();
  return <BlogListingClient posts={posts} locale={locale} />;
}
