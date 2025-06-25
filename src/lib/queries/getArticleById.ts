// src/lib/queries/getArticleById.ts
export const GET_ARTICLE_BY_ID = `
  query GetArticleById($id: ID!) {
    post(id: $id, idType: SLUG) {
      id
      databaseId
      title
      date
      content
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
      author {
        node {
          name
          description
          avatar {
            url
          }
        }
      }
    }
  }
`;