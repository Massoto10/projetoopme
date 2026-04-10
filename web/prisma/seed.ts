import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const email =
    process.env.INIT_ADMIN_EMAIL?.toLowerCase().trim() || "admin@local.dev";
  const password = process.env.INIT_ADMIN_PASSWORD || "AdminSeguro123!";
  const name = process.env.INIT_ADMIN_NAME || "Administrador";

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.user.upsert({
    where: { email },
    create: { email, name, passwordHash, role: "ADMIN" },
    update: { name, passwordHash, role: "ADMIN" },
  });

  console.log(`Admin garantido: ${email} (atualizado ou criado).`);
  console.log(
    "Defina INIT_ADMIN_EMAIL e INIT_ADMIN_PASSWORD no .env em produção.",
  );
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
