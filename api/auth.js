export default async function handler(req) {
    const auth = req.headers.get("authorization");

    // process.env → import.meta.env に置き換え
    const user = import.meta.env.VITE_BASIC_AUTH_USER;
    const pass = import.meta.env.VITE_BASIC_AUTH_PASSWORD;

    if (!auth) {
        return new Response("Unauthorized", {
            status: 401,
            headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
        });
    }

    const [scheme, encoded] = auth.split(" ");
    if (scheme !== "Basic") return new Response("Unauthorized", { status: 401 });

    const [u, p] = atob(encoded).split(":");
    if (u !== user || p !== pass) return new Response("Unauthorized", { status: 401 });

    // 認証OK → 本来の静的ファイルにフォワード
    return fetch(req.url);
}
