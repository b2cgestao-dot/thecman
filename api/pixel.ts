export const config = { runtime: 'edge' }

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  try {
    const { event_name, event_source_url, fbp, fbc } = await req.json() as {
      event_name: string
      event_source_url: string
      fbp?: string
      fbc?: string
    }

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? ''
    const userAgent = req.headers.get('user-agent') ?? ''

    const userData: Record<string, string> = {
      client_ip_address: ip,
      client_user_agent: userAgent,
    }
    if (fbp) userData.fbp = fbp
    if (fbc) userData.fbc = fbc

    const res = await fetch(
      `https://graph.facebook.com/v19.0/${process.env.FB_PIXEL_ID}/events`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [
            {
              event_name,
              event_time: Math.floor(Date.now() / 1000),
              event_source_url,
              action_source: 'website',
              user_data: userData,
            },
          ],
          access_token: process.env.FB_CAPI_TOKEN,
        }),
      }
    )

    if (!res.ok) {
      console.error('Facebook CAPI error:', await res.text())
    }

    return new Response('ok', { status: 200 })
  } catch (err) {
    console.error('Pixel handler error:', err)
    return new Response('Internal Server Error', { status: 500 })
  }
}
