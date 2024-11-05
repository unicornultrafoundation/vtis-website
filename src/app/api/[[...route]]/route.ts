import baseAxios from '@/sevices/baseAxios'; 

export async function GET(request: Request) {
  const pathName = request.url.split("/api/")[1];
  try {
    const data = await baseAxios.get(`/${pathName}.json`);
    return Response.json(
      {
        data,
        message: 'success',
      },
      {
        status: 200,
      },
    );
  } catch (e: any) {
    return Response.json(
      { message: 'Failed to fetch app settings', error: e.message },
      {
        status: 400,
      },
    );
  }
}