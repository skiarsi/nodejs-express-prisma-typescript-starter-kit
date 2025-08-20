import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create sample users
  const user1 = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
      posts: {
        create: [
          {
            title: "Check out Prisma with Next.js",
            content: "https://www.prisma.io/nextjs",
            published: true,
          },
          {
            title: "Follow Prisma on Twitter",
            content: "https://twitter.com/prisma",
            published: false,
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      email: "bob@prisma.io",
      name: "Bob",
      posts: {
        create: [
          {
            title: "Prisma Client Just Became a Lot More Flexible",
            content:
              "https://www.prisma.io/blog/prisma-client-just-became-a-lot-more-flexible",
            published: true,
          },
        ],
      },
    },
  });

  console.log("Seed data created:", { user1, user2 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
