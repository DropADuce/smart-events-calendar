export async function POST(req: Request) {
  const formData = await req.formData();

  return await fetch(`${process.env.API_URL}/users/upload`, {
    method: "POST",
    body: formData,
  });
}
