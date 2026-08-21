-- Supabase SQL Migration
-- Run this in the Supabase SQL Editor to create the required tables.

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT DEFAULT 'Software Development',
  description TEXT NOT NULL,
  tech_stack TEXT[] DEFAULT '{}',
  image_url TEXT,
  live_url TEXT,
  github_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Messages table (contact form submissions)
CREATE TABLE IF NOT EXISTS messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Allow public read access to projects
CREATE POLICY "Public read access for projects"
  ON projects FOR SELECT
  USING (true);

-- Allow public insert access to messages (for contact form)
CREATE POLICY "Public insert access for messages"
  ON messages FOR INSERT
  WITH CHECK (true);

-- Seed projects
INSERT INTO projects (title, category, description, tech_stack, image_url, live_url, github_url) VALUES
  (
    'Bus Ticketing System (Oracle SQL)',
    'Database Architecture',
    'Modelled and normalized a 9-table relational schema (UNF through 3NF) for an intercity bus booking system, then implemented it in Oracle SQL with primary/foreign key constraints. Wrote 10+ SQL queries covering multi-table joins, subqueries, aggregate functions, and transaction-style reporting.',
    ARRAY['Oracle SQL', 'Database Normalization', 'Relational Schema', 'Complex Queries'],
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
    NULL,
    'https://github.com/AshutoshBasnet/bus-ticketing-system-sql.git'
  ),
  (
    'Smart Data Project (Machine Learning)',
    'Data Science & ML',
    'End-to-end data science project in Python covering data cleaning, exploration, data analysis, and machine learning model training using Pandas, NumPy, Matplotlib, and Seaborn.',
    ARRAY['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn'],
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    NULL,
    'https://github.com/AshutoshBasnet/smart-data-analysis-ml.git'
  ),
  (
    'Corexa — E-Commerce Website (Java MVC)',
    'Software Engineering',
    'Developed a Java e-commerce web application using the Model-View-Controller pattern, featuring user authentication, product management, and shopping cart functionality. Applied object-oriented programming principles and MVC architecture to improve code maintainability.',
    ARRAY['Java', 'MVC Architecture', 'OOP', 'JSP / Servlets', 'SQL Database'],
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    NULL,
    'https://github.com/AshutoshBasnet/Corexa__Project.git'
  ),
  (
    'Agile & Scrum Engineering Project',
    'Agile Software Delivery',
    'Applied Agile/Scrum practices in a team coursework project, including sprint planning, backlog management, iterative delivery, and collaborative code reviews.',
    ARRAY['Agile / Scrum', 'Sprint Planning', 'Git Workflow', 'Teamwork', 'Project Management'],
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    NULL,
    'https://github.com/AshutoshBasnet/agile-scrum-project.git'
  );
