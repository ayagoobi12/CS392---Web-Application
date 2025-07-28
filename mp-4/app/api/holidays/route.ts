import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // This extracts the necessary url formatting from the API Requirements 
  const url = new URL(request.url);
  const country = url.searchParams.get('country') || 'US';
  const year = url.searchParams.get('year') || new Date().getFullYear().toString();
  const month = url.searchParams.get('month') || '';
  const day = url.searchParams.get('day') || '';

  //Grabs the proper & necesssary api key 
  const apiKey = process.env.HOLIDAY_API_KEY;

  //Generates the endpoint usage 
  const endpoint = `https://holidays.abstractapi.com/v1/?api_key=${apiKey}&country=${country}&year=${year}&month=${month}&day=${day}`;

  try {
    // Make the request to the Abstract API
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error('API error');

    // Parse the result as JSON
    const data = await res.json();

    // Return the data back to the frontend via Next.js
    return NextResponse.json(data);
  } catch (err) {
    // Handle API errors gracefully
    return NextResponse.json({ error: 'Failed to fetch holiday data' }, { status: 500 });
  }
}
