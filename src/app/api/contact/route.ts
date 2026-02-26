import { NextResponse } from 'next/server'

type ContactPayload = {
  firstName: string
  lastName: string
  email: string
  company?: string
  service: string
  message: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const sanitize = (value: string | undefined) => (value ?? '').trim()

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload

    const firstName = sanitize(body.firstName)
    const lastName = sanitize(body.lastName)
    const email = sanitize(body.email)
    const company = sanitize(body.company)
    const service = sanitize(body.service)
    const message = sanitize(body.message)

    if (!firstName || !lastName || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      return NextResponse.json({ error: 'Server is not configured for Web3Forms.' }, { status: 500 })
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New contact request: ${firstName} ${lastName}`,
        from_name: 'CEE Website',
        name: `${firstName} ${lastName}`,
        email,
        company,
        service,
        message
      })
    })

    const responseText = await response.text()
    const contentType = response.headers.get('content-type') ?? ''
    let responseData: { message?: string; success?: boolean } | null = null

    if (contentType.includes('application/json')) {
      try {
        responseData = JSON.parse(responseText) as { message?: string; success?: boolean }
      } catch (error) {
        console.warn('Web3Forms response JSON parse failed:', error)
      }
    }

    if (!response.ok) {
      const errorMessage = responseData?.message ?? responseText ?? 'Web3Forms request failed.'
      throw new Error(errorMessage)
    }

    if (responseData && responseData.success === false) {
      throw new Error(responseData.message ?? 'Web3Forms request failed.')
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
