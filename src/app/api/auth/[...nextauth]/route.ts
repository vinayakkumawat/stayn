export async function GET() {
    const data = "hello! its a test api"
   
    return Response.json({ data })
  }