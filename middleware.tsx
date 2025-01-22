import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { auth } from "./lib/firebase"

export async function middleware(request: NextRequest) {
  const session = await auth.currentUser

  if (!session && !request.nextUrl.pathname.startsWith("/")) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/home", "/gallery", "/videos", "/peace"],
}

