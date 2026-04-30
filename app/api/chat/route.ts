import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages, systemPrompt } = await req.json();

    if (!messages || !systemPrompt) {
      return NextResponse.json({ error: 'Messages and systemPrompt are required' }, { status: 400 });
    }

    const payload = {
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
      temperature: 0.7,
    };

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`DeepSeek API error: ${response.statusText}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('API Chat Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
