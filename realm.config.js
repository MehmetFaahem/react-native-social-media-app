import Realm from "realm";

const appConfig = {
  id: "your-app-id", // Replace with your MongoDB Realm app ID
  timeout: 10000,
};

const realmConfig = {
  schema: [
    /* your schema */
  ],
  sync: {
    user: appConfig.id,
    partitionValue: "your-partition-value", // Replace with your partition value
  },
};

export default new Realm(appConfig, realmConfig);
