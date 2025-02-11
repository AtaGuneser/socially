
import prisma from "@/lib/prisma";


export default async function Home() {
  const posts = await prisma.post.findMany();
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

