// src/lib/queries/getAllPosts.ts
export const GET_ALL_POSTS = `
  query GetAllPosts($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        databaseId
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
        tags {
          nodes {
            name
            slug
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