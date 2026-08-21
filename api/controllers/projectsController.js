import { supabase } from '../lib/supabase.js';

// Fallback mock data when Supabase is not configured
const mockProjects = [
  {
    id: 1,
    title: 'AI Sentiment Analyzer',
    description:
      'A machine learning pipeline that classifies social-media sentiment in real time using NLP transformers and a React dashboard.',
    tech_stack: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    image_url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
    live_url: 'https://example.com',
    github_url: 'https://github.com',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce application with user authentication, payment processing via Stripe, and an admin dashboard.',
    tech_stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    image_url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    live_url: 'https://example.com',
    github_url: 'https://github.com',
  },
  {
    id: 3,
    title: 'Real-Time Chat App',
    description:
      'WebSocket-powered messaging app with end-to-end encryption, read receipts, and support for media attachments.',
    tech_stack: ['React', 'Socket.io', 'Express', 'MongoDB'],
    image_url: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80',
    live_url: 'https://example.com',
    github_url: 'https://github.com',
  },
  {
    id: 4,
    title: 'Data Visualization Dashboard',
    description:
      'Interactive dashboard for exploring large datasets with real-time filtering, charting, and CSV/PDF export capabilities.',
    tech_stack: ['D3.js', 'React', 'Python', 'Pandas'],
    image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    live_url: 'https://example.com',
    github_url: 'https://github.com',
  },
  {
    id: 5,
    title: 'Cloud DevOps Pipeline',
    description:
      'CI/CD automation suite with Docker containerization, Kubernetes orchestration, and integrated monitoring dashboards.',
    tech_stack: ['Docker', 'Kubernetes', 'Terraform', 'AWS'],
    image_url: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80',
    live_url: 'https://example.com',
    github_url: 'https://github.com',
  },
];

export async function getProjects(req, res) {
  try {
    if (!supabase) {
      return res.json({ data: mockProjects, source: 'mock' });
    }

    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('id', { ascending: true });

    if (error) throw error;

    return res.json({ data, source: 'supabase' });
  } catch (err) {
    console.error('Error fetching projects:', err.message);
    // Fall back to mock data on error
    return res.json({ data: mockProjects, source: 'mock' });
  }
}
