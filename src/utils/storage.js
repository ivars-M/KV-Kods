export function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw == null) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadArray(key) {
  const v = loadJson(key, []);
  return Array.isArray(v) ? v : [];
}

export function appendToArray(key, item, { limit = 50 } = {}) {
  const prev = loadArray(key);
  const next = [...prev, item].slice(-limit);
  saveJson(key, next);
  return next;
}

export function clearKey(key) {
  localStorage.removeItem(key);
}

export function createHistoryItem(text) {
  const normalized = String(text ?? "").trim();
  return {
    id:
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    text: normalized,
    ts: Date.now(),
  };
}
