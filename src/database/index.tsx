// import { createConnection, Connection } from "typeorm";
// import { PlatformTools } from "typeorm/platform/PlatformTools";

// // Konfigurasi koneksi SQLite untuk Cordova
// export const initializeDB = async (): Promise<Connection> => {
//   (window as any).sqlitePlugin.selfTest(function() {
//     console.log("SQLite plugin is OK");
//   });

//   return createConnection({
//     type: "cordova",
//     database: "test.db",
//     location: "default",
//     logging: ["error", "schema"],
//     synchronize: true,  // Auto generate schema
//     entities: [
//       // Import entity di sini (contoh: User entity)
//       User
//     ],
//     extra: {
//       driver: (window as any).sqlitePlugin
//     }
//   });
// };