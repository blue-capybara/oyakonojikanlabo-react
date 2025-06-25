// src/lib/graphql.ts
export const fetchGraphQL = async (query: string, variables = {}) => {
  try {
    console.log('GraphQL Request:', { query, variables });
    
    const res = await fetch('https://oyakonojikanlabo.jp/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const json = await res.json();
    console.log('GraphQL Response:', json);
    
    if (json.errors) {
      console.error('GraphQL Errors:', json.errors);
      throw new Error(`GraphQL エラー: ${json.errors.map((e: any) => e.message).join(', ')}`);
    }

    return json.data;
  } catch (error) {
    console.error('GraphQL Fetch Error:', error);
    throw error;
  }
};