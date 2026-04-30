async function test() {
  const res = await fetch('https://www.nexops.agency/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemPrompt: 'Test',
      messages: [{role: 'user', content: 'Hi'}]
    })
  });
  console.log(res.status, res.statusText);
  const text = await res.text();
  console.log(text);
}
test();
