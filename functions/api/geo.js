export async function onRequestGet(context) {
  const { request } = context;
  const country = request.cf?.country || null;

  return new Response(JSON.stringify({ country }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}
