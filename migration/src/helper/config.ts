require("dotenv").config();
const { env } = process;

export type ApplicationConfiguration = {
  [configName in ConfigOption]: string;
};

export enum ConfigOption {
  DESTINATION_API_BASE_URL = "DESTINATION_API_BASE_URL",
  SOURCE_RPC_PORT = "SOURCE_RPC_PORT",
  SOURCE_RPC_USER = "SOURCE_RPC_USER",
  SOURCE_RPC_PASSWORD = "SOURCE_RPC_PASSWORD",
  SOURCE_RPC_HOST = "SOURCE_RPC_HOST",
  DESTINATION_RPC_PORT = "DESTINATION_RPC_PORT",
  DESTINATION_RPC_USER = "DESTINATION_RPC_USER",
  DESTINATION_RPC_PASSWORD = "DESTINATION_RPC_PASSWORD",
  DESTINATION_RPC_HOST = "DESTINATION_RPC_HOST",
  BACKUP_FILE_LOCATION = "BACKUP_FILE_LOCATION",
  DESTINATION_BLOCKCHAIN_BASE_URL = "DESTINATION_BLOCKCHAIN_BASE_URL",
  ROOT_SECRET = "ROOT_SECRET",
  ORGANIZATION = "ORGANIZATION",
  MIGRATION_USER_PASSWORD = "MIGRATION_USER_PASSWORD",
  MIGRATION_USER_USERNAME = "MIGRATION_USER_USERNAME",
}

const config: ApplicationConfiguration = {
  DESTINATION_API_BASE_URL: env.DESTINATION_API_BASE_URL,
  SOURCE_RPC_PORT: env.SOURCE_RPC_PORT,
  SOURCE_RPC_USER: env.SOURCE_RPC_USER,
  SOURCE_RPC_PASSWORD: env.SOURCE_RPC_PASSWORD,
  SOURCE_RPC_HOST: env.SOURCE_RPC_HOST,
  DESTINATION_RPC_PORT: env.DESTINATION_RPC_PORT,
  DESTINATION_RPC_USER: env.DESTINATION_RPC_USER,
  DESTINATION_RPC_PASSWORD: env.DESTINATION_RPC_PASSWORD,
  DESTINATION_RPC_HOST: env.DESTINATION_RPC_HOST,
  BACKUP_FILE_LOCATION: env.BACKUP_FILE_LOCATION,
  DESTINATION_BLOCKCHAIN_BASE_URL: env.DESTINATION_BLOCKCHAIN_BASE_URL,
  ROOT_SECRET: env.ROOT_SECRET,
  ORGANIZATION: env.ORGANIZATION,
  MIGRATION_USER_PASSWORD: env.MIGRATION_USER_PASSWORD,
  // This is hard-coding in intended.
  // TruBudget frontend can display that a migration has happened looking at the history & searching for the migration-user
  MIGRATION_USER_USERNAME: "migration-user",
};

const isEnvironmentSet = (
  config: ApplicationConfiguration
): ApplicationConfiguration => {
  if (
    config.DESTINATION_API_BASE_URL &&
    config.SOURCE_RPC_PORT &&
    config.SOURCE_RPC_USER &&
    config.SOURCE_RPC_PASSWORD &&
    config.SOURCE_RPC_HOST &&
    config.DESTINATION_RPC_PORT &&
    config.DESTINATION_RPC_USER &&
    config.DESTINATION_RPC_PASSWORD &&
    config.DESTINATION_RPC_HOST &&
    config.BACKUP_FILE_LOCATION &&
    config.DESTINATION_BLOCKCHAIN_BASE_URL &&
    config.ROOT_SECRET &&
    config.ORGANIZATION &&
    config.MIGRATION_USER_PASSWORD
  )
    return config;

  throw new Error(
    "At least one environment variable is not set. Please review your settings!"
  );
};

export default isEnvironmentSet(config);