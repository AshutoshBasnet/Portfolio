const API_BASE = '/api';

export async function fetchProjects() {
  try {
    const response = await fetch(`${API_BASE}/projects`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.warn('API unavailable, using fallback data:', error.message);
    return null; // Signals caller to use mock data
  }
}

export async function submitContact({ name, email, message }) {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || 'Failed to send message');
  }

  return result;
}
