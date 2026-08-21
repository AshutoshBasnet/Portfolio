import { supabase } from '../lib/supabase.js';

export async function submitContact(req, res) {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'All fields are required: name, email, message.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    if (message.length < 10) {
      return res.status(400).json({ error: 'Message must be at least 10 characters.' });
    }

    if (!supabase) {
      console.log('📩 Contact form submission (no DB):', { name, email, message });
      return res.json({
        success: true,
        message: 'Message received! (Database not configured — logged to console)',
      });
    }

    const { error } = await supabase
      .from('messages')
      .insert([{ name, email, message }]);

    if (error) throw error;

    return res.json({ success: true, message: 'Thank you! Your message has been sent.' });
  } catch (err) {
    console.error('Error submitting contact:', err.message);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
}
