/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:MTgHYIo1Brz7@ep-round-silence-a1f6lp4j.ap-southeast-1.aws.neon.tech/aiappcontend?sslmode=require'
    }
  };
  