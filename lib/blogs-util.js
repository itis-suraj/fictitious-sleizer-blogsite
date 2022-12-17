import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDir = path.join(process.cwd(), "blogs");

export function getBlogFiles() {
  return fs.readdirSync(blogsDir);
}

export function getBlogData(postIdentifier) {
  const blogSlug = postIdentifier.replace(/\.md$/, "");

  const filePath = path.join(blogsDir, `${blogSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const blogData = {
    slug: blogSlug,
    ...data,
    content,
  };
  return blogData;
}

export function extractAll() {
  const blogFiles = getBlogFiles();
  const allBlogs = blogFiles.map((blogFile) => getBlogData(blogFile));
  const sortedBLogs = allBlogs.sort((blogA, blogB) =>
    blogA.date > blogB.date ? -1 : 1
  );
  return sortedBLogs;
}

export function extractFeatured() {
  const allBlogs = extractAll();
  const featuredBlogs = allBlogs.filter((blog) => blog.isPinned);
  return featuredBlogs;
}
