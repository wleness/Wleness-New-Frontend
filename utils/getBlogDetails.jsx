"use client";
import axios from "axios";
import { SINGLE_BLOG_URI } from "@data/api";
import { useEffect, useState } from "react";

export default function getBlogDetails(slug) {
  const [blogDetails, setBlogDetails] = useState({});
  const [blogCategories, setBlogCategories] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(SINGLE_BLOG_URI + "/" + slug)
      .then((response) => {
        // Handle the successful response
        setBlogDetails(response.data.blog_details);
        setBlogCategories(response.data.categories);
        setRecentBlogs(response.data.recent_blogs);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
        setLoading(false);
        console.error(error);
      });
  }, [slug]);

  return {
    blogDetails: blogDetails,
    blogCategories: blogCategories,
    recentBlogs: recentBlogs,
    loading: loading,
  };
}
