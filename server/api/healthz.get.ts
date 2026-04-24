// Dev-server health check. Does not touch the database so command-center's
// probe can distinguish "server up" from "MongoDB unreachable" — the latter
// is a config problem (stale DB_URI) that shouldn't block the dev server
// from being registered as up.
export default defineEventHandler(() => {
  return { ok: true }
})
