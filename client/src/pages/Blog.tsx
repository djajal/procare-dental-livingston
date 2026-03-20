import { useState, useMemo } from "react";
import { Link } from "wouter";
import { blogPosts, blogCategories, getPaginatedPosts, BlogPost } from "@/data/blogData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Calendar, Clock, Tag } from "lucide-react";

const POSTS_PER_PAGE = 9;

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Get paginated posts based on selected category and page
  const { posts, totalPages, totalPosts } = useMemo(() => {
    return getPaginatedPosts(selectedCategory, currentPage, POSTS_PER_PAGE);
  }, [selectedCategory, currentPage]);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  // Handle pagination
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dental Health Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Expert insights on oral health, dental treatments, and smile care. Learn from our experienced dental professionals at ProCare Dental.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <aside className="lg:col-span-1">
            <div className="sticky top-4">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Categories</h2>
              
              {/* All Posts Button */}
              <Button
                onClick={() => handleCategoryChange("all")}
                className={`w-full mb-3 justify-start text-base h-auto py-3 px-4 ${
                  selectedCategory === "all"
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}
                variant={selectedCategory === "all" ? "default" : "outline"}
              >
                All Articles ({blogPosts.length})
              </Button>

              {/* Category Buttons */}
              <div className="space-y-2">
                {blogCategories.map((category) => {
                  const categoryCount = blogPosts.filter((post) => post.category === category).length;
                  return (
                    <Button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full justify-start text-base h-auto py-3 px-4 ${
                        selectedCategory === category
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                      }`}
                      variant={selectedCategory === category ? "default" : "outline"}
                    >
                      <span className="flex-1 text-left">{category}</span>
                      <span className="text-sm font-semibold ml-2">({categoryCount})</span>
                    </Button>
                  );
                })}
              </div>

              {/* Info Box */}
              <Card className="mt-8 bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg">Need Dental Care?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    Schedule an appointment with our experienced dental team today.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Blog Posts Grid */}
          <main className="lg:col-span-3">
            {/* Results Info */}
            <div className="mb-8">
              <p className="text-gray-600">
                Showing {(currentPage - 1) * POSTS_PER_PAGE + 1} to{" "}
                {Math.min(currentPage * POSTS_PER_PAGE, totalPosts)} of {totalPosts} articles
                {selectedCategory !== "all" && ` in "${selectedCategory}"`}
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {posts.map((post: BlogPost) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden">
                    {/* Image */}
                    <div className="aspect-video overflow-hidden bg-gray-200">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-semibold text-blue-600 uppercase">
                          {post.category}
                        </span>
                      </div>
                      <CardTitle className="text-lg line-clamp-2 hover:text-blue-600 transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="pb-4">
                      <CardDescription className="line-clamp-3 mb-4 text-gray-600">
                        {post.excerpt}
                      </CardDescription>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between py-8 border-t">
                <Button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2"
                  variant="outline"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`w-10 h-10 ${
                        currentPage === page
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                      }`}
                      variant={currentPage === page ? "default" : "outline"}
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2"
                  variant="outline"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "ProCare Dental Blog",
          description: "Expert dental health articles and insights from ProCare Dental in Livingston, NJ",
          url: "https://procare-dental.com/blog",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: posts.map((post: BlogPost, index: number) => ({
              "@type": "BlogPosting",
              position: index + 1,
              headline: post.title,
              description: post.excerpt,
              image: post.image,
              datePublished: post.date,
              author: {
                "@type": "Person",
                name: post.author,
              },
            })),
          },
        })}
      </script>
    </div>
  );
}
