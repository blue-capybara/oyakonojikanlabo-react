// src/lib/graphql.ts
export const fetchGraphQL = async (query: string, variables = {}) => {
  const res = await fetch('https://oyakonojikanlabo.jp/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('GraphQL エラー');
  }

  return json.data;
};
