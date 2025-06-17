const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

mongoose.connect("mongodb+srv://chaudharyritika313:KsTiN4kbiSh4rvos@cluster1.qqawrha.mongodb.net");

const createAdmin = async () => {
  const email = "admin1@example.com";
  const plainPassword = "Admin@785";

  const existingAdmin = await Admin.findOne({ email });
  if (existingAdmin) {
    console.log("✅ Admin already exists");
    return process.exit();
  }

  const hashedPassword = await bcrypt.hash(plainPassword, 10);
  const admin = new Admin({ email, password: hashedPassword });

  await admin.save();
  console.log("✅ Admin created successfully");
  process.exit();
};

createAdmin().catch((err) => {
  console.error(err);
  process.exit(1);
});
