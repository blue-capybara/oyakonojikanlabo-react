// src/lib/queries/getLatestPosts.ts
export const GET_LATEST_POSTS = `
  query GetLatestPosts {
    posts(first: 3) {
      nodes {
        id
        title
        date
        excerpt
        uri
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`;
