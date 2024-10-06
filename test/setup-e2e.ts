import "dotenv";
import { PrismaClient } from "@prisma/client";
import { execSync } from "child_process";

const prisma = new PrismaClient();

/**
 * Generates a new database URL with the given schema ID.
 * The new URL is created by adding the schema ID as a search parameter to the existing DATABASE_URL.
 * If DATABASE_URL is not set, an empty string is returned.
 * @param schemaId Unique identifier for the schema.
 * @returns The new database URL with the given schema ID.
 */
const generateUniqueDatabaseUrl = (schemaId: string): string => {
  if (!process.env.DATABASE_URL) return;

  const url: URL = new URL(process.env.DATABASE_URL);

  url.searchParams.set("schema", schemaId);

  return url.toString();
}

const schemaId: string = crypto.randomUUID();

beforeAll(async () => {
  const databaseUrl: string = generateUniqueDatabaseUrl(schemaId);
  
  process.env.DATABASE_URL = databaseUrl;

  execSync("npx prisma migrate deploy");
});

afterAll(async () => {
  await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schemaId}" CASCADE`);
  await prisma.$disconnect();
})